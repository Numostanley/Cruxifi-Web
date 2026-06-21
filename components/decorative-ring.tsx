type DecorativeRingProps = {
  className?: string;
};

export const decorativeRingClass = [
  "pointer-events-none absolute z-0 rounded-full border border-accent/20",
  "shadow-[0_0_60px_rgb(0_233_161/0.40),0_0_140px_rgb(0_233_161/0.22),inset_0_0_90px_rgb(2_6_24/0.10),inset_0_0_70px_rgb(0_233_161/0.08)]",
  "dark:shadow-[0_0_90px_rgb(0_233_161/0.20),inset_0_0_100px_rgb(0_0_0/0.55),inset_0_0_70px_rgb(0_233_161/0.06)]",
].join(" ");

export function RingIntersectionBlur({ className = "" }: DecorativeRingProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute z-[1] rounded-full bg-bg/55 blur-2xl backdrop-blur-md dark:bg-bg/45",
        className,
      ].join(" ")}
    />
  );
}

export function DecorativeRing({ className = "" }: DecorativeRingProps) {
  return (
    <div
      aria-hidden="true"
      className={[decorativeRingClass, className].join(" ")}
    />
  );
}
