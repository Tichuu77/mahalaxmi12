'use client';
import { title } from 'process';
import React from 'react';

const amenities = [
  // ===== EXISTING AMENITIES =====

  {
    title: "BASKETBALL COURT",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <circle cx="32" cy="32" r="14" stroke="white" stroke-width="3" fill="none"/>
        <path d="M4 32h56M32 4v56" stroke="white" stroke-width="3"/>
      </svg>
    `
  },
  {
    title: "SKATING RING",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <ellipse cx="32" cy="32" rx="18" ry="12" stroke="white" stroke-width="2" fill="none"/>
        <path d="M20 28c-2-4-2-8 0-12" stroke="white" stroke-width="2"/>
        <path d="M44 28c2-4 2-8 0-12" stroke="white" stroke-width="2"/>
      </svg>
    `
  },
  {
    title: "MEDITATION CENTER",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <circle cx="32" cy="20" r="4" fill="white"/>
        <path d="M18 42c4-6 24-6 28 0" stroke="white" stroke-width="3" fill="none"/>
        <path d="M24 32l8 4 8-4" stroke="white" stroke-width="2" fill="none"/>
      </svg>
    `
  },
  {
    title: "KIDS PLAY AREA",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <path d="M20 14v36M20 14h24l-16 18" stroke="white" stroke-width="3" fill="none"/>
        <path d="M16 50h20" stroke="white" stroke-width="3"/>
      </svg>
    `
  },
  {
    title: "CLUB HOUSE",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <path d="M18 30l14-10 14 10" stroke="white" stroke-width="3"/>
        <rect x="22" y="30" width="20" height="16" stroke="white" stroke-width="3" fill="none"/>
        <path d="M28 46v-8h8v8" stroke="white" stroke-width="3"/>
      </svg>
    `
  },
  {
    title: "GYMNASIUM",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <path d="M18 32h28" stroke="white" stroke-width="4"/>
        <path d="M14 26v12M50 26v12" stroke="white" stroke-width="4"/>
        <path d="M22 24v16M42 24v16" stroke="white" stroke-width="4"/>
      </svg>
    `
  },
  {
    title: "AMPHITHEATER",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <path d="M18 38c6-6 22-6 28 0" stroke="white" stroke-width="3"/>
        <path d="M22 32c4-4 16-4 20 0" stroke="white" stroke-width="3"/>
        <path d="M26 26c3-3 9-3 12 0" stroke="white" stroke-width="3"/>
      </svg>
    `
  },
  {
    title: "LIBRARY",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <rect x="20" y="16" width="6" height="32" stroke="white" stroke-width="3" fill="none"/>
        <rect x="29" y="16" width="6" height="32" stroke="white" stroke-width="3" fill="none"/>
        <rect x="38" y="16" width="6" height="32" stroke="white" stroke-width="3" fill="none"/>
      </svg>
    `
  },
  {
    title: "LAWN",
    svg: `
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d"/>
        <path d="M32 48V20" stroke="white" stroke-width="3"/>
        <path d="M32 22c-8 6-10 10-10 16" stroke="white" stroke-width="3"/>
        <path d="M32 22c8 6 10 10 10 16" stroke="white" stroke-width="3"/>
      </svg>
    `
  }
];

export default function LuxuryAmenities() {
  return (
    <section className="min-h-screen py-16 px-4" id="amenities">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl text-black font-bold mb-4">Luxury Living Features</h1>
          <p className="text-lg text-gray-500">
            Experience the extraordinary with our signature waterfront lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 border hover:shadow-xl transition-all text-center"
            >
              <div
                className="w-16 h-16 mx-auto mb-6 [&_svg]:w-full [&_svg]:h-full"
                dangerouslySetInnerHTML={{ __html: amenity.svg }}
              />
              <h3 className="font-semibold text-lg text-gray-800">{amenity.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
