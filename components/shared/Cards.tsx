import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {children}
    </div>
  );
}