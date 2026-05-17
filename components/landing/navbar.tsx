import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lift">
            <FileText className="h-5 w-5" />
          </span>
          ReadmeForge
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#templates" className="hover:text-foreground">Templates</a>
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#examples" className="hover:text-foreground">Examples</a>
        </div>
        <Link href="/studio">
          <Button size="sm">Start Creating</Button>
        </Link>
      </nav>
    </header>
  );
}
