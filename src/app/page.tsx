"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Problem } from "@/sections/Problem";
import { HowItWorks } from "@/sections/HowItWorks";
import { Privacy } from "@/sections/Privacy";
import { History } from "@/sections/History";
import { Future } from "@/sections/Future";
import { Admin } from "@/sections/Admin";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Privacy />
        <Features />
        <History />
        <Future />
        <Admin />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
