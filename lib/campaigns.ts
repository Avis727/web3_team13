export type Difficulty = "easy" | "medium" | "hard";

export type Campaign = {
  id: string;
  brand: string;
  title: string;
  summary: string;
  difficulty: Difficulty;
  /** Source-of-truth text the AI tutor draws from. */
  transcript: string;
  /** Reward in dNZD cents. 300 = 3.00 dNZD */
  rewardCents: number;
  tags: string[];
  quizQuestions: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
};

// ─── EASY ────────────────────────────────────────────────────────────────────

const EASY_CAMPAIGNS: Campaign[] = [
  {
    id: "newmoney-101",
    brand: "NewMoney",
    title: "What is dNZD?",
    difficulty: "easy",
    summary:
      "A 60-second intro to NewMoney's NZ-regulated, 1:1 reserve-backed digital dollar. Built for builders.",
    rewardCents: 300,
    tags: ["Stablecoins", "Aotearoa"],
    transcript: `
NewMoney is a New Zealand-founded fintech building stable, transparent digital cash for Kiwis and Aussies.
Its first two stablecoins are dNZD (digital New Zealand Dollar) and dAUD (digital Australian Dollar).

Every dNZD token is fully backed 1:1 by fiat reserves held in trust in a New Zealand-registered bank.
The trust is administered by NewMoney NZ Nominee Limited under a New Zealand bare-trust structure, which
means every token represents a direct and redeemable beneficial interest in real cash.

dNZD is a blockchain-based digital representation of the New Zealand Dollar. It is currently live on the
Ethereum, Base, Polygon, and Solana networks, with cross-chain functionality enabled by an integration
with LayerZero. More networks are joining every week.

Primary issuance and redemption are available only to wholesale counterparties in New Zealand. The
stablecoins themselves are not financial products. They are governed exclusively by New Zealand law.

NewMoney's mission is to be the most trusted, transparent, integrated, and practical digital dollar for
everyday use - giving people the freedom of open money: faster, simpler, borderless. The team combines
deep institutional fluency with DeFi-native innovation, reducing FX drag across trans-Tasman and global
flows. Use cases include DeFi earning vaults, payment networks, stablecoin FX, payroll, and anything
that disrupts the status quo.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What is dNZD?",
        options: [
          "A blockchain-based digital representation of the New Zealand Dollar",
          "A New Zealand government bond",
          "A volatile cryptocurrency unrelated to NZD",
          "A KiwiSaver investment fund",
        ],
        correctIndex: 0,
        explanation:
          "dNZD is a blockchain-based digital representation of NZD, backed 1:1 by fiat reserves held in a registered NZ bank.",
      },
      {
        id: "q2",
        question: "Which networks does dNZD currently run on?",
        options: [
          "Only Ethereum",
          "Bitcoin, Litecoin, and Dogecoin",
          "Ethereum, Base, Polygon, and Solana",
          "A private NewMoney chain only",
        ],
        correctIndex: 2,
        explanation:
          "dNZD is live on Ethereum, Base, Polygon, and Solana with LayerZero enabling cross-chain transfers.",
      },
      {
        id: "q3",
        question: "What backs every dNZD token?",
        options: [
          "Algorithmic rebalancing",
          "A basket of crypto assets",
          "Community staking pools",
          "Fiat reserves held in trust 1:1 in a NZ-registered bank",
        ],
        correctIndex: 3,
        explanation:
          "Every dNZD is backed 1:1 by fiat reserves held in trust in a New Zealand-registered bank under a bare-trust structure.",
      },
    ],
  },
  {
    id: "wallet-basics",
    brand: "NewMoney",
    title: "Crypto Wallets Explained",
    difficulty: "easy",
    summary:
      "Learn what a crypto wallet actually is, how seed phrases work, and how to stay safe with your first wallet.",
    rewardCents: 300,
    tags: ["Wallets", "Security", "Beginners"],
    transcript: `
A crypto wallet is not a place that stores coins. It stores keys — specifically, private keys that prove
ownership of assets recorded on a blockchain.

Think of the blockchain as a public ledger. Your wallet holds the password (private key) that lets you
authorise entries in that ledger. The coins never leave the chain; only control of them moves.

There are two main types of wallets:

1. Custodial wallets: A company (like Coinbase or Binance) holds your private keys for you. Easy to use,
   but if the company is hacked or goes bankrupt, you may lose access. "Not your keys, not your coins."

2. Non-custodial wallets: You hold your own private key via a seed phrase — 12 or 24 random words.
   MetaMask and Phantom are popular examples. You are fully in control. If you lose the seed phrase,
   there is no recovery.

Key concepts:
- Public key / address: Like your bank account number. Share it freely to receive funds.
- Private key: Like your PIN. Never share it. Anyone who has it can take everything.
- Seed phrase: A human-readable backup of your private key. Store it offline, never digitally.

To stay safe:
- Write your seed phrase on paper and store it somewhere physically secure.
- Never enter your seed phrase on a website.
- Use a hardware wallet (like Ledger or Trezor) for large amounts — it keeps the private key offline.
- Verify every transaction before signing. Malicious apps can request unlimited spending approvals.

For dNZD, you need a compatible wallet like MetaMask (for Ethereum/Base/Polygon) or Phantom (for Solana).
When you connect to L2Earn, we never ask for your private key — only a signature to verify ownership.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What does a crypto wallet actually store?",
        options: [
          "Digital coins in a secure vault",
          "Private keys that prove ownership of assets on the blockchain",
          "A copy of the entire blockchain",
          "Your bank account details",
        ],
        correctIndex: 1,
        explanation:
          "A wallet stores private keys, not coins. The coins remain on the blockchain; the keys prove you control them.",
      },
      {
        id: "q2",
        question: "What is a seed phrase?",
        options: [
          "A password to log into your exchange",
          "A 12 or 24-word human-readable backup of your private key",
          "A smart contract identifier",
          "Your public wallet address",
        ],
        correctIndex: 1,
        explanation:
          "A seed phrase (12–24 words) is a human-readable backup of your private key. Losing it means losing access forever.",
      },
      {
        id: "q3",
        question: "What is the difference between a custodial and non-custodial wallet?",
        options: [
          "Custodial wallets are always free; non-custodial cost money",
          "Non-custodial wallets are only for large amounts",
          "Custodial wallets mean a company holds your keys; non-custodial means you hold them yourself",
          "There is no real difference",
        ],
        correctIndex: 2,
        explanation:
          "Custodial = a company controls your keys (risk of their failure). Non-custodial = you control your keys (you are responsible).",
      },
    ],
  },
  {
    id: "blockchain-101",
    brand: "NewMoney",
    title: "Blockchain 101",
    difficulty: "easy",
    summary:
      "What is a blockchain, how do blocks and transactions work, and why does any of this matter for money?",
    rewardCents: 300,
    tags: ["Blockchain", "Beginners", "Crypto"],
    transcript: `
A blockchain is a database — but one that's shared across thousands of computers simultaneously, making it
almost impossible to falsify without the consensus of the whole network.

Traditional databases have a single owner (a company or government) who can change, delete, or freeze
records. A blockchain has no single owner. Records are permanent once confirmed.

How it works:

1. Transactions: When you send dNZD to someone, you broadcast a transaction to the network. It says:
   "I, wallet A, authorise sending X dNZD to wallet B." You sign it with your private key.

2. Mempool: Transactions wait in a pool called the mempool until a validator (miner or staker) picks them up.

3. Blocks: Validators bundle transactions into blocks. Each block contains: the transactions, a timestamp,
   and a cryptographic hash of the previous block. This chain of hashes is why it's called a blockchain.

4. Consensus: Before a block is added, validators run a consensus algorithm. On Bitcoin it's Proof of Work
   (energy-intensive mining). Ethereum uses Proof of Stake (validators lock up ETH as collateral). Both
   prevent a single party from faking the chain.

5. Finality: Once confirmed (usually after a few more blocks are added on top), a transaction is effectively
   irreversible. No one can modify it without recalculating all the subsequent blocks and convincing the
   whole network — computationally infeasible.

Why this matters for money:
- No central authority can freeze your funds
- Transactions settle in minutes, not days
- Anyone with internet access can participate
- All transactions are publicly auditable
- Smart contracts automate agreements without middlemen

dNZD uses these properties to create a New Zealand Dollar that works at internet speed, globally, 24/7.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What makes a blockchain different from a traditional database?",
        options: [
          "It is faster to read",
          "It is owned by a government",
          "It is shared across thousands of computers with no single owner, making records permanent",
          "It stores data in alphabetical order",
        ],
        correctIndex: 2,
        explanation:
          "A blockchain is distributed across many computers with no single owner, making records nearly impossible to falsify without network consensus.",
      },
      {
        id: "q2",
        question: "What is a 'block' in a blockchain?",
        options: [
          "A failed transaction",
          "A bundle of transactions with a hash linking to the previous block",
          "A single wallet address",
          "A type of cryptocurrency",
        ],
        correctIndex: 1,
        explanation:
          "A block bundles multiple transactions together and includes a cryptographic hash of the previous block, forming the chain.",
      },
      {
        id: "q3",
        question: "What is 'finality' in blockchain terms?",
        options: [
          "When a transaction is pending",
          "When a block is proposed but not yet validated",
          "When a confirmed transaction is effectively irreversible",
          "When the blockchain shuts down",
        ],
        correctIndex: 2,
        explanation:
          "Finality means the transaction is confirmed and effectively irreversible — modifying it would require recalculating the entire subsequent chain.",
      },
    ],
  },
  {
    id: "newmoney-stablecoins",
    brand: "NewMoney",
    title: "Why Stablecoins Matter",
    difficulty: "easy",
    summary:
      "Understand how stablecoins like dNZD solve volatility problems in crypto and enable everyday commerce.",
    rewardCents: 300,
    tags: ["Stablecoins", "DeFi", "Finance"],
    transcript: `
Stablecoins are cryptocurrencies designed to maintain a stable value by being pegged to an external reference,
most commonly a fiat currency like USD, NZD, or AUD. They solve a critical problem in crypto: volatility.

Bitcoin and Ethereum fluctuate wildly - sometimes 10% or more in a single day. This makes them unsuitable
for everyday payments, payroll, or commerce. You can't price your coffee in Bitcoin if it could be worth
double tomorrow or half as much. Stablecoins bridge this gap.

There are three main types of stablecoins:

1. Fiat-backed: Fully collateralized by fiat currency in banks (like dNZD). These are the most transparent
   and offer the strongest stability guarantees. Every coin represents a claim on real cash.

2. Crypto-backed: Collateralized by other cryptocurrencies, typically in excess (e.g., 150% backing).
   These require complex mechanisms to maintain the peg and carry counterparty risk.

3. Algorithmic: Maintained by code and incentive mechanisms rather than collateral. These have historically
   been unstable and risky.

dNZD is fiat-backed by NewMoney. Every token in circulation is backed 1:1 by NZD held in a New Zealand-registered
bank under a bare-trust structure. This means dNZD holders have a direct claim on the underlying cash.

Stablecoins enable:
- Fast cross-border payments without FX middlemen
- 24/7 settlement (no banking hours)
- Programmable money for smart contracts and DeFi
- Reliable unit of account for commerce and loans
- Freedom for unbanked populations to access stable currency
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What is the main problem stablecoins solve?",
        options: [
          "They eliminate the need for blockchain",
          "Cryptocurrency volatility makes it unsuitable for everyday payments",
          "They replace central banks",
          "They create infinite wealth",
        ],
        correctIndex: 1,
        explanation:
          "Stablecoins solve the volatility problem that makes regular crypto unsuitable for commerce and payroll.",
      },
      {
        id: "q2",
        question: "Which type of stablecoin is dNZD?",
        options: [
          "Crypto-backed with 150% collateral",
          "Algorithmic",
          "Fiat-backed with 1:1 NZD backing",
          "Variable-peg",
        ],
        correctIndex: 2,
        explanation:
          "dNZD is fiat-backed by NewMoney, with every token backed 1:1 by NZD held in a New Zealand bank.",
      },
      {
        id: "q3",
        question: "Which stablecoin type has historically been the most unstable?",
        options: [
          "Fiat-backed",
          "Gold-backed",
          "Crypto-backed",
          "Algorithmic",
        ],
        correctIndex: 3,
        explanation:
          "Algorithmic stablecoins depend on code and incentives rather than real collateral. They have a poor track record — Terra/Luna being the most prominent collapse.",
      },
    ],
  },
];

