import { ArrowUpRight } from "lucide-react";

import { DecorativeRing, RingIntersectionBlur } from "./decorative-ring";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden border-t border-border px-6 py-12"
    >
      <DecorativeRing className="-right-28 -bottom-44 h-80 w-80 opacity-20" />
      <RingIntersectionBlur className="-right-8 bottom-0 h-40 w-72 opacity-70" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="mb-1 font-outfit text-xl font-semibold text-accent">
              Cruxifi
            </p>
            <p className="font-outfit text-xs text-text-2">
              Infrastructure for critical systems.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="mailto:hello@cruxifi.com"
              className="font-outfit text-sm text-text-2 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              hello@cruxifi.com
            </a>
            <a
              href="https://firmhook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 font-outfit text-sm text-accent transition-colors hover:border-accent/50 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              FirmHook
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-border pt-6 font-outfit text-xs text-text-2 sm:flex-row sm:items-center">
          <p>&copy; 2026 Cruxifi Labs Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 pulse-dot rounded-full bg-success" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
