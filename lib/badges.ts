export type BadgeId = 'first-campaign' | 'quiz-master' | 'streak-5' | 'streak-10' | 'streak-30';

export interface Badge {
  id: BadgeId;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export const BADGES: Record<BadgeId, Badge> = {
  'first-campaign': {
    id: 'first-campaign',
    name: 'First Step',
    description: 'Completed your first campaign',
    icon: '🎯',
    rarity: 'common',
  },
  'quiz-master': {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Completed 3 campaigns',
    icon: '🧠',
    rarity: 'rare',
  },
  'streak-5': {
    id: 'streak-5',
    name: 'Hot Streak 🔥',
    description: '5 day learning streak',
    icon: '🔥',
    rarity: 'rare',
  },
  'streak-10': {
    id: 'streak-10',
    name: 'Unstoppable',
    description: '10 day learning streak',
    icon: '⚡',
    rarity: 'epic',
  },
  'streak-30': {
    id: 'streak-30',
    name: 'Legend',
    description: '30 day learning streak',
    icon: '👑',
    rarity: 'legendary',
  },
};

export function getBadge(badgeId: string): Badge | undefined {
  return BADGES[badgeId as BadgeId];
}
