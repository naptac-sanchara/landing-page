"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 dark:border-white/10 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Sanchara" width={28} height={28} priority />
          <span className="font-semibold tracking-tight text-lg">Sanchara</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-foreground/80">
          <Link href="#problem" className="hover:text-foreground">Problem</Link>
          <Link href="#how" className="hover:text-foreground">How it Works</Link>
          <Link href="#privacy" className="hover:text-foreground">Privacy</Link>
          <Link href="#history" className="hover:text-foreground">History</Link>
          <Link href="#future" className="hover:text-foreground">Future</Link>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center rounded-md h-10 w-10 border border-foreground/10">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}


