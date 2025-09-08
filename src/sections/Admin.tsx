import { BarChart3, ShieldCheck, Users } from "lucide-react";

export function Admin() {
  return (
    <section id="admin" className="py-16 sm:py-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Admin dashboards</h2>
          <p className="mt-3 text-foreground/70">
            Role-based access (super admin, admin) for aggregated, privacy-preserving analytics.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-foreground/10 p-6">
            <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">City-wide trends</h3>
            <p className="mt-2 text-sm text-foreground/70">OD matrices, mode shares, peak hours.</p>
          </div>
          <div className="rounded-xl border border-foreground/10 p-6">
            <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Data governance</h3>
            <p className="mt-2 text-sm text-foreground/70">Consent logs, anonymization, retention policies.</p>
          </div>
          <div className="rounded-xl border border-foreground/10 p-6">
            <div className="h-10 w-10 rounded-md bg-foreground/10 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Role management</h3>
            <p className="mt-2 text-sm text-foreground/70">Super admin and admin roles with audit trails.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


