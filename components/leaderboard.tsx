"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Flame, Zap, Crown } from "lucide-react";
import { BADGES } from "@/lib/badges";

export interface LeaderboardUser {
  address: string;
  balance: number;
  streak: number;
  badges: string[];
}

const ICONS: Record<string, React.ReactNode> = {
  trophy: <Trophy className="h-4 w-4" />,
  fire: <Flame className="h-4 w-4 text-orange-500" />,
  zap: <Zap className="h-4 w-4 text-yellow-500" />,
  crown: <Crown className="h-4 w-4 text-purple-500" />,
};

export function Leaderboard() {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch("/api/leaderboard");
        const data = await res.json();
        setUsers(data || []);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div className="text-center text-muted-foreground">Loading leaderboard...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {users.slice(0, 3).map((user, idx) => (
          <Card key={user.address} className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">
                  {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">#{idx + 1}</p>
                  <p className="font-mono text-sm font-semibold">{user.address.slice(0, 6)}...{user.address.slice(-4)}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">{(user.balance / 100).toFixed(2)} dNZD</p>
                {user.streak > 0 && (
                  <div className="flex items-center gap-2 text-sm text-orange-500">
                    <Flame className="h-4 w-4" />
                    {user.streak} day streak
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/60 bg-card/60">
        <CardHeader>
          <CardTitle>All Learners</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {users.map((user, idx) => (
              <div key={user.address} className="flex items-center justify-between p-3 rounded-lg border border-border/30 hover:bg-muted/30 transition">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-primary w-8">#{idx + 1}</span>
                  <div>
                    <p className="font-mono text-sm">{user.address.slice(0, 6)}...{user.address.slice(-4)}</p>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {user.badges.map((badgeId) => {
                        const badge = BADGES[badgeId as keyof typeof BADGES];
                        return badge ? (
                          <Badge key={badgeId} variant="secondary" className="text-xs">
                            {badge.icon} {badge.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{(user.balance / 100).toFixed(2)} dNZD</p>
                  {user.streak > 0 && (
                    <p className="text-xs text-orange-500 flex items-center gap-1">
                      <Flame className="h-3 w-3" /> {user.streak}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
