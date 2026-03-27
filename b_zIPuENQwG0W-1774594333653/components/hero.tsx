"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const highlights = [
  "Licensed & Insured",
  "Free Estimates",
  "Satisfaction Guaranteed",
]

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Image
        src="/images/hero-roofing.jpg"
        alt="Professional roofing contractors at work"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
            <span className="w-2 h-2 bg-usa-red rounded-full animate-pulse" />
            Serving Long Branch & Surrounding Areas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance drop-shadow-lg">
            Quality Contracting Services You Can{" "}
            <span className="text-usa-red">Trust</span>
          </h1>

          <p className="mt-4 text-usa-red font-semibold text-xl lg:text-2xl">
            Built on Trust. Backed by Service.
          </p>

          <p className="mt-4 text-lg lg:text-xl text-white/90 max-w-2xl text-pretty">
            U.S. Marine Veteran owned business providing professional home improvement and maintenance services throughout Long Branch, New Jersey and the Jersey Shore area.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle className="w-5 h-5 text-usa-red" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button size="lg" asChild className="text-base bg-usa-red hover:bg-usa-red/90 text-white">
              <Link href="#contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
              <Link href="#services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
