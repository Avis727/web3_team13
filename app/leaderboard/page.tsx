import { Navbar } from "@/components/navbar";
import { Leaderboard } from "@/components/leaderboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LeaderboardPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">🏆 Leaderboard</h1>
            <p className="text-muted-foreground">
              Top learners earning dNZD and building streaks. Join the competition!
            </p>
          </div>

          <div className="grid gap-6 mb-8">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-lg">How to Climb</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✅ Complete campaigns to earn dNZD</li>
                  <li>🔥 Build streaks: complete a campaign every day</li>
                  <li>🏅 Unlock badges for milestones</li>
                  <li>📈 Rank up on the global leaderboard</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Leaderboard />
        </div>
      </main>
    </>
  );
}
