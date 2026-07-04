import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="flex-1 px-6 py-8 lg:px-8">
      {children}
    </main>
  );
}