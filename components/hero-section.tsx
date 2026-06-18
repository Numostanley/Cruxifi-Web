"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown } from "lucide-react"

import { EASE } from "./reveal"

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section className="landing-grid relative flex min-h-screen items-center px-6 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative mx-auto max-w-5xl py-32 text-center">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={reduced ? undefined : { duration: 0.5, ease: EASE }}
          className="mb-6 font-outfit text-xs tracking-widest text-accent uppercase"
        >
          Developer-first infrastructure
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduced ? undefined : { duration: 0.65, ease: EASE, delay: 0.1 }
          }
          className="mb-6 font-outfit text-5xl leading-tight text-text-1 md:text-7xl"
        >
          Infrastructure for{" "}
          <span className="text-glow">critical systems.</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduced ? undefined : { duration: 0.6, ease: EASE, delay: 0.2 }
          }
          className="mx-auto mb-10 max-w-xl font-outfit text-base leading-7 text-text-2 md:text-lg"
        >
          Cruxifi builds developer-first tools for the most important parts of
          your stack — reliable delivery, observability, and intelligent
          debugging.
        </motion.p>

        <motion.a
          href="#products"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduced ? undefined : { duration: 0.5, ease: EASE, delay: 0.3 }
          }
          className="inline-flex items-center gap-2 rounded-md border border-accent bg-accent/10 px-6 py-3 font-outfit text-sm text-accent transition-colors hover:bg-accent/20"
        >
          See our products
          <ArrowDown size={15} />
        </motion.a>
      </div>
    </section>
  )
}
