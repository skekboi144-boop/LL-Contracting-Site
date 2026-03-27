"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Droplets,
  Wrench,
  Home,
  TreePine,
  Trash2,
  Car,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Droplets,
    title: "Gutter Cleaning",
    description:
      "Professional gutter cleaning and maintenance to protect your home from water damage. We ensure proper drainage year-round.",
  },
  {
    icon: Wrench,
    title: "Minor Repairs",
    description:
      "Quick and reliable minor home repairs including drywall, trim work, fixtures, and general handyman services.",
  },
  {
    icon: Home,
    title: "Roofing",
    description:
      "Expert roofing services including repairs, inspections, and maintenance. Protect your investment with quality workmanship.",
  },
  {
    icon: TreePine,
    title: "Landscaping",
    description:
      "Complete landscaping services from lawn care and garden maintenance to hardscaping and outdoor living spaces.",
  },
  {
    icon: Trash2,
    title: "Junk Removal",
    description:
      "Fast and efficient junk removal services. We handle everything from single items to full property cleanouts.",
  },
  {
    icon: Car,
    title: "Driveways",
    description:
      "Driveway installation, repair, and sealing services. We work with asphalt, concrete, and pavers for lasting results.",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`group relative bg-card border border-border rounded-xl p-6 lg:p-8 transition-all duration-700 hover:shadow-lg hover:border-primary/30 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>
      <Link
        href="#contact"
        className="inline-flex items-center gap-1 text-usa-red text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Get a Quote
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={headerRef}
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-usa-red font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From routine maintenance to major improvements, we provide comprehensive contracting services to keep your property in top condition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
