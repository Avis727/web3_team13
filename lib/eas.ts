// Ethereum Attestation Service (EAS) configuration for L2Earn

export const EAS_CONFIG = {
  // EAS contract on Base
  easContractAddress: "0x4200000000000000000000000000000000000021",
  
  // Schema for L2Earn course completion
  // Format: "address learner, bytes32 campaignId, uint256 score, uint256 timestamp"
  schemaUid: process.env.NEXT_PUBLIC_EAS_SCHEMA_UID || "0x0000000000000000000000000000000000000000000000000000000000000000",
  
  easExplorer: "https://base.easscan.org",
};

export interface CourseAttestation {
  id: string;
  recipient: string; // learner address
  campaignId: string;
  score: number; // e.g., 3 for 3/3 correct
  completedAt: number;
  txHash: string;
  attesterAddress: string;
}

export const COURSES_SCHEMA = {
  type: "SchemaRegistry",
  version: "1.0",
  fields: [
    { name: "learner", type: "address", description: "Wallet address of the learner" },
    { name: "campaignId", type: "string", description: "ID of the completed campaign" },
    { name: "score", type: "uint8", description: "Quiz score (e.g., 3 out of 3)" },
    { name: "completedAt", type: "uint256", description: "Timestamp of completion" },
  ],
};
