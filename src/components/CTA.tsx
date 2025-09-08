"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="download" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-foreground/10 p-8 sm:p-12 text-center bg-gradient-to-br from-foreground/[0.04] to-transparent"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to start your next journey?
          </h2>
          <p className="mt-3 text-foreground/70">
            Join thousands of travelers exploring with Sanchara.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              className="rounded-md bg-foreground text-background px-5 py-3 font-medium hover:opacity-90"
              href="#"
            >
              Download for iOS
            </a>
            <a
              className="rounded-md border border-foreground/15 px-5 py-3 font-medium hover:bg-foreground/5"
              href="#"
            >
              Download for Android
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


