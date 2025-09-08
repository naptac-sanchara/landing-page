import { Shield, Battery, WifiOff } from "lucide-react";

export function Privacy() {
  return (
    <section id="privacy" className="py-16 sm:py-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Consent & privacy</h2>
          <p className="mt-3 text-foreground/70">
            We ask for explicit consent and explain why background location and battery optimizations are required.
            Data stays local during trips and syncs only after completion (or when back online).
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-foreground/10 p-6">
            <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Explicit consent</h3>
            <p className="mt-2 text-sm text-foreground/70">Transparent permissions and opt-outs, including privacy pauses.</p>
          </div>
          <div className="rounded-xl border border-foreground/10 p-6">
            <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
              <Battery className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Battery-optimized</h3>
            <p className="mt-2 text-sm text-foreground/70">Designed to work efficiently in background with user awareness.</p>
          </div>
          <div className="rounded-xl border border-foreground/10 p-6">
            <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
              <WifiOff className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Offline-first</h3>
            <p className="mt-2 text-sm text-foreground/70">Data is stored locally and synced when online.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


