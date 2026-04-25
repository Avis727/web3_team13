import { NextResponse } from "next/server";
import { AVALANCHE_CONFIG, BRIDGE_CONFIG, CrossChainBridgeRequest } from "@/lib/avalanche";
import { getUser } from "@/lib/store";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: CrossChainBridgeRequest;
  try {
    body = (await req.json()) as CrossChainBridgeRequest;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { userAddress, amount, sourceChain, targetChain } = body;

  if (!userAddress || !amount || !sourceChain || !targetChain) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (sourceChain === targetChain) {
    return NextResponse.json(
      { ok: false, error: "Source and target chains must be different" },
      { status: 400 }
    );
  }

  try {
    // Get user balance
    const user = getUser(userAddress);
    const userBalance = user.balance;

    // Calculate fee (0.5%)
    const fee = Math.round(amount * (BRIDGE_CONFIG.bridgeFeePercent / 100));
    const netAmount = amount - fee;

    if (userBalance < amount) {
      return NextResponse.json(
        {
          ok: false,
          error: `Insufficient balance. Have ${(userBalance / 100).toFixed(2)} dNZD, need ${(amount / 100).toFixed(2)} dNZD`,
        },
        { status: 409 }
      );
    }

    // TODO: In production, this would:
    // 1. Lock tokens on source chain
    // 2. Mint equivalent on target chain
    // 3. Update bridge state

    // For MVP, we simulate the bridge
    const bridgeId = `bridge_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

    return NextResponse.json({
      ok: true,
      bridgeId,
      sourceChain,
      targetChain,
      amount: netAmount,
      fee,
      message: `Bridge initiated. You will receive ${(netAmount / 100).toFixed(2)} dNZD on ${targetChain === "avalanche" ? "Avalanche C-Chain" : "Base"}`,
      bridgeStatus:
        targetChain === "avalanche"
          ? `View on Avalanche: ${AVALANCHE_CONFIG.blockExplorer}`
          : "View on Base: https://basescan.org",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { ok: false, error: `Bridge failed: ${message}` },
      { status: 500 }
    );
  }
}

// Get bridge status
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bridgeId = searchParams.get("bridgeId");

  if (!bridgeId) {
    return NextResponse.json(
      { ok: false, error: "bridgeId is required" },
      { status: 400 }
    );
  }

  // TODO: Fetch actual bridge status from store
  return NextResponse.json({
    bridgeId,
    status: "pending",
    message: "Bridge in progress...",
  });
}
