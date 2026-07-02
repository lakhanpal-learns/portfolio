import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
};

export default function Section({
  id,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-16 md:py-20"
    >
      {children}
    </section>
  );
}