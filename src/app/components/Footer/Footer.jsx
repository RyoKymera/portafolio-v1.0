import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-10xl mx-auto px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-sans">© 2025 Diego O. Mateus.</p>
        
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/diego-o-mateus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-quaternary hover:text-tertiary transition-colors duration-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/RyoKymera"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-quaternary hover:text-tertiary transition-colors duration-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/diegoo.mateus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-quaternary hover:text-tertiary transition-colors duration-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
