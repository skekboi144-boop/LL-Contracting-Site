import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Gutter Cleaning",
  "Minor Repairs",
  "Roofing",
  "Landscaping",
  "Junk Removal",
  "Driveways",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="L&L Contracting Group Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </Link>
            <p className="mt-4 text-usa-red font-semibold text-sm">
              Built on Trust. Backed by Service.
            </p>
            <p className="mt-2 text-background/70 text-sm leading-relaxed">
              U.S. Marine Veteran owned business proudly serving Long Branch and the Jersey Shore area.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@llcontracting.com"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@llcontracting.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-background/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  Long Branch, NJ 07740
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} L&L Contracting Group. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            U.S. Marine Veteran Owned | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
