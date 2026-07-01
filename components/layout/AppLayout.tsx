import { ReactNode } from "react";

import Header from "@/components/navigation/Header";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="mx-auto flex max-w-7xl">
        {children}
      </div>
    </div>
  );
}