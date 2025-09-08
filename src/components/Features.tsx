"use client";

import { motion } from "framer-motion";
import { Map, CalendarDays, TicketPercent } from "lucide-react";

const features = [
  {
    title: "Passive Trip Detection",
    description:
      "Detect trips when movement exceeds ~200m and nudge users to confirm.",
    Icon: Map,
  },
  {
    title: "Smart Mode Estimation",
    description:
      "Infer walk vs vehicle from speed, distance and timestamps.",
    Icon: TicketPercent,
  },
  {
    title: "Companions & Metadata",
    description:
      "Capture companions, origin/destination, purpose, and mode in one flow.",
    Icon: CalendarDays,
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Built for travel data collection</h2>
          <p className="mt-3 text-foreground/70">Accurate, privacy-aware trip logs for planning and research.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-xl border border-foreground/10 p-6 bg-background/50"
            >
              <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


