"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, Clock, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed contractor with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. Our team arrives on schedule and completes projects as promised.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We stand behind our work with a satisfaction guarantee on all projects we complete.",
  },
  {
    icon: Users,
    title: "Veteran Owned",
    description: "Proudly U.S. Marine Veteran owned business serving our community with honor and integrity.",
  },
]

export function About() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="text-usa-red font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 text-balance">
              Building Trust, One Project at a Time
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              L&L Contracting Group has been serving Long Branch and the greater Monmouth County area with pride. As a <strong className="text-foreground">U.S. Marine Veteran owned</strong> and operated business, we bring the same dedication, discipline, and commitment to excellence that defines our military service to every project we undertake.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of skilled professionals is dedicated to maintaining the highest standards of quality and integrity. Whether it&apos;s a simple repair or a complete renovation, we treat every project with the same level of care and attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className={`transition-all duration-500`} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed pl-13">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            ref={quoteRef}
            className={`transition-all duration-700 delay-200 ${
              quoteVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
                <blockquote className="text-foreground italic text-lg lg:text-xl leading-relaxed">
                  &ldquo;Our commitment is simple: deliver quality work, on time, and at a fair price. We build lasting relationships with our clients by exceeding their expectations.&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src="/images/logo.png"
                    alt="L&L Contracting Group Logo"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <div className="font-semibold text-foreground">L&L Contracting Group</div>
                    <div className="text-usa-red text-sm font-medium">Built on Trust. Backed by Service.</div>
                    <div className="text-muted-foreground text-sm mt-1">U.S. Marine Veteran Owned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
