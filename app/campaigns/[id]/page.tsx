import { notFound } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import { ArrowLeft, Coins } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Web3Provider } from "@/components/web3-provider";
import { QuizPlayer } from "@/components/quiz-player";
import { Badge } from "@/components/ui/badge";
import { getCampaign } from "@/lib/campaigns";
import { formatDnzd } from "@/lib/store";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = getCampaign(id);
  return {
    title: c ? `${c.title} | L2Earn` : "Campaign | L2Earn",
    description: c?.summary,
  };
}

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = getCampaign(id);
  if (!campaign) notFound();

  const headersList = await headers();
  const cookies = headersList.get("cookie");

  return (
    <Web3Provider cookies={cookies}>
      <Navbar />
      <main className="min-h-[calc(100vh-72px)]">
        <div className="container mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          <Link
            href="/campaigns"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All campaigns
          </Link>

          <header className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {campaign.brand}
              </span>
              <span className="text-muted-foreground/40">·</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">
                <Coins className="h-3.5 w-3.5" />
                {formatDnzd(campaign.rewardCents)} dNZD reward
              </span>
            </div>
            <h1 className="mb-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
              {campaign.title}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">{campaign.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {campaign.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="mb-8 overflow-hidden rounded-xl border border-border/60 bg-black/40">
            <div className="aspect-video w-full">
              <iframe
                src={campaign.videoUrl}
                title={campaign.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          <QuizPlayer campaignId={campaign.id} rewardCents={campaign.rewardCents} />
        </div>
      </main>
      <Footer />
    </Web3Provider>
  );
}
