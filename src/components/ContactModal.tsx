"use client";

import React from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-gray-100 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-light text-gray-900">
            Tell us where you're at
          </h3>
          <button
            onClick={onClose}
            className="text-3xl text-gray-900 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {/* Form fields */}
        <form className="space-y-6 text-gray-900">
          <div className="grid md:grid-cols-2 gap-6">
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

          <div className="grid md:grid-cols-2 gap-6">
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

          <div className="grid md:grid-cols-2 gap-6">
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
            <option>AI Strategy Consulting</option>
            <option>AI Training & Education</option>
            <option>Custom AI Development</option>
            <option>AI Implementation Support</option>
            <option>Other</option>
          </select>

          <textarea
            placeholder="Enter message"
            rows={4}
            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-gray-900 outline-none resize-none transition-colors"
          ></textarea>

          <button
            type="submit"
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;