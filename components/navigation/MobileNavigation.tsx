"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/config";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const styles = {
  trigger: "lg:hidden",
  content: "w-72",
  nav: "mt-8 flex flex-col gap-6",
  link: "text-base font-medium",
};

export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={styles.trigger}
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className={styles.content}>
        <nav className={styles.nav}>
          {navigation.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className={styles.link}
            >
              {navItem.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}