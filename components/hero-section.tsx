'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Overview', href: '#overview', active: false },
  { name: 'Amenities', href: '#amenities', active: false },
  { name: 'Gallery', href: '#gallery', active: false },
  { name: 'Testimonials', href: '#testimonials', active: false },
  { name: 'FAQ', href: '#faq_sec', active: false }
];

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinksState, setNavLinksState] = useState(navLinks);
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <>
      {/* Header */}
      <header
        className="absolute top-0 left-0 right-0 z-50 py-4"
        style={{ background: 'transparent' }}
      >
        <div className="container px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-3">
                {/* Logo Icon */}
                <div className="relative">
                  <img src="/Malaxmi-Final-Logo.-2png.png" alt="Logo" className=" w-45 h-45" />
                </div>

              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinksState.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold transition-colors uppercase tracking-wide"
                  style={{
                    color: link.active ? 'var(--secondary)' : 'var(--primary-foreground)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    opacity: link.active ? 1 : 0.9,
                    borderBottom: link.active ? '2px solid var(--secondary)' : 'none',
                  }}
                  onClick={() => {
                    setNavLinksState(navLinksState.map(navLink => ({
                      ...navLink,
                      active: navLink.name === link.name
                    })));
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Phone Number */}
            <div className="hidden ml-5 md:flex items-center ">
              <a
                href="tel:+917066768334"
                className="font-bold transition-colors rounded"
                style={{
                  color: 'var(--foreground)',
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: 'var(--secondary)',
                  fontSize: '20px',
                  padding: '10px',
                  marginRight: '10px'
                }}
              >
                +91 7066768334
              </a>
               <a
                href="tel:+919762007743"
                className="font-bold transition-colors rounded"
                style={{
                  color: 'var(--foreground)',
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: 'var(--secondary)',
                  fontSize: '20px',
                  padding: '10px'
                }}
              >
                +91 9762007743
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: 'var(--primary-foreground)' }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden py-4 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              <nav className="flex flex-col space-y-4">
                {navLinksState.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setNavLinksState(navLinksState.map(navLink => ({
                        ...navLink,
                        active: navLink.name === link.name
                      })));
                    }}
                    className="text-sm font-semibold py-2 transition-colors uppercase"
                    style={{
                      color: link.active ? 'var(--secondary)' : 'var(--primary-foreground)',
                      fontFamily: 'var(--font-heading)',
                      opacity: link.active ? 1 : 0.85
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="tel:+917066768334"
                  className="text-base font-bold mt-4"
                  style={{
                    color: 'var(--foreground)',
                    backgroundColor: 'var(--secondary)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  +91 7066768334
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url("\gallery_6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          paddingTop: '80px'
        }}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 80, 33, 0.35) 0%, rgba(30, 55, 15, 0.39) 50%, rgba(27, 70, 25, 0.39) 100%)'
          }}
        ></div>

        {/* Content */}
        <div className="container px-6 py-20 relative z-10 mt-15">
          <div className="max-w-2xl space-y-8 scroll-fade">
            {/* Top Badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--foreground)',
              }}
            >
              <span
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                MOUZA SUMTHANA
              </span>

            </div>

            {/* Main Heading */}
            <h1
              className="font-bold leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '0.9',
                letterSpacing: '0.01em',
                color: 'var(--primary-foreground)'
              }}
            >
             Mahalaxmi Nagar - 45
            </h1>

              {/* Stats Row */}
            <div
              className={`transition-all duration-700 delay-600 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8 sm:mt-12 max-w-3xl mx-auto ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9862b] mb-1">67+</div>
                <div className="text-xs sm:text-sm text-white/80">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9862b] mb-1">17000+</div>
                <div className="text-xs sm:text-sm text-white/80">Happy Clients</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a href="#faq_sec">
                <button
                  className="rounded hover:cursor-pointer font-bold tracking-wide transition-all hover:scale-105 shadow-lg uppercase"
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--foreground)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    padding: '16px 40px',
                  }}
                >
                  Enquire Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}