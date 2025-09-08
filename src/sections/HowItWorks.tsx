import { Bell, MapPin, Users, Send } from "lucide-react";

const steps = [
  {
    title: "Splash & Sign up",
    description:
      "Email sign-up with OTP verification, or continue as guest. DigiLocker planned.",
    Icon: Users,
  },
  {
    title: "Detect or Start Trip",
    description:
      "Auto-detect movement beyond ~200m and nudge. Or start a trip manually.",
    Icon: Bell,
  },
  {
    title: "Confirm Details",
    description:
      "Add companions, select mode, set start/end on map, then proceed.",
    Icon: MapPin,
  },
  {
    title: "Sync & Analyze",
    description:
      "Data is stored locally during trip, synced when online for planners.",
    Icon: Send,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <p className="mt-3 text-foreground/70">
            Consent-first, offline-friendly logging—from detection to verified trip chains.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-foreground/10 p-6 bg-background/50"
            >
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


