"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

import { decorativeRingClass } from "./decorative-ring";
import { EASE } from "./reveal";

export function HeroSection() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const ringY = useTransform(scrollY, [0, 500], [0, -250]);
  const textY = useTransform(scrollY, [0, 700], [0, -10]);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <motion.div
        aria-hidden="true"
        style={{ y: reduced ? 0 : ringY }}
        initial={reduced ? false : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 0.6 }}
        transition={reduced ? undefined : { duration: 0.8, ease: EASE }}
        className={`${decorativeRingClass} top-[18%] left-1/2 aspect-square w-[min(90vw,68vh,24rem)] -translate-x-1/2`}
      />

      <motion.div
        style={{ y: reduced ? 0 : textY }}
        className="relative z-10 mx-auto max-w-5xl py-28 text-center"
      >
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={reduced ? undefined : { duration: 0.5, ease: EASE }}
          className="mb-6 font-jetbrains text-[11px] tracking-[0.24em] text-accent uppercase"
        >
          Developer-first infrastructure
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduced ? undefined : { duration: 0.65, ease: EASE, delay: 0.1 }
          }
          className="mx-auto mb-7 max-w-4xl font-outfit text-[clamp(2.35rem,12vw,5.5rem)] font-medium leading-[1.02] text-text-1 sm:leading-[0.96]"
        >
          Infrastructure for{" "}
          <span className="text-accent">critical systems.</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduced ? undefined : { duration: 0.6, ease: EASE, delay: 0.2 }
          }
          className="mx-auto mb-10 max-w-160 font-outfit text-[clamp(0.8125rem,12vw,1rem)] text-text-1 leading-[180%]"
        >
          The hardest problems in software are also the most important ones.
          Cruxifi builds developer-first infrastructure for the parts of your
          stack that can&apos;t fail.
        </motion.p>

        <motion.a
          href="#products"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduced ? undefined : { duration: 0.5, ease: EASE, delay: 0.3 }
          }
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 font-outfit text-sm text-text-1 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          See our products
          <ArrowDown
            size={15}
            className="transition-transform group-hover:translate-y-0.5"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
