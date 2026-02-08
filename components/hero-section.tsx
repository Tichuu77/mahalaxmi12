'use client';
import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 backdrop-blur-sm"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <img 
                    src="/Malaxmi-Final-Logo.-2png.png" 
                    alt="Mahalaxmi Nagar Logo" 
                    className="w-32 h-auto sm:w-40 md:w-45 object-contain" 
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinksState.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold transition-colors uppercase tracking-wide hover:opacity-100"
                  style={{
                    color: link.active ? 'var(--secondary)' : 'var(--primary-foreground)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(16px, 1.2vw, 20px)',
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

            {/* Phone Numbers - Desktop */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 ml-4 xl:ml-6">
              <a
                href="tel:+917304702424"
                className="font-bold transition-all hover:scale-105 rounded whitespace-nowrap"
                style={{
                  color: 'var(--foreground)',
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: 'var(--secondary)',
                  fontSize: 'clamp(14px, 1.1vw, 18px)',
                  padding: '8px 12px'
                }}
              >
                +91 7304702424
              </a>
              <a
                href="tel:+919762007743"
                className="font-bold transition-all hover:scale-105 rounded whitespace-nowrap"
                style={{
                  color: 'var(--foreground)',
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: 'var(--secondary)',
                  fontSize: 'clamp(14px, 1.1vw, 18px)',
                  padding: '8px 12px'
                }}
              >
                +91 9762007743
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
              style={{ color: 'var(--primary-foreground)' }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden py-4 border-t mt-2 animate-fadeIn"
              style={{ 
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}
            >
              <nav className="flex flex-col space-y-1">
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
                    className="text-base sm:text-lg font-semibold py-3 px-4 transition-all uppercase rounded touch-manipulation hover:bg-white/10"
                    style={{
                      color: link.active ? 'var(--secondary)' : 'var(--primary-foreground)',
                      fontFamily: 'var(--font-heading)',
                      opacity: link.active ? 1 : 0.9
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Phone Numbers in Mobile Menu */}
                <div className="flex flex-col gap-3 mt-4 px-4">
                  <a
                    href="tel:+917304702424"
                    className="text-base sm:text-lg font-bold py-3 px-4 rounded text-center touch-manipulation transition-transform hover:scale-105"
                    style={{
                      color: 'var(--foreground)',
                      backgroundColor: 'var(--secondary)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    +91 7304702424
                  </a>
                  <a
                    href="tel:+919762007743"
                    className="text-base sm:text-lg font-bold py-3 px-4 rounded text-center touch-manipulation transition-transform hover:scale-105"
                    style={{
                      color: 'var(--foreground)',
                      backgroundColor: 'var(--secondary)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    +91 9762007743
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url("/gallery_6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
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
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Top Badge */}
            

            {/* Main Heading */}
            <h1
              className="font-bold leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                lineHeight: '1.1',
                letterSpacing: '0.01em',
                color: 'var(--primary-foreground)'
              }}
            >
              Mahalaxmi Nagar - 45
            </h1>

            {/* Stats Row */}
            <div
              className={`transition-all duration-700 delay-300 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white/10  border border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                <div 
                  className="font-bold mb-1 sm:mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    color: '#C9862b',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  70+
                </div>
                <div 
                  className="text-white/80"
                  style={{
                    fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Projects
                </div>
              </div>
              
              <div className="bg-white/10  border border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                <div 
                  className="font-bold mb-1 sm:mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    color: '#C9862b',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  17000+
                </div>
                <div 
                  className="text-white/80"
                  style={{
                    fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Happy Clients
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a href="#faq_sec">
                <button
                  className="rounded hover:cursor-pointer font-bold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg uppercase w-full sm:w-auto touch-manipulation"
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--foreground)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(13px, 2.5vw, 16px)',
                    padding: '14px 32px',
                  }}
                >
                  Enquire Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Improve scroll behavior on mobile */
        @media (max-width: 768px) {
          section {
            background-attachment: scroll !important;
          }
        }

        /* Ensure touch targets are large enough */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
}