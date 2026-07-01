import { ReactNode } from "react";

import Header from "@/components/navigation/Header";

type AppLayoutProps = {
  children: ReactNode;
};

const styles = {
  wrapper: "min-h-screen bg-background",
  content: "mx-auto flex max-w-7xl",
};

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}