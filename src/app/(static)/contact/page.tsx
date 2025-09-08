export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-foreground/70">
        For collaboration and inquiries, write to us at contact@sanchara.app
      </p>
      <form className="mt-8 grid gap-4">
        <input className="h-11 rounded-md border border-foreground/15 px-3 bg-background" placeholder="Your email" />
        <textarea className="min-h-32 rounded-md border border-foreground/15 px-3 py-2 bg-background" placeholder="Message" />
        <button className="h-11 rounded-md bg-foreground text-background font-medium">Send</button>
      </form>
    </div>
  );
}


