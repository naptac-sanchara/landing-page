import React, { useEffect, useState } from "react";

export function Footer() {
  const [isOperational, setIsOperational] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("https://sanchara-api1.sreecharandesu.in//api/health")
      .then((res) => res.json())
      .then((data) => {
        setIsOperational(data.success === false);
      })
      .catch(() => setIsOperational(true));
  }, []);

  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
        <div className="flex items-center gap-3">
          {/* Animated green pulse if operational */}
          {isOperational !== null && (
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOperational ? 'bg-green-400 opacity-75' : 'bg-red-400 opacity-75'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isOperational ? 'bg-green-500' : 'bg-red-500'}`}></span>
            </span>
          )}
          <span>
            {isOperational === null && 'Checking system status...'}
            {isOperational === true && 'All systems operational'}
            {isOperational === false && 'System issue detected'}
          </span>
        </div>
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


