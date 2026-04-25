"use client";

export function LoadingSkeleton() {
  return (
    <div className="w-full space-y-4">
      <div className="h-8 w-3/4 bg-muted rounded loading-shimmer"></div>
      <div className="h-4 w-full bg-muted rounded loading-shimmer"></div>
      <div className="h-4 w-5/6 bg-muted rounded loading-shimmer"></div>
      <div className="h-64 w-full bg-muted rounded loading-shimmer"></div>
      <div className="h-4 w-full bg-muted rounded loading-shimmer"></div>
      <div className="h-4 w-4/5 bg-muted rounded loading-shimmer"></div>
    </div>
  );
}

export function LoadingPulseCard() {
  return (
    <div className="rounded-lg border border-border bg-card p-6 loading-pulse">
      <div className="h-6 w-2/3 bg-muted/50 rounded mb-4"></div>
      <div className="h-4 w-full bg-muted/50 rounded mb-2"></div>
      <div className="h-4 w-5/6 bg-muted/50 rounded"></div>
    </div>
  );
}
