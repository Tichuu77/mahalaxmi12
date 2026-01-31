'use client';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { id: 1, src: "/gallery_9.jpg", alt: "Entry Court" },
  { id: 2, src: "/gallery_2.jpg", alt: "Top View" },
  { id: 3, src: "/gallery_10.jpg", alt: "Basketball" },
  { id: 4, src: "/gallery_8.jpg", alt: "Garden" },
  { id: 5, src: "/gallery_5.jpg", alt: "Morning View" },
  { id: 6, src: "/gallery_6.jpg", alt: "Walking Path" },
  { id: 7, src: "/gallery_4.jpg", alt: "Nature View" },
  { id: 8, src: "/gallery_7.jpg", alt: "Water Feature" },
];

export default function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (selectedId === null) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedId);
    const newIndex = direction === 'prev'
      ? (currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1)
      : (currentIndex + 1) % galleryItems.length;
    setSelectedId(galleryItems[newIndex].id);
  };

  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--background)' }}
      id='gallery'
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
            Our Gallery
          </h2>
          <p 
            className="text-lg md:text-xl"
            style={{
              color: 'var(--muted-foreground)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Where Luxury Meets Timeless Design
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 scroll-fade"
              onClick={() => setSelectedId(item.id)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <svg 
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--accent-foreground)' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems.find((item) => item.id === selectedId)?.src}
              alt={galleryItems.find((item) => item.id === selectedId)?.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors backdrop-blur-sm"
              style={{ backgroundColor: 'var(--secondary)' }}
              aria-label="Previous"
            >
              <ChevronLeft 
                size={28}
                style={{ color: 'var(--background)' }}
              />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors backdrop-blur-sm"
              style={{ backgroundColor: 'var(--secondary)' }}
              aria-label="Next"
            >
              <ChevronRight 
                size={28}
                style={{ color: 'var(--background)' }}
              />
            </button>

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 p-2 rounded-full transition-colors backdrop-blur-sm"
              style={{ backgroundColor: 'var(--secondary)' }}
              aria-label="Close"
            >
              <X 
                size={28}
                style={{ color: 'var(--background)' }}
              />
            </button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md rounded-lg p-4"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              <p 
                className="font-semibold text-lg"
                style={{
                  color: 'var(--background)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {galleryItems.find((item) => item.id === selectedId)?.alt}
              </p>
            </div>
          </div>
        </div>
      )}
      <a href="#faq_sec">
      <button 
        className="mt-12 hover:cursor-pointer mx-auto block px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
        style={{
          backgroundColor: 'var(--secondary)',
          color: 'var(--accent-foreground)',
          fontFamily: 'var(--font-heading)'
        }}
      >
        Explore More 
      </button>
      </a>
    </section>
  );
}