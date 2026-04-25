import fs from 'fs';
import path from 'path';

const STORE_PATH = path.join(process.cwd(), 'data', 'store.json');

export interface UserData {
  address: string;
  balance: number; // in dNZD cents
  completedCampaigns: string[]; // campaign IDs
  txs: Array<{
    campaignId: string;
    amount: number;
    timestamp: number;
  }>;
  streak: number;
  lastCompletionDate: number | null;
  badges: string[];
}

export interface StoreData {
  users: Record<string, UserData>;
}

function ensureStoreExists(): StoreData {
  const dir = path.dirname(STORE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(STORE_PATH)) {
    const initialData: StoreData = { users: {} };
    fs.writeFileSync(STORE_PATH, JSON.stringify(initialData, null, 2));
    return initialData;
  }

  const data = fs.readFileSync(STORE_PATH, 'utf-8');
  return JSON.parse(data) as StoreData;
}

function saveStore(data: StoreData): void {
  const dir = path.dirname(STORE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2));
}

export function getUser(address: string): UserData {
  const store = ensureStoreExists();
  if (!store.users[address]) {
    store.users[address] = {
      address,
      balance: 0,
      completedCampaigns: [],
      txs: [],
      streak: 0,
      lastCompletionDate: null,
      badges: [],
    };
    saveStore(store);
  }
  return store.users[address];
}

export function getBalance(address: string): number {
  return getUser(address).balance;
}

export function creditUser(
  address: string,
  campaignId: string,
  amount: number
): boolean {
  const store = ensureStoreExists();
  const user = store.users[address] || getUser(address);

  // Check if already completed
  if (user.completedCampaigns.includes(campaignId)) {
    return false;
  }

  user.balance += amount;
  user.completedCampaigns.push(campaignId);
  user.txs.push({
    campaignId,
    amount,
    timestamp: Date.now(),
  });

  // Update streak
  const today = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const lastDate = user.lastCompletionDate
    ? Math.floor(user.lastCompletionDate / (1000 * 60 * 60 * 24))
    : today - 1;

  if (today === lastDate + 1) {
    user.streak++;
  } else if (today !== lastDate) {
    user.streak = 1;
  }

  user.lastCompletionDate = Date.now();

  // Award badges
  const newBadges = [];
  if (user.streak === 5 && !user.badges.includes('streak-5')) {
    newBadges.push('streak-5');
  }
  if (user.completedCampaigns.length === 1 && !user.badges.includes('first-campaign')) {
    newBadges.push('first-campaign');
  }
  if (
    user.completedCampaigns.length === 3 &&
    !user.badges.includes('quiz-master')
  ) {
    newBadges.push('quiz-master');
  }

  user.badges = [...new Set([...user.badges, ...newBadges])];

  store.users[address] = user;
  saveStore(store);
  return true;
}

export function getLeaderboard(limit: number = 10): UserData[] {
  const store = ensureStoreExists();
  return Object.values(store.users)
    .sort((a, b) => b.balance - a.balance)
    .slice(0, limit);
}

export function listTxs(address: string): Array<any> {
  return getUser(address).txs;
}
