"use client"

import { motion, useReducedMotion } from "framer-motion"

import { EASE } from "./reveal"

const values = [
  {
    title: "Reliability First",
    body: "Systems must work when it matters most. Every Cruxifi primitive is designed around guaranteed behaviour under failure.",
  },
  {
    title: "Simplicity",
    body: "Complex problems should have clear, simple solutions. We absorb the hard parts so you don't have to think about them.",
  },
  {
    title: "Developer Experience",
    body: "Tools should reduce friction and save time. From a two-command local tunnel to one-click replay — every interaction is deliberate.",
  },
  {
    title: "Intelligence",
    body: "Systems should not just report problems — they should help explain and solve them. AI is a first-class feature, not an add-on.",
  },
  {
    title: "Performance",
    body: "Fast, efficient, and scalable by design. Infrastructure that can't keep up isn't infrastructure.",
  },
]

export function ValuesSection() {
  const reduced = useReducedMotion()

  return (
    <section id="values" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={reduced ? undefined : { duration: 0.55, ease: EASE }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-outfit text-xs tracking-widest text-accent uppercase">
            Values
          </p>
          <h2 className="font-outfit text-4xl text-text-1">
            What we build on.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-outfit text-sm leading-relaxed text-text-2">
            These aren&apos;t slogans. They&apos;re constraints we apply to
            every product and decision.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={
            reduced ? undefined : { duration: 0.55, ease: EASE, delay: 0.1 }
          }
          className="grid gap-4 sm:grid-cols-2"
        >
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`rounded-xl border border-border bg-surface p-6 ${
                i === values.length - 1 && values.length % 2 !== 0
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <p className="mb-2 font-outfit text-sm font-medium text-text-1">
                {v.title}
              </p>
              <p className="font-outfit text-sm leading-relaxed text-text-2">
                {v.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
