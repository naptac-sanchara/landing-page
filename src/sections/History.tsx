import { Route, MapPinned } from "lucide-react";

export function History() {
  return (
    <section id="history" className="py-16 sm:py-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Trip history</h2>
          <p className="mt-3 text-foreground/70">Neat maps, distances, duration, modes, and companions per trip.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-foreground/10 p-6">
            <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
              <Route className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Trip chains</h3>
            <p className="mt-2 text-sm text-foreground/70">Visualize trip segments and transitions across modes.</p>
          </div>
          <div className="rounded-xl border border-foreground/10 p-6">
            <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
              <MapPinned className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Detailed stats</h3>
            <p className="mt-2 text-sm text-foreground/70">Distance, duration, pace, and inferred mode confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


