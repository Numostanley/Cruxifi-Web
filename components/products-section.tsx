"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, CheckCircle, Clock } from "lucide-react"

import { EASE } from "./reveal"

const firmhookFeatures = [
  "Guaranteed delivery with automatic retries",
  "AI-powered error explanations",
  "Local dev tunnel — no ngrok required",
  "One-click event replay",
]

export function ProductsSection() {
  const reduced = useReducedMotion()

  return (
    <section id="products" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={reduced ? undefined : { duration: 0.55, ease: EASE }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-outfit text-xs tracking-widest text-accent uppercase">
            Products
          </p>
          <h2 className="font-outfit text-4xl text-text-1">
            Tools for the critical path.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-outfit text-sm leading-relaxed text-text-2">
            Each Cruxifi product targets a specific class of hard problem in
            modern backend systems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={
              reduced ? undefined : { duration: 0.55, ease: EASE, delay: 0.05 }
            }
            className="flex flex-col rounded-xl border border-border bg-surface p-8"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="mb-1 font-outfit text-xs tracking-widest text-accent uppercase">
                  Webhook Reliability Platform
                </p>
                <h3 className="font-outfit text-2xl text-text-1">FirmHook</h3>
              </div>
              <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-1 font-outfit text-[10px] text-success uppercase tracking-wider">
                Live
              </span>
            </div>

            <p className="mb-6 font-outfit text-sm leading-relaxed text-text-2">
              Never lose a webhook again. FirmHook handles delivery, retries,
              AI-powered error explanations, and local development for
              webhook-driven systems.
            </p>

            <div className="mb-8 space-y-2.5">
              {firmhookFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={14}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="font-outfit text-sm text-text-2">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://firmhook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 font-outfit text-sm text-accent hover:underline"
            >
              Visit firmhook.com
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={
              reduced ? undefined : { duration: 0.55, ease: EASE, delay: 0.15 }
            }
            className="flex flex-col rounded-xl border border-border border-dashed bg-surface/50 p-8"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="mb-1 font-outfit text-xs tracking-widest text-text-2 uppercase">
                  Coming soon
                </p>
                <h3 className="font-outfit text-2xl text-text-2">
                  More tools
                </h3>
              </div>
              <Clock size={18} className="text-text-2/50" />
            </div>

            <p className="font-outfit text-sm leading-relaxed text-text-2/70">
              Cruxifi is building infrastructure for event delivery, API
              observability, and system reliability. Each tool is designed
              around the same principles: reliability, simplicity, and
              intelligent debugging.
            </p>

            <p className="mt-8 font-outfit text-xs text-text-2/50">
              Stay tuned — announcements at{" "}
              <span className="text-accent">hello@cruxifi.com</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
