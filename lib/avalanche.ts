// Avalanche C-Chain configuration for L2Earn dNZD bridge

export const AVALANCHE_CONFIG = {
  chainId: 43114,
  chainName: "Avalanche C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrl: process.env.NEXT_PUBLIC_AVALANCHE_RPC_URL || "https://api.avax.network/ext/bc/C/rpc",
  blockExplorer: "https://snowtrace.io",
};

export const AVALANCHE_DNZD_CONTRACT = process.env.AVALANCHE_DNZD_TOKEN || "0x0000000000000000000000000000000000000000";

export const BRIDGE_CONFIG = {
  // Simple bridge: Base → Avalanche
  // User initiates withdrawal on Base, server mints equivalent on Avalanche
  baseTokenAddress: process.env.NZD_TOKEN_ADDRESS || "0x63ee4b77d3912DC7bCe711c3BE7bF12D532F1853",
  avalancheTokenAddress: AVALANCHE_DNZD_CONTRACT,
  bridgeFeePercent: 0.5, // 0.5% fee
};

export interface CrossChainBridgeRequest {
  userAddress: string; // Avalanche address
  amount: number; // in dNZD cents
  sourceChain: "base" | "avalanche";
  targetChain: "base" | "avalanche";
}

export interface BridgeStatus {
  status: "pending" | "initiated" | "completed" | "failed";
  txHashSource?: string;
  txHashTarget?: string;
  amount: number;
  fee: number;
  timestamp: number;
}
