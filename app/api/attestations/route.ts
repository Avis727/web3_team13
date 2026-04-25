import { NextResponse } from "next/server";
import { EAS_CONFIG, CourseAttestation } from "@/lib/eas";

export const runtime = "nodejs";

// In-memory attestation store (replace with database in production)
const attestations: Map<string, CourseAttestation> = new Map();

export async function POST(req: Request) {
  let body: { userAddress: string; campaignId: string; score: number };
  try {
    body = (await req.json()) as { userAddress: string; campaignId: string; score: number };
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { userAddress, campaignId, score } = body;

  if (!userAddress || !campaignId || score === undefined) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // In production, this would call EAS contract to create attestation
    // For MVP, we create a simulated attestation
    const attestationId = `att_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const attestation: CourseAttestation = {
      id: attestationId,
      recipient: userAddress.toLowerCase(),
      campaignId,
      score,
      completedAt: Date.now(),
      txHash: `0x${Math.random().toString(16).slice(2)}`, // Mock tx hash
      attesterAddress: "0xL2EarnAttester",
    };

    attestations.set(attestationId, attestation);

    return NextResponse.json({
      ok: true,
      attestationId,
      message: `Course completion attested for campaign ${campaignId}`,
      attestationUrl: `${EAS_CONFIG.easExplorer}/attestation/${attestationId}`,
      portable: true,
      description: "This attestation is portable and can be verified across protocols",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { ok: false, error: `Attestation failed: ${message}` },
      { status: 500 }
    );
  }
}

// Get attestations for user
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userAddress = searchParams.get("userAddress");

  if (!userAddress) {
    return NextResponse.json(
      { ok: false, error: "userAddress is required" },
      { status: 400 }
    );
  }

  const userAttestations = Array.from(attestations.values()).filter(
    (att) => att.recipient.toLowerCase() === userAddress.toLowerCase()
  );

  return NextResponse.json({
    ok: true,
    attestations: userAttestations,
    count: userAttestations.length,
  });
}
