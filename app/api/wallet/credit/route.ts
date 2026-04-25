import { NextResponse } from "next/server";
import { credit } from "@/lib/store";
import { getCampaign } from "@/lib/campaigns";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: { address?: string; campaignId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { address, campaignId } = body;
  if (!address || !campaignId) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const campaign = getCampaign(campaignId);
  if (!campaign) {
    return NextResponse.json({ error: "unknown_campaign" }, { status: 404 });
  }

  const result = await credit(address, campaignId, campaign.rewardCents);
  if (!result.ok) {
    const status = result.reason === "already_claimed" ? 409 : 400;
    return NextResponse.json({ error: result.reason }, { status });
  }

  return NextResponse.json({
    ok: true,
    amountCents: campaign.rewardCents,
    balanceCents: result.balanceCents,
    currency: "dNZD",
  });
}
