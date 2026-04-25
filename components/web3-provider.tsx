"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { type ReactNode, useEffect, useState } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/wagmi-config";

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialise AppKit only on the client to avoid SSR issues
    import("@/lib/appkit").then(() => setMounted(true));
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {mounted ? children : (
          // Render children immediately but AppKit initialises async
          // This prevents a blank screen while the modal library loads
          <>{children}</>
        )}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
