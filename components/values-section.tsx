"use client";

import { motion, useReducedMotion } from "framer-motion";

import { DecorativeRing, RingIntersectionBlur } from "./decorative-ring";
import { EASE } from "./reveal";

const values = [
  {
    title: "Reliability First",
    body: "Systems must work when it matters most. Every Cruxifi primitive is designed around guaranteed behavior under failure.",
  },
  {
    title: "Simplicity",
    body: "Complex problems should have clear, simple solutions. We absorb the hard parts so teams can keep moving.",
  },
  {
    title: "Developer Experience",
    body: "Tools should reduce friction and save time. From local tunnels to one-click replay, every interaction is deliberate.",
  },
  {
    title: "Intelligence",
    body: "Systems should not just report problems. They should help explain and solve them.",
  },
  {
    title: "Performance",
    body: "Fast, efficient, and scalable by design. Infrastructure that cannot keep up is not infrastructure.",
  },
];

export function ValuesSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="values"
      className="relative isolate overflow-hidden border-t border-border px-6 py-24 lg:py-32"
    >
      <DecorativeRing className="bottom-14 -left-56 h-[28rem] w-[28rem] opacity-35 md:-left-48 lg:-left-40" />
      <RingIntersectionBlur className="bottom-16 left-0 h-80 w-[22rem] -translate-x-20 opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.68fr_1.32fr]">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={reduced ? undefined : { duration: 0.55, ease: EASE }}
          className="md:sticky md:top-28 md:self-start"
        >
          <p className="mb-3 font-jetbrains text-[11px] tracking-[0.24em] text-accent uppercase">
            Values
          </p>
          <h2 className="font-outfit text-3xl font-medium leading-tight text-text-1 md:text-5xl">
            What we build on.
          </h2>
          <p className="mt-5 max-w-sm font-outfit text-sm leading-7 text-text-2">
            These aren&apos;t slogans. They&apos;re the constraints we apply to
            every product decision — because infrastructure that compromises on
            any of them eventually fails the people who depend on it.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={
            reduced ? undefined : { duration: 0.55, ease: EASE, delay: 0.1 }
          }
          className="divide-y divide-border border-y border-border"
        >
          {values.map((value) => (
            <article
              key={value.title}
              className="grid gap-3 py-6 sm:grid-cols-[0.42fr_1fr] sm:gap-8"
            >
              <h3 className="font-outfit text-base font-medium text-text-1">
                {value.title}
              </h3>
              <p className="font-outfit text-sm leading-7 text-text-2">
                {value.body}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
