"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle, Clock } from "lucide-react";

import { DecorativeRing, RingIntersectionBlur } from "./decorative-ring";
import { EASE } from "./reveal";

const firmhookFeatures = [
  "Guaranteed delivery with automatic retries",
  "AI-powered error explanations",
  "Local dev tunnel, no ngrok required",
  "One-click event replay",
];

export function ProductsSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="products"
      className="relative isolate overflow-hidden border-t border-border px-6 py-24 lg:py-32"
    >
      <DecorativeRing className="top-20 -right-52 h-[26rem] w-[26rem] opacity-45 md:-right-44 lg:-right-36" />
      <RingIntersectionBlur className="top-16 right-0 h-80 w-[22rem] translate-x-20 opacity-75" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={reduced ? undefined : { duration: 0.55, ease: EASE }}
          className="mb-14 grid gap-6 md:grid-cols-[0.76fr_1.24fr] md:items-end"
        >
          <div>
            <p className="mb-3 font-jetbrains text-[11px] tracking-[0.24em] text-accent uppercase">
              Products
            </p>
            <h2 className="font-outfit text-3xl font-medium leading-tight text-text-1 md:text-5xl">
              Tools for the critical path.
            </h2>
          </div>
          <p className="max-w-xl font-outfit text-sm leading-7 text-text-2 md:justify-self-end">
            Each Cruxifi product targets one specific, hard problem in modern
            backend systems — the kind that causes outages, lost data, and 3am
            pages.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-[1.18fr_0.82fr]">
          <motion.article
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={
              reduced ? undefined : { duration: 0.55, ease: EASE, delay: 0.05 }
            }
            className="quiet-panel group relative overflow-hidden rounded-xl border border-border p-7 transition-colors hover:border-accent/45 md:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-full w-px bg-accent/50 opacity-0 transition-opacity group-hover:opacity-100"
            />
            <div className="mb-9 flex items-start justify-between gap-5">
              <div>
                <p className="mb-2 font-jetbrains text-[11px] tracking-[0.22em] text-accent uppercase">
                  Webhook Reliability Platform
                </p>
                <h3 className="font-outfit text-3xl font-medium text-text-1">
                  FirmHook
                </h3>
              </div>
              <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-1 font-jetbrains text-[10px] tracking-[0.16em] text-success uppercase">
                Live
              </span>
            </div>

            <p className="mb-8 max-w-lg font-outfit text-sm leading-7 text-text-2">
              Never lose a webhook again. FirmHook handles delivery, retries,
              AI-powered error explanations, and local development for
              webhook-driven systems.
            </p>

            <div className="mb-9 grid gap-3 sm:grid-cols-2">
              {firmhookFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 border-t border-border pt-3"
                >
                  <CheckCircle
                    size={14}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="font-outfit text-sm leading-6 text-text-2">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://firmhook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 font-outfit text-sm text-accent transition-colors hover:border-accent/50 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Visit firmhook.com
              <ArrowUpRight size={14} />
            </a>
          </motion.article>

          <motion.aside
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={
              reduced ? undefined : { duration: 0.55, ease: EASE, delay: 0.13 }
            }
            className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-dashed border-border bg-surface/35 p-7 md:p-8"
          >
            <div>
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 font-jetbrains text-[11px] tracking-[0.2em] text-text-2 uppercase">
                    Coming soon
                  </p>
                  <h3 className="font-outfit text-2xl font-medium text-text-1">
                    More tools
                  </h3>
                </div>
                <Clock size={18} className="text-accent/80" />
              </div>

              <p className="font-outfit text-sm leading-7 text-text-2">
                Reliable event delivery is just the beginning. We&apos;re
                working on tools for API observability, system health
                monitoring, and intelligent failure analysis — each built on
                the same foundation.
              </p>
            </div>

            <p className="mt-10 border-t border-border pt-5 font-outfit text-xs leading-6 text-text-2">
              Announcements at{" "}
              <a
                href="mailto:hello@cruxifi.com"
                className="text-accent hover:underline"
              >
                hello@cruxifi.com
              </a>
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
