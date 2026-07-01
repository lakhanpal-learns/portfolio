import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import { socials } from "@/config";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const styles = {
  container: "hidden items-center gap-2 lg:flex",
};

export default function HeaderActions() {
  return (
    <div className={styles.container}>
      <Button variant="ghost" size="icon" asChild>
        <Link
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <IconBrandGithub className="size-5" />
        </Link>
      </Button>

      <Button variant="ghost" size="icon" asChild>
        <Link
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin className="size-5" />
        </Link>
      </Button>

      <Button asChild>
        <Link
          href={socials.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </Button>

      <ThemeToggle />
    </div>
  );
}