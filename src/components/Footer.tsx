"use client";

import React from "react";

interface FooterProps {
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-gray-800 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-xl mb-3">Dev Chords</h3>
            <p className="text-gray-400 text-sm">
              Custom web solutions that captivate users and drive results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Integration</li>
              <li>Full-Stack Solutions</li>
              <li>E-commerce</li>
              <li>SEO & GEO</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/dan-danilescu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-gray-400 hover:text-accent transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Dev Chords. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built to perform. Designed to impress.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
