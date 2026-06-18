import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border px-6 py-12"
    >
      <div className="mx-auto max-w-5xl">
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
              className="font-outfit text-sm text-text-2 transition-colors hover:text-text-1"
            >
              hello@cruxifi.com
            </a>
            <a
              href="https://firmhook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-outfit text-sm text-accent hover:underline"
            >
              FirmHook
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-6 font-outfit text-xs text-text-2">
          <p>&copy; 2026 Cruxifi Labs Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 pulse-dot rounded-full bg-success" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
