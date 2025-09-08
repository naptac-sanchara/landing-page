"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plane } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight"
            >
              Sanchara: Consent-first trip logging for NATPAC
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-foreground/70"
            >
              Capture trip chains with origin, mode, destination and companions—
              passively detected, user-verified, and synced for planners.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-3 font-medium hover:opacity-90"
              >
                <Plane className="h-4 w-4" /> Get the App
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-5 py-3 font-medium hover:bg-foreground/5"
              >
                Learn more
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[4/3] rounded-2xl border border-foreground/10 overflow-hidden bg-background"
          >
            <Image
              src="/hero-illustration.svg"
              alt="Sanchara trip logging illustration"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


