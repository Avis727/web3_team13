import Link from "next/link";
import { ArrowRight, Coins, CheckCircle2, Zap, Flame, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Campaign, Difficulty } from "@/lib/campaigns";
import { formatDnzd } from "@/lib/dnzd";

const DIFFICULTY_CONFIG: Record<
  Difficulty,
  { label: string; icon: React.ReactNode; card: string; badge: string; accent: string }
> = {
  easy: {
    label: "Easy",
    icon: <Zap className="h-3 w-3" />,
    card: "group-hover:border-emerald-400/60",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    accent: "from-emerald-500/60 via-emerald-400 to-emerald-500/60",
  },
  medium: {
    label: "Medium",
    icon: <Shield className="h-3 w-3" />,
    card: "group-hover:border-amber-400/60",
    badge: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    accent: "from-amber-500/60 via-amber-400 to-amber-500/60",
  },
  hard: {
    label: "Hard",
    icon: <Flame className="h-3 w-3" />,
    card: "group-hover:border-rose-400/60",
    badge: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    accent: "from-rose-500/60 via-rose-400 to-rose-500/60",
  },
};

export function CampaignCard({
  campaign,
  isCompleted = false,
}: {
  campaign: Campaign;
  isCompleted?: boolean;
}) {
  const diff = DIFFICULTY_CONFIG[campaign.difficulty];

  return (
    <Link href={`/campaigns/${campaign.id}`} className="group block relative">
      {/* Completion badge */}
      {isCompleted && (
        <div className="absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-green-500/30">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Completed
        </div>
      )}

      <Card
        className={`h-full border-border/60 backdrop-blur transition-all ${
          isCompleted
            ? "bg-card/40 border-green-500/30 group-hover:border-green-400/60"
            : `bg-card/60 ${diff.card}`
        }`}
      >
        {/* Top accent strip — green if completed, difficulty colour otherwise */}
        <div
          className={`h-0.5 w-full rounded-t-xl bg-gradient-to-r ${
            isCompleted
              ? "from-green-500/60 via-green-400 to-green-500/60"
              : diff.accent
          }`}
        />

        <CardContent className="flex h-full flex-col p-6">
          {/* Row: brand + reward */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {campaign.brand}
            </span>
            {isCompleted ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-bold text-green-400 border border-green-500/30">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Earned {formatDnzd(campaign.rewardCents)} dNZD
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">
                <Coins className="h-3.5 w-3.5" />
                {formatDnzd(campaign.rewardCents)} dNZD
              </span>
            )}
          </div>

          {/* Difficulty badge */}
          <div className="mb-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${diff.badge}`}
            >
              {diff.icon}
              {diff.label}
            </span>
          </div>

          <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
            {campaign.title}
          </h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
            {campaign.summary}
          </p>

          <div className="flex items-end justify-between">
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="outline" className="text-xs">
                {campaign.quizQuestions.length} questions
              </Badge>
              {campaign.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <span
              className={`inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-0.5 ${
                isCompleted ? "text-green-400" : "text-primary"
              }`}
            >
              {isCompleted ? "Review" : "Start"}
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
