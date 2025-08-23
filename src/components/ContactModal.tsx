"use client";

import React, { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  role: string;
  companyName: string;
  companyWebsite: string;
  companySize: string;
  revenueRange: string;
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
    role: '',
    companyName: '',
    companyWebsite: '',
    companySize: '',
    revenueRange: '',
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
      role: '',
      companyName: '',
      companyWebsite: '',
      companySize: '',
      revenueRange: '',
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
      <div className={`absolute right-0 top-0 h-full w-full sm:max-w-2xl bg-gray-100 p-4 sm:p-8 overflow-y-auto transform transition-transform duration-300 ease-out ${
        isAnimating ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-light text-gray-900">
            Let&apos;s scale your SEO
          </h3>
          <button
            onClick={handleClose}
            className="text-2xl sm:text-3xl text-gray-900 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            ✅ Thank you! Your inquiry has been submitted successfully. We&apos;ll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            ❌ There was an error submitting your form. Please try again or contact us directly.
          </div>
        )}

        {/* Form fields */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 text-gray-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name *"
              required
              disabled={isSubmitting}
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors disabled:opacity-50"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              type="email"
              required
              disabled={isSubmitting}
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors disabled:opacity-50"
            />
          </div>

          <input
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            placeholder="Enter role"
            disabled={isSubmitting}
            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors disabled:opacity-50"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter company name"
              disabled={isSubmitting}
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors disabled:opacity-50"
            />
            <input
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleInputChange}
              placeholder="Enter company website"
              type="url"
              disabled={isSubmitting}
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors disabled:opacity-50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <select 
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors disabled:opacity-50"
            >
              <option value="">Select company size</option>
              <option value="1-10 employees">1-10 employees</option>
              <option value="11-50 employees">11-50 employees</option>
              <option value="51-200 employees">51-200 employees</option>
              <option value="201-500 employees">201-500 employees</option>
              <option value="500+ employees">500+ employees</option>
            </select>
            <select 
              name="revenueRange"
              value={formData.revenueRange}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors disabled:opacity-50"
            >
              <option value="">Select revenue range</option>
              <option value="$0 - $1M">$0 - $1M</option>
              <option value="$1M - $10M">$1M - $10M</option>
              <option value="$10M - $50M">$10M - $50M</option>
              <option value="$50M - $100M">$50M - $100M</option>
              <option value="$100M+">$100M+</option>
            </select>
          </div>

          <select 
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors disabled:opacity-50"
          >
            <option value="">Select service</option>
            <option value="Complete SEO Audit & Strategy">Complete SEO Audit & Strategy</option>
            <option value="AI-Powered Content Optimization">AI-Powered Content Optimization</option>
            <option value="Technical SEO & Site Performance">Technical SEO & Site Performance</option>
            <option value="Link Building & Authority Growth">Link Building & Authority Growth</option>
            <option value="Local SEO & Maps Optimization">Local SEO & Maps Optimization</option>
            <option value="Enterprise SEO Management">Enterprise SEO Management</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter message"
            rows={4}
            disabled={isSubmitting}
            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none resize-none transition-colors disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isSubmitting || !validateForm()}
            className="w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send inquiry'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;