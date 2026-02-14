'use client';
import React, { useState } from 'react';
import { Phone } from 'lucide-react';

export default function AboutSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3582cb02-f89e-44e7-9e8a-8e4cd2ac7619", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          message: formData.message,
          subject: "New Property Inquiry - Mahalaxmi Nagar 45",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* About Section */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--background)' }}
        id='overview'
      >
        <div className="px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-6 scroll-fade">
              <div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--primary)',
                    lineHeight: '1.2'
                  }}
                >
                  Where Elite Living Meets Exceptional Growth.
                </h2>
              </div>

              <div className="space-y-4 leading-relaxed">
                <p
                  className="text-base md:text-lg"
                  style={{
                    color: 'var(--muted-foreground)',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  Experience the pinnacle of urban planning at Mahalaxmi Nagar 45. This isn't just a layout; it's a canvas for your dreams. Designed for those who seek exclusivity, our NIT/NMRDA sanctioned plots offer:
                </p>
                <p
                  className="text-base md:text-lg"
                  style={{
                    color: 'var(--muted-foreground)',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  Premium Security: Gated community with elegant perimeter fencing.
                </p>

                <p
                  className="text-base md:text-lg"
                  style={{
                    color: 'var(--muted-foreground)',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  Green Living: Lush plantations and meticulously curated landscapes.
                </p>

                <p
                  className="text-base md:text-lg"
                  style={{
                    color: 'var(--muted-foreground)',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  Peace of Mind: Full RL (Release Letter) compliance with up to 80% funding from top-tier nationalized banks.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div
              className="rounded-lg shadow-2xl p-8 scroll-fade"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="from_name" value="Mahalaxmi Nagar 45 Website" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      className="block font-semibold mb-2 text-sm"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--secondary)'
                      }}
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border-2 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                      style={{
                        backgroundColor: 'var(--background)',
                        color: 'var(--tcolor)',
                        borderColor: 'transparent'
                      }}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      className="block font-semibold mb-2 text-sm"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--secondary)'
                      }}
                    >
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      minLength={10}
                      maxLength={14}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border-2 focus:outline-none transition-colors"
                      placeholder="+91 XXXXXXXXXX"
                      style={{
                        backgroundColor: 'var(--background)',
                        color: 'var(--tcolor)',
                        borderColor: 'transparent'
                      }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label
                      className="block font-semibold mb-2 text-sm"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--secondary)'
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border-2 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      style={{
                        backgroundColor: 'var(--background)',
                        color: 'var(--tcolor)',
                        borderColor: 'transparent'
                      }}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label
                      className="block font-semibold mb-2 text-sm"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--secondary)'
                      }}
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border-2 focus:outline-none transition-colors"
                      placeholder="Your city"
                      style={{
                        backgroundColor: 'var(--background)',
                        color: 'var(--tcolor)',
                        borderColor: 'transparent'
                      }}
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    className="block font-semibold mb-2 text-sm"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--secondary)'
                    }}
                  >
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded border-2 focus:outline-none transition-colors resize-none"
                    placeholder="Pickup and drop only nagpur city"
                    style={{
                      backgroundColor: 'var(--background)',
                      color: 'var(--tcolor)',
                      borderColor: 'transparent'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hover:cursor-pointer md:w-auto px-8 py-3 rounded font-bold transition-all hover:scale-105 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--background)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Submitted!' : 'Submit Inquiry'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center font-semibold">Thank you! We'll contact you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center font-semibold">Failed to submit. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+917304702424"
          className="p-4 rounded-full shadow-2xl transition-all hover:scale-110"
          style={{ backgroundColor: 'var(--primary)' }}
          aria-label="Call us"
        >
          <Phone
            className="w-6 h-6"
            style={{ color: 'var(--primary-foreground)' }}
          />
        </a>
        <a
          href="https://wa.me/917304702424"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full shadow-2xl transition-all hover:scale-110"
          style={{ backgroundColor: 'var(--secondary)' }}
          aria-label="WhatsApp us"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ color: 'var(--accent-foreground)' }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}