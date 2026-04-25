"use client";

import { useState } from "react";
import { useChainId, useSwitchChain } from "wagmi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowRightLeft, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export function CrossChainBridge({ userAddress, balance }: { userAddress: string; balance: number }) {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);
  const [targetChain, setTargetChain] = useState<"avalanche" | "base">(chainId === 43114 ? "base" : "avalanche");

  const isBase = chainId === 8453 || chainId === 84532;
  const isAvalanche = chainId === 43114;

  const handleBridge = async () => {
    if (!amount || isNaN(Number(amount))) {
      setMessage({ type: "error", text: "Please enter a valid amount" });
      return;
    }

    const amountInCents = Math.round(Number(amount) * 100);
    if (amountInCents > balance) {
      setMessage({ type: "error", text: `Insufficient balance. You have ${(balance / 100).toFixed(2)} dNZD` });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/bridge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userAddress,
          amount: amountInCents,
          sourceChain: isAvalanche ? "avalanche" : "base",
          targetChain,
        }),
      });

      const data = await res.json();
      if (data.ok) {
        setMessage({ type: "success", text: data.message });
        setAmount("");
      } else {
        setMessage({ type: "error", text: data.error });
      }
    } catch (error) {
      setMessage({ type: "error", text: `Bridge failed: ${error instanceof Error ? error.message : String(error)}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRightLeft className="h-5 w-5" />
          Cross-Chain Bridge
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <div>
            <label className="text-sm font-semibold block mb-2">From</label>
            <div className="p-3 rounded-lg bg-muted/50 text-sm">
              {isBase ? "🟦 Base Mainnet" : isAvalanche ? "🔴 Avalanche C-Chain" : "Unknown"}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold block mb-2">To</label>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={targetChain === "base" ? "default" : "outline"}
                onClick={() => setTargetChain("base")}
              >
                🟦 Base
              </Button>
              <Button
                size="sm"
                variant={targetChain === "avalanche" ? "default" : "outline"}
                onClick={() => setTargetChain("avalanche")}
              >
                🔴 Avalanche
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold block mb-2">
              Amount (dNZD) - Fee: 0.5%
            </label>
            <Input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={loading}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Available: {(balance / 100).toFixed(2)} dNZD
            </p>
          </div>

          <Button
            onClick={handleBridge}
            disabled={loading || !amount}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Bridging...
              </>
            ) : (
              <>
                <ArrowRightLeft className="h-4 w-4 mr-2" />
                Bridge dNZD
              </>
            )}
          </Button>
        </div>

        {message && (
          <Alert className={message.type === "error" ? "border-destructive/50 bg-destructive/10" : "border-primary/50 bg-primary/10"}>
            {message.type === "error" ? (
              <AlertCircle className="h-4 w-4 text-destructive" />
            ) : (
              <CheckCircle2 className="h-4 w-4 text-primary" />
            )}
            <AlertDescription className="ml-2">{message.text}</AlertDescription>
          </Alert>
        )}

        <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded">
          <p className="font-semibold mb-1">ℹ️ About the Bridge</p>
          <p>
            Bridge your dNZD between Base and Avalanche C-Chain. The Avalanche track is essential for winning! Transactions are processed
            peer-to-peer using smart contract locking.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
