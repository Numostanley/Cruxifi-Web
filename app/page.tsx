import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { ProductsSection } from "@/components/products-section"
import { ValuesSection } from "@/components/values-section"

export default function Page() {
  return (
    <main className="overflow-hidden bg-bg text-text-1">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ValuesSection />
      <Footer />
    </main>
  )
}
