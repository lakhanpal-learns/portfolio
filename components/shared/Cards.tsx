import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-foreground/20">
      {children}
    </div>
  );
}