import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo className="scale-90" />
        
        <div className="text-sm text-gray-500 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span>&copy; 2026 DueSight. All rights reserved.</span>
          <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
          <a href="mailto:hello@tryduesight.com" className="hover:text-brand-orange transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};