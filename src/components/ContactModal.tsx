"use client";

import React, { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  companyName: string;
  serviceInterest: string;
  message: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    companyName: '',
    serviceInterest: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      // Trigger animation after component mounts
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setSubmitStatus('idle');
    // Reset form when closing
    setFormData({
      name: '',
      email: '',
      companyName: '',
      serviceInterest: '',
      message: ''
    });
    // Wait for animation to complete before actually closing
    setTimeout(() => onClose(), 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.email.includes('@');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fill in all required fields (Name and Email)');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitStatus('success');
        
        // Close modal after 3 seconds
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isAnimating ? 'bg-opacity-50' : 'bg-opacity-0'
        }`}
        onClick={handleClose}
      ></div>
      <div className={`absolute right-0 top-0 h-full w-full sm:max-w-2xl bg-black/95 backdrop-blur-md border-l border-white/10 p-4 sm:p-8 overflow-y-auto transform transition-transform duration-300 ease-out ${
        isAnimating ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-light text-white">
            Let&apos;s build something great
          </h3>
          <button
            onClick={handleClose}
            className="text-2xl sm:text-3xl text-white hover:text-accent transition-colors"
          >
            ×
          </button>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-accent/20 border border-accent/50 text-accent rounded-lg backdrop-blur-sm">
            ✅ Thank you! Your message has been sent. I&apos;ll get back to you within 24 hours.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg backdrop-blur-sm">
            ❌ There was an error sending your message. Please try again or contact me directly.
          </div>
        )}

        {/* Form fields */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name *"
              required
              disabled={isSubmitting}
              className="w-full p-3 border-b border-white/20 bg-transparent text-white placeholder:text-gray-400 focus:border-accent outline-none transition-colors disabled:opacity-50"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              type="email"
              required
              disabled={isSubmitting}
              className="w-full p-3 border-b border-white/20 bg-transparent text-white placeholder:text-gray-400 focus:border-accent outline-none transition-colors disabled:opacity-50"
            />
          </div>

          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company / Project name (optional)"
            disabled={isSubmitting}
            className="w-full p-3 border-b border-white/20 bg-transparent text-white placeholder:text-gray-400 focus:border-accent outline-none transition-colors disabled:opacity-50"
          />

          <select
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full p-3 border-b border-white/20 bg-black text-white placeholder:text-gray-400 focus:border-accent outline-none transition-colors disabled:opacity-50"
          >
            <option value="" className="bg-black text-gray-400">Select service</option>
            <option value="Web Development" className="bg-black text-white">Web Development</option>
            <option value="Mobile App Development" className="bg-black text-white">Mobile App Development</option>
            <option value="AI Integration" className="bg-black text-white">AI Integration</option>
            <option value="Full-Stack Development" className="bg-black text-white">Full-Stack Development</option>
            <option value="E-commerce Solutions" className="bg-black text-white">E-commerce Solutions</option>
            <option value="SEO & GEO Optimization" className="bg-black text-white">SEO & GEO Optimization</option>
            <option value="Technical Consulting" className="bg-black text-white">Technical Consulting</option>
            <option value="Other" className="bg-black text-white">Other</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter message"
            rows={4}
            disabled={isSubmitting}
            className="w-full p-3 border-b border-white/20 bg-transparent text-white placeholder:text-gray-400 focus:border-accent outline-none resize-none transition-colors disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isSubmitting || !validateForm()}
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-lg font-semibold text-black bg-accent rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="relative z-10 flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                  →
                </span>
              </span>
            )}
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;