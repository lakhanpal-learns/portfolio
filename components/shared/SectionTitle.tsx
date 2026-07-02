import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:mb-10 sm:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}