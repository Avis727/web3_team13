"use client";

import { ReactNode } from "react";

export function PageAnimationWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="page-enter w-full">
      {children}
    </div>
  );
}
