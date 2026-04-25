import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, polygon, optimism, base, baseSepolia, avalanche } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";

export const networks = [base, baseSepolia, mainnet, arbitrum, polygon, optimism, avalanche];

export const wagmiAdapter = new WagmiAdapter({
  ssr: false,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
