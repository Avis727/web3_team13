"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function TutorialModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-xs font-semibold"
          title="Learn how L2Earn works"
        >
          <HelpCircle className="h-4 w-4" />
          <span className="hidden sm:inline">How it works</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">How L2Earn Works</DialogTitle>
          <DialogDescription>
            Learn-to-earn on dNZD stablecoins. Built for humans and AI agents.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* How it works */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">📚 The Flow</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>
                <span className="font-medium text-foreground">Connect wallet</span> on{" "}
                <code className="bg-muted px-2 py-1 rounded text-xs">/wallet</code>
              </li>
              <li>
                <span className="font-medium text-foreground">Browse campaigns</span> — brands
                sponsor educational videos
              </li>
              <li>
                <span className="font-medium text-foreground">Watch video</span> and read the
                campaign brief
              </li>
              <li>
                <span className="font-medium text-foreground">Take AI-tutored quiz</span> —
                Claude generates 3 questions live
              </li>
              <li>
                <span className="font-medium text-foreground">Pass 2 of 3</span> to earn{" "}
                <strong>5 dNZD</strong>
              </li>
              <li>
                <span className="font-medium text-foreground">Payout sent to wallet</span> +
                on-chain attestation created
              </li>
            </ol>
          </div>

          {/* Why dNZD */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">💰 Why dNZD?</h3>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">dNZD</strong> is a NZ-regulated, 1:1
              reserve-backed stablecoin. Multi-chain via LayerZero. No volatility, no FX
              friction for NZ businesses.
            </p>
          </div>

          {/* The Great Handover */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">🤖 The Great Handover</h3>
            <p className="text-sm text-muted-foreground">
              By 2126, your buyer is an AI agent. L2Earn's{" "}
              <code className="bg-muted px-2 py-1 rounded text-xs">/api/agents/campaigns</code>{" "}
              is an <strong>open machine-readable feed</strong>. AI agents read it before
              recommending brands to users.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">⚙️ Tech Stack</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-border/50 bg-muted/30 p-3">
                <p className="font-medium text-foreground">Frontend</p>
                <p className="text-xs text-muted-foreground">Next.js 16 · React 19 · TypeScript · Tailwind v4</p>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-3">
                <p className="font-medium text-foreground">Blockchain</p>
                <p className="text-xs text-muted-foreground">wagmi · viem · AppKit · EAS · dNZD</p>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-3">
                <p className="font-medium text-foreground">AI</p>
                <p className="text-xs text-muted-foreground">Anthropic Claude Haiku · Quiz generation & grading</p>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-3">
                <p className="font-medium text-foreground">Infrastructure</p>
                <p className="text-xs text-muted-foreground">Base · Arbitrum · Polygon · Optimism · Mainnet</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">✨ Key Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>
                <span className="font-medium text-foreground">AI tutor</span> — Live quiz
                generation from campaign transcript
              </li>
              <li>
                <span className="font-medium text-foreground">Real-time grading</span> — Instant feedback & explanations
              </li>
              <li>
                <span className="font-medium text-foreground">ENS integration</span> — Identify users by domain names
              </li>
              <li>
                <span className="font-medium text-foreground">On-chain attestations</span> — Shareable course completion proof
              </li>
              <li>
                <span className="font-medium text-foreground">Global leaderboard</span> — Track top learners
              </li>
              <li>
                <span className="font-medium text-foreground">One-shot payout guard</span> — No double-earnings
              </li>
            </ul>
          </div>

          {/* About the hackathon */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">🏆 About</h3>
            <p className="text-sm text-muted-foreground">
              Built for <strong className="text-foreground">Web3NZ Hackathon Apr 2026</strong> by Team 13 @ University of Auckland.
              Track: <strong className="text-foreground">NewMoney Builder</strong> ($500) +{" "}
              <strong className="text-foreground">The Great Handover</strong> theme.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
