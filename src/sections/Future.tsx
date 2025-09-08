import { ShieldAlert, Share2, Trophy, Sparkles } from "lucide-react";

const items = [
  {
    title: "Privacy pauses",
    description: "Stop tracking in sensitive places or during private trips.",
    Icon: ShieldAlert,
  },
  {
    title: "Safety gestures",
    description: "Shake phone to alert companions with location.",
    Icon: Sparkles,
  },
  {
    title: "Streaks & sharing",
    description: "Maintain travel streaks, share highlights on social media.",
    Icon: Share2,
  },
  {
    title: "Leaderboards",
    description: "Weekly leaderboards for friendly competition.",
    Icon: Trophy,
  },
];

export function Future() {
  return (
    <section id="future" className="py-16 sm:py-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Future scope</h2>
          <p className="mt-3 text-foreground/70">Planned enhancements for engagement and safety.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, description, Icon }) => (
            <div key={title} className="rounded-xl border border-foreground/10 p-6">
              <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


