"use client";

import React, { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

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
    // Wait for animation to complete before actually closing
    setTimeout(() => onClose(), 300);
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

        {/* Form fields */}
        <form className="space-y-4 sm:space-y-6 text-gray-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              placeholder="Name"
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors"
            />
            <input
              placeholder="Email"
              type="email"
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors"
            />
          </div>

          <input
            placeholder="Enter role"
            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              placeholder="Enter company name"
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors"
            />
            <input
              placeholder="Enter company website"
              type="url"
              className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <select className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors">
              <option>Select company size</option>
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>201-500 employees</option>
              <option>500+ employees</option>
            </select>
            <select className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors">
              <option>Select revenue range</option>
              <option>$0 - $1M</option>
              <option>$1M - $10M</option>
              <option>$10M - $50M</option>
              <option>$50M - $100M</option>
              <option>$100M+</option>
            </select>
          </div>

          <select className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none transition-colors">
            <option>Select service</option>
            <option>Complete SEO Audit & Strategy</option>
            <option>AI-Powered Content Optimization</option>
            <option>Technical SEO & Site Performance</option>
            <option>Link Building & Authority Growth</option>
            <option>Local SEO & Maps Optimization</option>
            <option>Enterprise SEO Management</option>
            <option>Other</option>
          </select>

          <textarea
            placeholder="Enter message"
            rows={4}
            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none resize-none transition-colors"
          ></textarea>

          <button
            type="submit"
            className="w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;