import { getLeaderboard } from '@/lib/store';

export async function GET() {
  try {
    const users = getLeaderboard(100);
    const formatted = users.map((user) => ({
      address: user.address,
      balance: user.balance,
      streak: user.streak,
      badges: user.badges,
      campaignsCompleted: user.completedCampaigns.length,
    }));

    return Response.json(formatted);
  } catch (error) {
    console.error('Leaderboard error:', error);
    return Response.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