// ─── MEDIUM ───────────────────────────────────────────────────────────────────

const MEDIUM_CAMPAIGNS: Campaign[] = [
  {
    id: "newmoney-defi",
    brand: "NewMoney",
    title: "DeFi & Open Money",
    difficulty: "medium",
    summary:
      "Discover how NewMoney stablecoins unlock DeFi opportunities and financial freedom.",
    rewardCents: 500,
    tags: ["DeFi", "Finance", "Open Banking"],
    transcript: `
DeFi (Decentralized Finance) is financial infrastructure built on public blockchains where transactions
settle in code rather than through centralized intermediaries like banks. Stablecoins like dNZD are the
foundation of DeFi: they're the reliable medium of exchange, unit of account, and store of value.

NewMoney's vision is "open money" - fast, simpler, borderless financial systems that reduce friction and costs.
Traditional finance charges fees at every step: bank transfers, FX conversions, intermediaries all take cuts.

With dNZD on public blockchains, users can:

1. Send money 24/7/365 without banking hours. A transaction settles in minutes, not days.

2. Reduce FX drag: Trans-Tasman and global flows no longer need to pass through multiple currency conversions
   and correspondent banks. Send dNZD directly, reducing costs by 50% or more.

3. Earn yield: DeFi protocols let dNZD holders deposit their funds into "earning vaults" that generate returns
   from lending, liquidity provision, and other strategies. This is accessible to anyone with a crypto wallet.

4. Access credit without a bank: Smart contracts can programmatically issue loans backed by dNZD collateral,
   opening credit to people excluded from traditional banking.

5. Programmable money: Businesses can automate payroll, subscriptions, and payments with code. Money flows
   instantly on a schedule or trigger condition.

6. Payroll at scale: Companies can pay global teams instantly in dNZD, avoiding SWIFT fees and delays.

NewMoney combines "deep institutional fluency with DeFi-native innovation" - meaning they understand both
traditional finance and blockchain, building bridges between them for everyday users, not just speculators.

The freedom of open money means lower costs, faster settlement, and financial inclusion for all.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What is DeFi?",
        options: [
          "A bank offering digital accounts",
          "Financial infrastructure built on public blockchains where transactions settle in code",
          "A government regulation framework",
          "A cryptocurrency exchange",
        ],
        correctIndex: 1,
        explanation:
          "DeFi is financial infrastructure on public blockchains where code replaces centralized intermediaries like banks.",
      },
      {
        id: "q2",
        question: "How does dNZD reduce trans-Tasman FX costs?",
        options: [
          "By eliminating currency altogether",
          "Users send dNZD directly, avoiding multiple conversions and correspondent banks",
          "By fixing exchange rates permanently",
          "It cannot reduce FX costs",
        ],
        correctIndex: 1,
        explanation:
          "dNZD moves directly between NZ and Australia without passing through multiple currency conversions and intermediaries.",
      },
      {
        id: "q3",
        question: "What does 'open money' mean in NewMoney's vision?",
        options: [
          "Money that anyone can print",
          "Fast, simpler, borderless financial systems that reduce friction and costs",
          "Money with no regulation",
          "A free currency with no backing",
        ],
        correctIndex: 1,
        explanation:
          "Open money means fast, simpler, borderless systems that reduce friction, costs, and intermediaries for everyone.",
      },
    ],
  },
  {
    id: "newmoney-trust",
    brand: "NewMoney",
    title: "Trust & Reserve Backing",
    difficulty: "medium",
    summary:
      "Learn how NewMoney ensures dNZD is backed by real cash and why transparency matters in a world of failed stablecoins.",
    rewardCents: 500,
    tags: ["Trust", "Banking", "Regulation"],
    transcript: `
Trust is the foundation of money. Historically, people trusted central banks to manage fiat currency responsibly.
In crypto, trust has often been misplaced: many stablecoins have failed, collapsed, or lost their peg entirely.

NewMoney builds trust through radical transparency and regulated reserve backing.

Every dNZD token is backed 1:1 by fiat reserves held in a New Zealand-registered bank. This means:

1. For every dNZD in circulation, there is exactly one real NZD sitting in a trust account.

2. The trust is administered by "NewMoney NZ Nominee Limited" under a New Zealand bare-trust structure.
   This is legal language meaning: the trust is registered, regulated by NZ law, and the token holders
   have direct beneficial interest in the cash.

3. If NewMoney the company fails, the cash does not belong to the company - it's held in trust for token holders.
   Your dNZD remains redeemable for real cash independently of company status.

4. New Zealand law governs dNZD. It's not an experiment or a gray area - it's a formal, regulated instrument.

This contrasts with algorithmic stablecoins (which depend on code and incentive mechanisms and can fail) or
under-collateralized crypto-backed stablecoins (which carry counterparty risk and can decouple from their peg).

Compare to historical failures:
- Terra/Luna: Algorithmic stablecoin that promised stability through incentives. It collapsed spectacularly in 2022,
  losing billions of dollars in value. Investors lost their savings.
- Stablecoin X: A project that claimed 1:1 backing but actually held less cash than coins in circulation. When
  scrutiny arrived, it collapsed.

NewMoney's approach is different: full, real, auditable backing by fiat cash in a regulated bank under NZ law.

This model scales, survives company failures, and gives users legitimate confidence in redemption.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What backs every dNZD token?",
        options: [
          "NewMoney's company assets",
          "Exactly 1:1 by NZD held in a New Zealand-registered bank in trust",
          "A basket of crypto assets",
          "Community votes and incentives",
        ],
        correctIndex: 1,
        explanation:
          "Every dNZD is backed 1:1 by real NZD held in a regulated bank trust account.",
      },
      {
        id: "q2",
        question: "What happens to your dNZD if NewMoney the company fails?",
        options: [
          "Your dNZD becomes worthless",
          "The cash is used to pay company creditors",
          "Your dNZD remains redeemable because it's held in trust independently",
          "The government confiscates it",
        ],
        correctIndex: 2,
        explanation:
          "Under the bare-trust structure, dNZD holders have direct beneficial interest in the cash — it's ring-fenced from company insolvency.",
      },
      {
        id: "q3",
        question: "Which stablecoin collapsed due to algorithmic failure in 2022?",
        options: [
          "Bitcoin",
          "USD Coin (USDC)",
          "Terra/Luna",
          "Tether",
        ],
        correctIndex: 2,
        explanation:
          "Terra/Luna was an algorithmic stablecoin that collapsed in 2022, wiping out billions and demonstrating the risk of non-collateralised designs.",
      },
    ],
  },
  {
    id: "defi-vaults",
    brand: "NewMoney",
    title: "Earning with DeFi Vaults",
    difficulty: "medium",
    summary:
      "How do DeFi yield vaults work? Learn about lending protocols, liquidity pools, APY, and how dNZD fits in.",
    rewardCents: 500,
    tags: ["DeFi", "Yield", "Vaults", "APY"],
    transcript: `
DeFi yield vaults let you earn a return on your stablecoins without handing control to a bank.
Instead of depositing dNZD in a savings account earning near-zero interest, DeFi protocols connect
lenders directly with borrowers through smart contracts — and you keep custody of your funds.

How lending protocols work (e.g., Aave, Compound):

1. You deposit dNZD into a smart contract (the lending pool).
2. Borrowers take dNZD loans by posting crypto collateral (usually 130-150% of the loan value).
3. Borrowers pay interest. That interest is distributed to depositors like you.
4. Because the protocol is over-collateralised, even if a borrower defaults, liquidation mechanisms
   sell their collateral to repay the pool.

APY (Annual Percentage Yield) tells you the annualised return including compounding. A 5% APY on
100 dNZD means you'd expect roughly 5 dNZD after a year if rates hold.

Liquidity pools (e.g., Uniswap, Curve):

You can also provide liquidity to trading pairs. When traders swap between dNZD and another token,
they pay a fee that goes to liquidity providers. You earn a share proportional to your contribution.

Risks to understand:

- Smart contract risk: Code can have bugs. Audited protocols are safer but not risk-free.
- Impermanent loss: In liquidity pools, price divergence between paired assets can reduce your net value.
- Liquidation risk (for borrowers): If collateral drops in value, your position may be liquidated.
- Rate variability: APYs are variable and can drop significantly.

NewMoney's vision includes dNZD-powered "earning vaults" that let everyday Kiwis access these yields
while holding a stable, NZD-denominated asset — no crypto volatility, just yield.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "How do DeFi lending protocols generate yield for depositors?",
        options: [
          "They invest in the stock market",
          "Borrowers pay interest, which is distributed to depositors via smart contracts",
          "The protocol prints new tokens as rewards",
          "A central bank sets interest rates",
        ],
        correctIndex: 1,
        explanation:
          "Borrowers post collateral and pay interest. Smart contracts distribute that interest directly to depositors without intermediaries.",
      },
      {
        id: "q2",
        question: "What does APY mean?",
        options: [
          "Annual Principal Yield",
          "Automated Protocol Yield",
          "Annual Percentage Yield — the annualised return including compounding",
          "Average Price per Year",
        ],
        correctIndex: 2,
        explanation:
          "APY (Annual Percentage Yield) represents the annualised return on your deposit, factoring in compounding interest.",
      },
      {
        id: "q3",
        question: "What is 'impermanent loss' in a liquidity pool?",
        options: [
          "A permanent reduction in your stablecoin balance",
          "Fees charged by the protocol on withdrawal",
          "A reduction in net value caused by price divergence between the paired assets",
          "Tax on your yield earnings",
        ],
        correctIndex: 2,
        explanation:
          "Impermanent loss occurs when the relative price of the two tokens in a liquidity pool diverges, reducing your net value compared to simply holding.",
      },
    ],
  },
  {
    id: "crypto-security",
    brand: "NewMoney",
    title: "Staying Safe in Web3",
    difficulty: "medium",
    summary:
      "Phishing, rug pulls, approval scams — learn the most common Web3 attack vectors and how to defend yourself.",
    rewardCents: 500,
    tags: ["Security", "Web3", "Self-custody"],
    transcript: `
Web3 puts you in control of your money — but that means attackers target you directly, not a company's servers.
Understanding common attack vectors is essential before interacting with DeFi, NFTs, or any dApp.

Common attack types:

1. Phishing: Fake websites that look identical to real ones (MetaMask, Uniswap, OpenSea). They ask you
   to "connect your wallet" or "enter your seed phrase." Once you do, funds are stolen immediately.
   Defence: Always check the URL. Bookmark official sites. Never enter your seed phrase online.

2. Malicious token approvals (allowance attacks): DeFi requires you to "approve" contracts to spend
   your tokens. A malicious contract can request unlimited approval. If you grant it, the attacker
   can drain your wallet later without any further interaction.
   Defence: Use a tool like revoke.cash to review and revoke approvals. Never approve unlimited amounts
   from unknown sites.

3. Rug pulls: A project launches, raises money, then the developers drain the liquidity pool or
   treasury and disappear. Signs: anonymous team, no audit, no locked liquidity, sudden token launch.
   Defence: Research teams, look for audits, check if liquidity is locked.

4. Honeypot tokens: You can buy a token but the contract prevents you from selling it. By the time
   you realise, the price has been pumped and dumped.
   Defence: Check the contract on a honeypot detector before buying unknown tokens.

5. Social engineering: Fake "support" on Discord/Twitter claiming to help, then asking for your
   seed phrase. Legitimate support will NEVER ask for your seed phrase.

6. Address poisoning: Attackers send tiny transactions from addresses that look similar to your
   usual contacts, hoping you'll copy the wrong address.
   Defence: Always verify the full address, not just the first/last few characters.

General rules:
- Hardware wallets for large balances
- Separate wallet for DeFi interactions
- Never rush — scammers create artificial urgency
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What is a malicious token approval attack?",
        options: [
          "A virus that infects your computer",
          "A fake NFT sent to your wallet",
          "A contract granted unlimited spending permission that drains your wallet later",
          "An email asking for your password",
        ],
        correctIndex: 2,
        explanation:
          "DeFi approval attacks trick you into granting unlimited token spend permission. The attacker can drain your wallet at any time after that single approval.",
      },
      {
        id: "q2",
        question: "What is a 'rug pull'?",
        options: [
          "A gas fee spike that traps your funds",
          "Developers who raise funds then drain liquidity and disappear",
          "A smart contract that charges excessive fees",
          "A type of NFT scam",
        ],
        correctIndex: 1,
        explanation:
          "A rug pull is when project developers drain the liquidity pool or treasury and disappear after raising funds, leaving investors with worthless tokens.",
      },
      {
        id: "q3",
        question: "When would legitimate support ever ask for your seed phrase?",
        options: [
          "Only during account recovery",
          "When you contact them first",
          "During wallet upgrades",
          "Never — no legitimate service will ever ask for your seed phrase",
        ],
        correctIndex: 3,
        explanation:
          "No legitimate wallet, protocol, or support team will ever ask for your seed phrase. Anyone asking is attempting to steal your funds.",
      },
    ],
  },
];

