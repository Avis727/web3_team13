import { Navbar } from "@/components/navbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "How It Works | L2Earn",
  description: "Learn how L2Earn works — the flow, the tech, and why dNZD.",
};

const STEPS = [
  {
    number: "01",
    title: "Connect your wallet",
    description:
      "Link a MetaMask or compatible wallet. Your address is your identity — no account, no password.",
  },
  {
    number: "02",
    title: "Browse campaigns",
    description:
      "Brands sponsor short educational videos. Pick a topic that interests you from Easy, Medium, or Hard.",
  },
  {
    number: "03",
    title: "Watch and read",
    description:
      "Watch the campaign video and read the brief. The quiz draws directly from this content.",
  },
  {
    number: "04",
    title: "Take the AI-tutored quiz",
    description:
      "Answer 3 questions generated from the campaign transcript. Instant feedback on every answer.",
  },
  {
    number: "05",
    title: "Pass and earn",
    description:
      "Score 2 of 3 to pass. dNZD is sent directly to your connected wallet — no middlemen.",
  },
  {
    number: "06",
    title: "On-chain attestation",
    description:
      "A tamper-proof EAS attestation is created on-chain recording your completion, score, and timestamp.",
  },
];

const TECH = [
  {
    label: "Frontend",
    detail: "Next.js 16 · React 19 · TypeScript · Tailwind v4",
  },
  {
    label: "Blockchain",
    detail: "wagmi · viem · Reown AppKit · EAS · dNZD",
  },
  {
    label: "AI",
    detail: "Anthropic Claude Haiku — quiz generation and grading",
  },
  {
    label: "Infrastructure",
    detail: "Base · Arbitrum · Polygon · Optimism · Mainnet",
  },
];

const FEATURES = [
  {
    title: "AI tutor",
    description: "Live quiz generation from each campaign's transcript.",
  },
  {
    title: "Real-time grading",
    description: "Instant answer feedback with explanations after every submission.",
  },
  {
    title: "ENS integration",
    description: "Human-readable .eth names displayed wherever addresses appear.",
  },
  {
    title: "On-chain attestations",
    description: "Shareable, verifiable proof of course completion via EAS.",
  },
  {
    title: "Global leaderboard",
    description: "Track the top learners earning dNZD across all campaigns.",
  },
  {
    title: "One-shot payout guard",
    description: "Server-side guard prevents double-earning on the same campaign.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-72px)]">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">

          {/* Hero */}
          <header className="mb-20 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              How it works
            </p>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Learn-to-earn on dNZD stablecoins.
            </h1>
            <p className="text-lg text-muted-foreground">
              Built for humans and AI agents. Watch, quiz, get paid — entirely on-chain.
            </p>
          </header>

          {/* Steps */}
          <section className="mb-20">
            <h2 className="mb-8 text-2xl font-bold text-foreground">The flow</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-border/60 bg-card/60 p-6 transition-all hover:border-primary/40 hover:bg-card"
                >
                  <p className="mb-3 text-3xl font-black text-primary/40">{step.number}</p>
                  <h3 className="mb-2 text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why dNZD */}
          <section className="mb-20">
            <div className="rounded-xl border border-border/60 bg-card/60 p-8 md:p-10">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Why dNZD?</h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                <strong className="text-foreground">dNZD</strong> is a NZ-regulated, 1:1
                reserve-backed stablecoin issued by NewMoney. Multi-chain via LayerZero. No
                volatility, no FX friction for NZ businesses. Every token in circulation is backed
                by real NZD held in a New Zealand-registered bank under a bare-trust structure —
                meaning you have a direct, redeemable claim on the underlying cash.
              </p>
            </div>
          </section>

          {/* The Great Handover */}
          <section className="mb-20">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <h2 className="mb-4 text-2xl font-bold text-foreground">The Great Handover</h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                By 2126, your buyer is an AI agent. L2Earn publishes an{" "}
                <strong className="text-foreground">open machine-readable feed</strong> at{" "}
                <code className="rounded bg-muted px-2 py-0.5 text-xs">/api/agents/campaigns</code>.
                AI agents read it before recommending brands to users — structured data, rewards, and
                human redirect links, all in one JSON endpoint.
              </p>
              <a
                href="/api/agents/campaigns"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                View the agent feed
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* Key features */}
          <section className="mb-20">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Key features</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border/60 bg-card/60 p-5 transition-all hover:border-primary/40 hover:bg-card"
                >
                  <h3 className="mb-1.5 text-sm font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech stack */}
          <section className="mb-20">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Tech stack</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TECH.map((t) => (
                <div
                  key={t.label}
                  className="rounded-xl border border-border/60 bg-card/60 p-5"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    {t.label}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="mb-12">
            <div className="rounded-xl border border-border/60 bg-card/60 p-8">
              <h2 className="mb-3 text-2xl font-bold text-foreground">About</h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Built for <strong className="text-foreground">Web3NZ Hackathon April 2026</strong>{" "}
                by Team 13 at the University of Auckland. Tracks:{" "}
                <strong className="text-foreground">NewMoney Builder</strong> and{" "}
                <strong className="text-foreground">The Great Handover</strong>.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href="/campaigns"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:-translate-y-0.5"
            >
              Browse campaigns
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/wallet"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-card hover:-translate-y-0.5"
            >
              Connect wallet
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
