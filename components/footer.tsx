"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-gradient-to-r from-background via-background to-background/95 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl">
            © 2026 L2Earn · Web3NZ Hackathon Team 13. Demo only - not a financial product.
            dNZD shown is testnet/mock for the hackathon.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <p className="text-xs text-muted-foreground">Inspired by</p>
            <a
              href="https://www.newmoneyofficial.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline transition-colors"
            >
              New Money
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
