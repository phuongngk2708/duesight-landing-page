import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  const baseColor = light ? 'text-white' : 'text-brand-dark';
  
  return (
    <div className={`inline-flex items-center font-extrabold text-2xl tracking-tighter select-none ${className}`} aria-label="DueSight">
      <span className="text-brand-orange">Due</span>
      <span className={baseColor}>S</span>
      <span className={`relative ${baseColor}`}>
        ı
        <span className="absolute left-1/2 -translate-x-1/2 top-[0.14em] w-[0.24em] h-[0.24em] bg-brand-green rounded-full" />
      </span>
      <span className={baseColor}>ght</span>
    </div>
  );
};