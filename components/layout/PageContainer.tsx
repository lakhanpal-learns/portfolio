import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="flex-1 px-8 py-10 lg:px-14">
      {children}
    </main>
  );
}