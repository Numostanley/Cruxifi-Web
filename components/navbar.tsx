"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/80 backdrop-blur-xl" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="font-outfit text-xl font-semibold text-accent">
          Cruxifi
        </a>

        <nav className="hidden items-center rounded-full border border-border bg-surface/70 px-2 py-1  backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 font-outfit text-sm text-text-2 transition-colors hover:bg-surface-2 hover:text-text-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="rounded-full border border-border bg-surface/70 p-2 text-text-2 backdrop-blur-md transition-colors hover:text-text-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent cursor-pointer"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={15} />
              ) : (
                <Moon size={15} />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
