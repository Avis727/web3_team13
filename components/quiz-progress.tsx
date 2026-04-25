"use client";

export interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredCount: number;
}

export function QuizProgress({
  currentQuestion,
  totalQuestions,
  answeredCount,
}: QuizProgressProps) {
  const progressPercent = (answeredCount / totalQuestions) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">Progress</span>
        <span className="text-xs text-muted-foreground">
          {answeredCount} of {totalQuestions} answered
        </span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
