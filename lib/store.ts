import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * File-backed dNZD ledger. Mock for the hackathon — no chain involved.
 * Balances are tracked in cents to avoid float drift. 500 = 5.00 dNZD.
 */

export type Tx = {
  campaignId: string;
  amountCents: number;
  ts: number;
};

type StoreShape = {
  // address (lowercased) -> balance in cents
  balances: Record<string, number>;
  // address (lowercased) -> tx history
  txs: Record<string, Tx[]>;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "store.json");

let cache: StoreShape | null = null;
let writeChain: Promise<void> = Promise.resolve();

async function load(): Promise<StoreShape> {
  if (cache) return cache;
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    cache = JSON.parse(raw) as StoreShape;
  } catch {
    cache = { balances: {}, txs: {} };
  }
  return cache;
}

async function persist(): Promise<void> {
  if (!cache) return;
  const snapshot = JSON.stringify(cache, null, 2);
  // Serialise writes so concurrent route handlers don't race.
  writeChain = writeChain.then(async () => {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, snapshot, "utf8");
  });
  await writeChain;
}

const norm = (addr: string) => addr.trim().toLowerCase();

export async function getBalanceCents(address: string): Promise<number> {
  const s = await load();
  return s.balances[norm(address)] ?? 0;
}

export async function listTxs(address: string): Promise<Tx[]> {
  const s = await load();
  return [...(s.txs[norm(address)] ?? [])].sort((a, b) => b.ts - a.ts);
}

export async function hasClaimed(address: string, campaignId: string): Promise<boolean> {
  const txs = await listTxs(address);
  return txs.some((t) => t.campaignId === campaignId);
}

export async function credit(
  address: string,
  campaignId: string,
  amountCents: number,
): Promise<{ ok: true; balanceCents: number } | { ok: false; reason: string }> {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address.trim())) {
    return { ok: false, reason: "invalid_address" };
  }
  if (!Number.isInteger(amountCents) || amountCents <= 0) {
    return { ok: false, reason: "invalid_amount" };
  }

  const s = await load();
  const key = norm(address);

  const already = (s.txs[key] ?? []).some((t) => t.campaignId === campaignId);
  if (already) return { ok: false, reason: "already_claimed" };

  s.balances[key] = (s.balances[key] ?? 0) + amountCents;
  s.txs[key] = [...(s.txs[key] ?? []), { campaignId, amountCents, ts: Date.now() }];
  await persist();

  return { ok: true, balanceCents: s.balances[key] };
}

export const formatDnzd = (cents: number): string => (cents / 100).toFixed(2);
