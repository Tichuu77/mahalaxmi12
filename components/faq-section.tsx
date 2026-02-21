'use client';
import React, { useState } from 'react';
import { Plus, Minus, Send } from 'lucide-react';

const faqs = [
  {
    question: "Why Should I Invest In Luxury Plots In Nagpur?",
    answer: "Nagpur is rapidly growing with strong infrastructure and connectivity. Luxury plots in Nagpur offer flexibility for homebuyers and investors evaluating long-term land ownership, along with the option for flexible home construction in a well-connected corridor."
  },
  {
    question: "Is This Project Suitable For End-Use Or Only For Investment?",
    answer: "The project is ideal for both. Homebuyers benefit from luxury amenities and connectivity, while buyers benefit from planned amenities, connectivity, and early access to the enquiry phase."
  },
  {
    question: "Is This A Preferred Plotted Development Option In Nagpur?",
    answer: "Yes. Due to its location and infrastructure connectivity, it is considered a preferred option among buyers exploring well-planned plotted developments in Nagpur."
  },
  {
    question: "How Close Are The Plots Near MIHAN?",
    answer: "The project is strategically located, offering excellent connectivity to MIHAN, making these plots near MIHAN ideal for professionals, investors, and long-term homeowners."
  }
];

export default function FAQContactSection() {
  const [openIndex, setOpenIndex] = useState(2);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

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
          access_key: "857fa585-2a03-48fb-84c8-b0ebfac11be8", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          message: formData.message,
          subject: "New Property Inquiry - Nagpur Luxury Plots",
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
    <section className="py-16 md:py-24 bg-background" id="faq_sec">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 scroll-fade">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--tcolor)'
            }}
          >
            FAQ
          </h2>
          <p 
            className="text-lg md:text-xl"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Property FAQs – Everything You Need to Know
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  style={{ 
                    color: 'var(--primary-foreground)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  <span className="font-semibold text-base pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} />
                    ) : (
                      <Plus className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div 
                    className="px-5 pb-5 pt-2 leading-relaxed border-t"
                    style={{ 
                      backgroundColor: 'var(--background)',
                      color: 'var(--tcolor)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="rounded-lg p-8 shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="from_name" value="Nagpur Property Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="block font-semibold text-sm mb-2"
                    style={{ 
                      color: 'var(--secondary)',
                      fontFamily: 'var(--font-heading)'
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
                    className="w-full px-4 py-3 rounded border-0 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: 'var(--background)',
                      color: 'var(--tcolor)',
                      fontFamily: 'var(--font-sans)'
                    }}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label 
                    className="block font-semibold text-sm mb-2"
                    style={{ 
                      color: 'var(--secondary)',
                      fontFamily: 'var(--font-heading)'
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
                    className="w-full px-4 py-3 rounded border-0 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: 'var(--background)',
                      color: 'var(--tcolor)',
                      fontFamily: 'var(--font-sans)'
                    }}
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="block font-semibold text-sm mb-2"
                    style={{ 
                      color: 'var(--secondary)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border-0 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: 'var(--background)',
                      color: 'var(--tcolor)',
                      fontFamily: 'var(--font-sans)'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label 
                    className="block font-semibold text-sm mb-2"
                    style={{ 
                      color: 'var(--secondary)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border-0 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: 'var(--background)',
                      color: 'var(--tcolor)',
                      fontFamily: 'var(--font-sans)'
                    }}
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div>
                <label 
                  className="block font-semibold text-sm mb-2"
                  style={{ 
                    color: 'var(--secondary)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Special Requests
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border-0 focus:outline-none focus:ring-2 resize-none"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    color: 'var(--tcolor)',
                    fontFamily: 'var(--font-sans)'
                  }}
                  placeholder="Pickup and drop only nagpur city"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  background: 'var(--secondary)',
                  color: 'var(--background)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Submitted!' : 'Submit Inquiry'}
                <Send className="w-5 h-5" />
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
  );
}