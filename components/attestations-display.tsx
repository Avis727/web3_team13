"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import Link from "next/link";

export interface Attestation {
  id: string;
  recipient: string;
  campaignId: string;
  score: number;
  completedAt: number;
  txHash: string;
  attesterAddress: string;
}

export function AttestationsDisplay({ userAddress }: { userAddress: string }) {
  const [attestations, setAttestations] = useState<Attestation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAttestations() {
      try {
        const res = await fetch(`/api/attestations?userAddress=${userAddress}`);
        const data = await res.json();
        if (data.ok) {
          setAttestations(data.attestations || []);
        }
      } catch (error) {
        console.error("Failed to fetch attestations:", error);
      } finally {
        setLoading(false);
      }
    }

    if (userAddress) {
      fetchAttestations();
    }
  }, [userAddress]);

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading attestations...</div>;
  }

  if (attestations.length === 0) {
    return (
      <div className="text-sm text-muted-foreground text-center py-4">
        No course attestations yet. Complete a campaign to earn one!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <Award className="h-5 w-5 text-amber-500" />
        <h3 className="font-semibold">Course Attestations</h3>
        <Badge variant="outline">{attestations.length}</Badge>
      </div>

      {attestations.map((att) => (
        <Card key={att.id} className="border-amber-500/20 bg-amber-50/5">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold text-sm">Campaign: {att.campaignId}</p>
                <p className="text-xs text-muted-foreground">
                  Score: {att.score}/3 · {new Date(att.completedAt).toLocaleDateString()}
                </p>
              </div>
              <a
                href={`https://base.easscan.org/attestation/${att.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                <span className="text-xs">View</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground font-mono break-all">
              ID: {att.id.slice(0, 12)}...
            </p>
          </CardContent>
        </Card>
      ))}

      <p className="text-xs text-muted-foreground text-center pt-2">
        📜 Attestations are on-chain proof of your learning. Share them with employers or protocols!
      </p>
    </div>
  );
}
