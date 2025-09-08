export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
        <p>
          © {new Date().getFullYear()} Sanchara. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-foreground" href="#">Privacy</a>
          <a className="hover:text-foreground" href="#">Terms</a>
          <a className="hover:text-foreground" href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
}


