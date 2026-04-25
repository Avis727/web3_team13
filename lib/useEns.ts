import { useEffect, useState } from "react";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(
    process.env.NEXT_PUBLIC_RPC_URL || "https://eth-mainnet.public.blastapi.io"
  ),
});

export function useEns(address?: string) {
  const [ensName, setEnsName] = useState<string | null>(null);
  const [ensAvatar, setEnsAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) {
      setEnsName(null);
      setEnsAvatar(null);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const resolveEns = async () => {
      setLoading(true);
      try {
        // Wrap in timeout promise
        const ensPromise = publicClient.getEnsName({
          address: address as `0x${string}`,
        });

        const name = await Promise.race([
          ensPromise,
          new Promise<null>((_, reject) =>
            setTimeout(
              () => reject(new Error("ENS resolution timeout")),
              4500
            )
          ),
        ]);

        if (!isMounted) return;

        if (name) {
          setEnsName(name);

          try {
            const avatar = await publicClient.getEnsAvatar({
              name,
            });
            if (avatar && isMounted) {
              setEnsAvatar(avatar);
            }
          } catch {
            // Avatar resolution failed, continue without it
          }
        }
      } catch (error) {
        // Silently fail - ENS is optional, just show truncated address
        if (isMounted) {
          setEnsName(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    resolveEns();

    return () => {
      isMounted = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [address]);

  return { ensName, ensAvatar, loading };
}

export function formatAddress(address: string, ensName?: string | null) {
  if (ensName) return ensName;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
