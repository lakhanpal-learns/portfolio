import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <h2 className="mb-10 text-3xl font-bold tracking-tight">
      {children}
    </h2>
  );
}