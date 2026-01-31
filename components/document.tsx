'use client';
import React, { useState } from 'react';
import { Download, ArrowRight, X } from 'lucide-react';

const documents = [
  {
    name: "BROCHURE",
    url: "https://mahalaxmiinfra.in/documents/property_documents/1769078680_doc_M-45 FINAL LEAFLET NEW_compressed (2) (1)_compressed-compressed.pdf"
  }
];

export default function DocumentsSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownloadClick = (doc) => {
    setSelectedDoc(doc);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        window.open(selectedDoc.url, '_blank');
        setFormData({ name: '', phone: '', email: '' });
        setShowModal(false);
        setSelectedDoc(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-fade">
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-96">
            <div className="flex gap-3 justify-start flex-col">
              <h3 
                className="text-4xl md:text-5xl leading-tight"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--tcolor)'
                }}
              >
                Documents
              </h3>
              <p 
                className="text-base font-normal leading-6 mt-2"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Access detailed insights and specifications by downloading our comprehensive project brochure.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-3/5 lg:pl-10">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: 'var(--secondary)' }}>
                  <th 
                    className="text-left text-base font-medium p-5 rounded-tl-3xl rounded-bl-3xl"
                    style={{ 
                      color: 'var(--primary-foreground)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    Document Name
                  </th>
                  <th 
                    className="text-left text-base font-medium p-5 rounded-tr-3xl rounded-br-3xl"
                    style={{ 
                      color: 'var(--primary-foreground)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr 
                    key={index} 
                    className="border-b"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <td 
                      className="p-5 font-medium"
                      style={{ 
                        color: 'var(--tcolor)',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {doc.name}
                    </td>
                    <td className="p-5">
                      <button
                        onClick={() => handleDownloadClick(doc)}
                        className="text-base hover:cursor-pointer font-medium flex items-center gap-2 border-b-2 transition-colors hover:scale-105"
                        style={{ 
                          borderColor: 'var(--tcolor)',
                          color: 'var(--tcolor)',
                          fontFamily: 'var(--font-sans)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--secondary)';
                          e.currentTarget.style.color = 'var(--secondary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--tcolor)';
                          e.currentTarget.style.color = 'var(--tcolor)';
                        }}
                      >
                        Download
                        <ArrowRight className="hover:cursor-pointer w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            className="rounded-lg max-w-md w-full p-6 relative shadow-xl"
            style={{ backgroundColor: 'var(--background)' }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 transition-colors"
              style={{ color: 'var(--muted-foreground)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--tcolor)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
            >
              <X className="w-6 h-6" />
            </button>

            <h3 
              className="text-2xl mb-2"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--tcolor)'
              }}
            >
              Download {selectedDoc?.name}
            </h3>
            <p 
              className="mb-6"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Please fill in your details to download the document
            </p>

            <div className="space-y-4">
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ 
                    color: 'var(--tcolor)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--tcolor)',
                    fontFamily: 'var(--font-sans)'
                  }}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ 
                    color: 'var(--tcolor)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  minLength={10}
                  maxLength={14}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--tcolor)',
                    fontFamily: 'var(--font-sans)'
                  }}
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ 
                    color: 'var(--tcolor)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--tcolor)',
                    fontFamily: 'var(--font-sans)'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--secondary-foreground)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit & Download'}
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}