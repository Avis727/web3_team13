"use client";

import Image from "next/image";
import { useEns } from "@/lib/useEns";
import { Wallet } from "lucide-react";

interface EnsDisplayProps {
  address: string;
  showAvatar?: boolean;
  truncate?: boolean;
  className?: string;
  /** Show a small .eth pill badge next to the name */
  showBadge?: boolean;
}

export function EnsDisplay({
  address,
  showAvatar = true,
  truncate = true,
  className = "",
  showBadge = false,
}: EnsDisplayProps) {
  const { ensName, ensAvatar, loading } = useEns(address);

  const displayText = ensName
    ? ensName
    : truncate
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;

  return (
    <div className={`flex items-center gap-2 ${className}`} title={address}>
      {/* Avatar */}
      {showAvatar && (
        ensAvatar ? (
          <Image
            src={ensAvatar}
            alt={ensName ?? "ENS Avatar"}
            width={24}
            height={24}
            className="h-6 w-6 rounded-full ring-1 ring-primary/30"
            unoptimized
          />
        ) : (
          <Wallet className="h-4 w-4" />
        )
      )}

      {/* Name / address */}
      <span className={`font-mono text-sm ${loading ? "opacity-60" : ""}`}>
        {displayText}
      </span>

      {/* .eth badge */}
      {showBadge && ensName && (
        <span className="inline-flex items-center rounded-full bg-indigo-500/15 border border-indigo-400/30 px-1.5 py-0.5 text-[10px] font-bold text-indigo-400 leading-none">
          ENS
        </span>
      )}
    </div>
  );
}
