import type { Metadata } from "next"
import { JetBrains_Mono, Outfit } from "next/font/google"
import { ThemeProvider } from "next-themes"

import "./globals.css"
import { cn } from "@/lib/cn"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Cruxifi — Infrastructure for Critical Systems",
  description:
    "Cruxifi builds developer-first infrastructure tools for the most critical parts of modern backend systems — reliable delivery, observability, and intelligent debugging.",
  openGraph: {
    title: "Cruxifi — Infrastructure for Critical Systems",
    description:
      "Developer-first infrastructure for reliable delivery, observability, and intelligent debugging.",
    url: "https://cruxifi.com",
    siteName: "Cruxifi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruxifi — Infrastructure for Critical Systems",
    description:
      "Developer-first infrastructure for reliable delivery, observability, and intelligent debugging.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased",
          outfit.variable,
          jetBrains.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