// ─── HARD ────────────────────────────────────────────────────────────────────

const HARD_CAMPAIGNS: Campaign[] = [
  {
    id: "newmoney-cross-chain",
    brand: "NewMoney",
    title: "Cross-Chain Money with LayerZero",
    difficulty: "hard",
    summary:
      "Understand how LayerZero's OFT standard enables dNZD to move seamlessly across Ethereum, Base, Polygon, Solana, and beyond.",
    rewardCents: 800,
    tags: ["LayerZero", "Blockchain", "Interoperability"],
    transcript: `
The blockchain ecosystem is fragmented. Ethereum, Solana, Polygon, Base, Arbitrum - each is a separate network
with different communities, liquidity, and use cases. Users and developers often need stablecoins to move between them.

Historically, this was a pain: you'd have to bridge through centralized exchanges, losing liquidity and paying fees.
Cross-chain messaging was unreliable, and many bridges have been hacked, resulting in billions in losses.

NewMoney uses LayerZero, a protocol that enables secure cross-chain messaging without relying on wrapped tokens,
liquidity pools, or centralized bridges.

How it works:

1. LayerZero connects blockchains with programmable smart contracts. A transaction on Ethereum can trigger code
   on Solana reliably.

2. Instead of managing separate tokens (wrapped dNZD on Polygon, bridged dNZD on Base, etc.), dNZD uses a single
   canonical token with LayerZero's Omnichain Fungible Token (OFT) standard.

3. When you send dNZD from Ethereum to Solana, the LayerZero network verifies the transaction and atomically
   mints on the destination chain. Your dNZD is fungible and interchangeable everywhere.

4. This is safer, cheaper, and faster than traditional bridges because there's no centralized liquidity pool
   or wrapped token overhead.

Benefits:
- Composability: DeFi protocols on any chain can use dNZD as a base unit without bridge fragmentation.
- Liquidity: Instead of fragmented pools on each chain, dNZD liquidity is essentially global and unified.
- Security: LayerZero relies on cryptographic proofs and decentralised validators, not centralized operators.
- Scalability: As new chains launch, NewMoney can integrate them via LayerZero.

NewMoney's cross-chain strategy positions dNZD as a global settlement layer: one digital dollar that works
everywhere, enabling truly borderless finance.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What problem does LayerZero solve for dNZD?",
        options: [
          "It makes dNZD faster on Ethereum only",
          "It enables secure cross-chain movement without wrapped tokens or centralised bridges",
          "It reduces gas fees on Polygon",
          "It provides KYC verification",
        ],
        correctIndex: 1,
        explanation:
          "LayerZero enables secure cross-chain messaging, letting dNZD move between chains as a single canonical token without the risks of traditional bridges.",
      },
      {
        id: "q2",
        question: "What is the OFT (Omnichain Fungible Token) standard?",
        options: [
          "A new ERC-20 variant for Ethereum only",
          "A LayerZero standard enabling a single canonical token that works natively across all integrated chains",
          "A wrapped token standard",
          "A government-issued token framework",
        ],
        correctIndex: 1,
        explanation:
          "LayerZero's OFT standard allows dNZD to exist as one canonical token across all chains — no wrapping, no fragmented liquidity.",
      },
      {
        id: "q3",
        question: "Why is LayerZero considered safer than traditional cross-chain bridges?",
        options: [
          "It uses a centralized validator operated by NewMoney",
          "It eliminates cross-chain transfers entirely",
          "It relies on cryptographic proofs and decentralised validators rather than centralized liquidity pools",
          "It requires government approval for each transaction",
        ],
        correctIndex: 2,
        explanation:
          "Traditional bridges rely on centralized liquidity pools that are high-value hack targets. LayerZero uses cryptographic proofs and decentralised validation.",
      },
    ],
  },
  {
    id: "eas-attestations",
    brand: "NewMoney",
    title: "On-Chain Identity & EAS",
    difficulty: "hard",
    summary:
      "How do Ethereum Attestation Service credentials work? Learn how L2Earn uses EAS to create tamper-proof proof of learning.",
    rewardCents: 800,
    tags: ["EAS", "Identity", "Attestations", "Credentials"],
    transcript: `
Ethereum Attestation Service (EAS) is an open-source protocol for making and verifying on-chain attestations.
An attestation is a signed, verifiable claim: "Entity A asserts that Entity B has done/is X."

Think of it like a digital stamp: a university says "this person graduated," a government says "this person
is a citizen," or in our case, L2Earn says "this wallet passed the dNZD quiz on date X with score Y."

Unlike NFT certificates (which just prove token ownership), EAS attestations are:
- Signed by a verified attester (not just anyone can issue)
- Composable: other smart contracts and dApps can read and act on them
- Revocable (if the issuer wants)
- Chain-agnostic: EAS is deployed on Ethereum, Base, Optimism, Arbitrum, and others

How EAS works technically:

1. Schema Registry: Attestation types are registered on-chain with a schema. L2Earn's schema might be:
   { address wallet, string campaignId, uint8 score, uint256 timestamp }

2. Attester: L2Earn's backend holds a private key. After a user passes a quiz, we call the EAS contract
   to create a signed attestation with the user's wallet, the campaign ID, their score, and the timestamp.

3. On-chain: The attestation is stored permanently on the blockchain. Anyone can verify it.

4. Verifiable: A future employer, DeFi protocol, DAO, or AI agent can query EAS to confirm
   "wallet 0xABCD completed NewMoney 101 with score 3/3."

Real-world applications:
- Proof of education for DeFi protocol access tiers
- Soulbound credentials for DAOs and governance
- KYC/KYB attestations without sharing personal data
- Reputation systems for freelancers and contributors

The Great Handover: AI agents can read EAS attestations to determine whether a wallet/user has
the credentials required before recommending services, completing transactions, or granting access.
This is the future of machine-readable identity.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What is an EAS attestation?",
        options: [
          "A type of NFT representing a certificate",
          "A signed, verifiable on-chain claim that one entity makes about another",
          "A wallet backup mechanism",
          "An Ethereum token standard like ERC-20",
        ],
        correctIndex: 1,
        explanation:
          "An EAS attestation is a signed, verifiable claim stored on-chain. Unlike NFTs, attestations are issued by verified attesters and can be read by smart contracts.",
      },
      {
        id: "q2",
        question: "What is the EAS Schema Registry?",
        options: [
          "A database of wallet addresses",
          "An on-chain registry where attestation data structures are defined before use",
          "A list of approved attesters",
          "A token price oracle",
        ],
        correctIndex: 1,
        explanation:
          "The Schema Registry stores on-chain definitions of attestation types (e.g., what fields a 'quiz completion' attestation contains), ensuring consistency and composability.",
      },
      {
        id: "q3",
        question: "How does L2Earn use EAS after a user passes a quiz?",
        options: [
          "It mints an NFT to the user's wallet",
          "It emails a PDF certificate",
          "It stores a signed on-chain attestation recording the wallet, campaign, score, and timestamp",
          "It updates a centralised database",
        ],
        correctIndex: 2,
        explanation:
          "L2Earn calls the EAS contract to create a permanent, signed on-chain attestation — verifiable by anyone, including AI agents and other dApps.",
      },
    ],
  },
  {
    id: "ai-agents-web3",
    brand: "NewMoney",
    title: "AI Agents & The Great Handover",
    difficulty: "hard",
    summary:
      "By 2126, your buyer is an AI agent. Learn how machine-readable money, open APIs, and on-chain credentials define the next era of commerce.",
    rewardCents: 800,
    tags: ["AI Agents", "Web3", "Future", "Great Handover"],
    transcript: `
The Great Handover is a hypothesis: economic decision-making is gradually shifting from humans to AI agents.
Today, humans google products, compare prices, and buy. Tomorrow, AI agents will research, negotiate, transact,
and report — on behalf of their human principals.

This is not science fiction. It's already happening:
- AI assistants like Claude and GPT already browse the web, call APIs, and make recommendations
- Autonomous agents manage crypto portfolios, execute DeFi strategies, and trade
- Businesses are deploying AI agents for procurement, vendor selection, and supply chain

What changes in a world of AI agents?

1. Machine-readable data becomes the product: If your website isn't structured for AI consumption
   (via APIs, schemas, and standard formats), AI agents won't recommend you.

2. Trust signals shift to on-chain: AI agents need verifiable proof of claims. "This brand is ethical"
   is meaningless. "This wallet has 1,000 EAS attestations confirming successful transactions" is verifiable.

3. Money must be programmable: AI agents can't use bank transfers. They need programmable money —
   stablecoins like dNZD — that they can hold, spend, and receive autonomously via smart contracts.

4. Identity is on-chain: An AI agent managing your DeFi will need to prove, on-chain, that it has
   authority to act. EAS attestations, multisig wallets, and session keys enable this.

L2Earn's response:
- We publish an open machine-readable API: /api/agents/campaigns
- AI agents can read this feed, understand what educational campaigns are available, the reward,
  and the human-readable link to redirect their principals
- Our EAS attestations create a verifiable credential layer that AI agents can query

The three-layer future:
1. Programmable money (dNZD): AI agents can hold and transact autonomously
2. Open APIs: Machine-readable business data, pricing, and offers
3. On-chain credentials (EAS): Verifiable trust without human intermediation

The winners in this transition will be businesses that build for both audiences simultaneously:
humans today, agents tomorrow.
    `.trim(),
    quizQuestions: [
      {
        id: "q1",
        question: "What is 'The Great Handover' as described in this campaign?",
        options: [
          "New Zealand's transition to a digital dollar",
          "The gradual shift of economic decision-making from humans to AI agents",
          "A blockchain protocol upgrade",
          "The transfer of control from banks to DeFi",
        ],
        correctIndex: 1,
        explanation:
          "The Great Handover describes the trend of AI agents taking over economic decisions — researching, transacting, and reporting on behalf of human principals.",
      },
      {
        id: "q2",
        question: "Why do AI agents need programmable money like dNZD?",
        options: [
          "AI agents prefer stable assets for portfolio allocation",
          "Bank transfers are too slow for human users",
          "AI agents can't use bank transfers — they need stablecoins they can hold and transact with autonomously via smart contracts",
          "dNZD is cheaper to hold than fiat",
        ],
        correctIndex: 2,
        explanation:
          "AI agents operate autonomously in code. They need programmable money like dNZD that they can hold, spend, and receive via smart contracts without human banking infrastructure.",
      },
      {
        id: "q3",
        question: "How does L2Earn serve AI agents specifically?",
        options: [
          "By providing a chatbot for customer support",
          "By publishing a machine-readable /api/agents/campaigns feed with structured campaign and reward data",
          "By issuing AI-specific tokens",
          "By training AI models on quiz data",
        ],
        correctIndex: 1,
        explanation:
          "L2Earn publishes /api/agents/campaigns — an open, structured JSON feed that AI agents can read to understand available campaigns, rewards, and how to redirect human users.",
      },
    ],
  },
];

// ─── EXPORTS ─────────────────────────────────────────────────────────────────

export const CAMPAIGNS: Campaign[] = [
  ...EASY_CAMPAIGNS,
  ...MEDIUM_CAMPAIGNS,
  ...HARD_CAMPAIGNS,
];

export const getCampaign = (id: string): Campaign | undefined =>
  CAMPAIGNS.find((c) => c.id === id);
