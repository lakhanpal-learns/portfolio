import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import MobileNavigation from "./MobileNavigation";

const styles = {
  header:
    "sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",

  container:
    "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",

  left: "flex items-center gap-10",
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo />
          <DesktopNavigation />
        </div>

        <HeaderActions />

        <MobileNavigation />
      </div>
    </header>
  );
}