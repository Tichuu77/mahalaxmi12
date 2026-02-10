'use client';
import React from 'react';

export default function VirtualTourHero() {
  const handleBookTour = () => {
    const formElement = document.getElementById('lead_form_2');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center py-20 px-4"
      style={{
        backgroundImage: 'url("\gallery_2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), transparent)',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl scroll-fade">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase tracking-wide"
            style={{
              color: 'var(--secondary)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Living Spaces in Nagpur's Premier Area
          </h1>
          
          <div className="space-y-4 mb-8">
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{
                color: 'var(--primary-foreground)',
                fontFamily: 'var(--font-sans)'
              }}
            >
             Explore the project in detail from the comfort of your home. Experience the layout, infrastructure planning, and key highlights through an immersive, interactive view.
            </p>
            
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{
                color: 'var(--primary-foreground)',
                fontFamily: 'var(--font-sans)'
              }}
            >
              Ideal for outstation buyers and busy professionals looking to make informed 
              decisions with confidence.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex">
            <button
              onClick={handleBookTour}
              className="group relative px-8 py-4 rounded-lg font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                background: 'var(--secondary)',
                color: 'var(--accent-foreground)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              <a href='#faq_sec' className="relative z-10">Book a Virtual Tour</a>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to right, var(--secondary), var(--secondary))'
                }}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}