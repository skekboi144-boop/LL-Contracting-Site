"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-usa-blue via-usa-blue to-usa-blue opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">
            U.S. Marine Veteran Owned Business
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-balance">
            Ready to Start Your <span className="text-usa-red">Project?</span>
          </h2>
          <p className="mt-4 text-white/90 text-lg lg:text-xl max-w-xl mx-auto">
            Get in touch today for a free estimate. We&apos;re here to help bring your vision to life.
          </p>
          <p className="mt-2 text-usa-red font-semibold text-lg">
            Built on Trust. Backed by Service.
          </p>

          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="text-base min-w-[200px] bg-usa-red hover:bg-usa-red/90 text-white"
            >
              <Link href="#contact">
                Get Free Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
