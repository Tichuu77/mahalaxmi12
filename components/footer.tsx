import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="border-t-4 relative overflow-hidden pt-6 pb-8"
      style={{
        backgroundColor: 'var(--primary)',
        borderColor: 'var(--primary)/50'
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2 cursor-pointer">
              <img src="/Malaxmi-Final-Logo.-2png.png" alt="Logo" className="w-28 h-28" />
              <span
                style={{ 
                  fontFamily: "var(--font-heading)",
                  color: 'var(--primary-foreground)'
                }}
                className="font-bold text-xl"
              >
                Mahalaxmi Infra
              </span>
            </div>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'var(--primary-foreground)', opacity: 0.7 }}
            >
              Delivering premium solutions with excellence and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8 ml-8">
            <h4
              style={{ 
                fontFamily: "var(--font-heading)",
                color: 'var(--primary-foreground)'
              }}
              className="font-bold mb-4 text-lg"
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                {href: "#overview", label: "About"}, 
                {href: "#amenities", label: "Amenities"}, 
                {label: "Gallery", href: "#gallery"}
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="transition-colors text-lg hover:opacity-100"
                    style={{ 
                      color: 'var(--primary-foreground)',
                      opacity: 0.7
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mt-8 ml-8">
            <h4
              style={{ 
                fontFamily: "var(--font-heading)",
                color: 'var(--primary-foreground)'
              }}
              className="font-bold mb-4 text-lg"
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                {href: "#testimonials", label: "Testimonials"}, 
                {href: "#faq_sec", label: "Contact"},
                {label: "Boucher", href: "#boucher"}
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="transition-colors text-lg hover:opacity-100"
                    style={{ 
                      color: 'var(--primary-foreground)',
                      opacity: 0.7
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 ml-8">
            <h4
              style={{ 
                fontFamily: "var(--font-heading)",
                color: 'var(--primary-foreground)'
              }}
              className="font-bold mb-4 text-lg"
            >
              Contact
            </h4>
            <ul className="space-y-3">
              {/* <li style={{ color: 'var(--primary-foreground)' }}>
                Raj Wandhare
              </li> */}
              <li 
                className="flex items-center gap-2 text-lg"
                style={{ color: 'var(--primary-foreground)', opacity: 0.7 }}
              >
                <Phone 
                  size={14} 
                  style={{ color: 'var(--primary-foreground)', opacity: 1 }}
                />
                +91 7066768334
              </li>
               <li 
                className="flex items-center gap-2 text-lg"
                style={{ color: 'var(--primary-foreground)', opacity: 0.7 }}
              >
                <Phone 
                  size={14} 
                  style={{ color: 'var(--primary-foreground)', opacity: 1 }}
                />
                +91 9762007743
              </li>
              {/* <li 
                className="flex items-center gap-2 text-lg"
                style={{ color: 'var(--primary-foreground)', opacity: 0.7 }}
              >
                <Mail 
                  size={14} 
                  style={{ color: 'var(--primary-foreground)', opacity: 1 }}
                />
                dighoriofficebranch@gmail.com
              </li> */}
              {/* <li 
                className="flex items-start gap-2 text-lg"
                style={{ color: 'var(--primary-foreground)', opacity: 0.7 }}
              >
                <MapPin 
                  size={14} 
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--primary-foreground)', opacity: 1 }}
                />
                123 Luxury Avenue
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px my-8"
          style={{ backgroundColor: 'var(--primary-foreground)', opacity: 0.1 }}
        ></div>
      </div>
    </footer>
  )
}