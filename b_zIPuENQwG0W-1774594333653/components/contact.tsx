"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@llcontracting.com",
    href: "mailto:info@llcontracting.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Long Branch, NJ 07740",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 7AM-6PM",
    href: null,
  },
]

export function Contact() {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-usa-red font-medium text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 text-balance">
            Get Your Free Estimate
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ready to start your project? Contact us today for a free, no-obligation estimate. We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div
            ref={formRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              formVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(732) 555-0000"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="gutter-cleaning">Gutter Cleaning</option>
                      <option value="minor-repairs">Minor Repairs</option>
                      <option value="roofing">Roofing</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="junk-removal">Junk Removal</option>
                      <option value="driveways">Driveways</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-usa-red hover:bg-usa-red/90 text-white" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div
            ref={infoRef}
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              infoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-foreground">{item.value}</div>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} style={{ animationDelay: `${index * 100}ms` }}>
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">
                Service Areas
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We proudly serve Long Branch, Asbury Park, Red Bank, Ocean Township, Deal, West Long Branch, Eatontown, and surrounding Monmouth County areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
