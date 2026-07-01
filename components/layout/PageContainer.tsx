import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const styles = {
  container: "flex-1 px-6 py-10",
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
}