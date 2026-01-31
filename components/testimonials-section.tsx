'use client';
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Amit Deshmukh",
    role: "IT Professional, Nagpur",
    rating: 5,
    text: "I was looking for luxury plots in Nagpur with strong long-term value potential, and this project matched my expectations well. The location, waterfront concept, and amenities make it a premium plotted development in Nagpur for long-term investment."
  },
  {
    id: 2,
    name: "Neha Kulkarni",
    role: "Business Owner",
    rating: 5,
    text: "What stood out for me was the planning and the brand trust. Investing here feels secure and future-ready. For anyone exploring premium plots in Nagpur with lifestyle value, this project is worth considering."
  },
  {
    id: 3,
    name: "Rahul Patil",
    role: "NRI Investor",
    rating: 5,
    text: "I was looking for a well-planned real estate option in Nagpur, and this project covers all the key factors—location, connectivity, and luxury. It's rare to find such exclusive plotted developments in Nagpur at a pre-market stage."
  }
];

export default function TestimonialsSection() {
  return (
    <section 
      className="py-16 md:py-24"
     id='testimonials'
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 scroll-fade">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--tcolor)'
            }}
          >
            Testimonials
          </h2>
          <p 
            className="text-lg md:text-xl"
            style={{
              color: 'var(--muted-foreground)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Trusted Reviews from Our Happy Customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 pt-12 scroll-fade"
              style={{ backgroundColor: 'var(--background)' }}
            >
              {/* Quote Mark */}
              <div className="absolute top-0 right-6 -translate-y-1/2">
                <div 
                  className="w-16 h-16 rounded-bl-3xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--secondary)' }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--background)' }}
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
              </div>

              {/* Customer Info */}
              <div className="mb-4">
                <h3 
                  className="text-xl font-bold mb-1"
                  style={{
                    color: 'var(--tcolor)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {testimonial.name}
                </h3>
                <p 
                  className="text-sm font-medium"
                  style={{
                    color: 'var(--secondary)',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  {testimonial.role}
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: 'var(--secondary)' }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p 
                className="leading-relaxed"
                style={{
                  color: 'var(--muted-foreground)',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button 
            className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              backgroundColor: 'var(--secondary)',
              color: 'var(--accent-foreground)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
}