import React from 'react';
import { SignupForm } from './SignupForm';
import { ShieldCheck, FileSearch, Scale } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden mesh-gradient text-white pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
      {/* Abstract Geometric Shapes for background interest */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-orange text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            Coming Soon
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Finally understand PE subscription documents <span className="text-brand-orange">before you sign</span><span className="text-brand-green">.</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Plain-English guidance for first-time private equity investors. Stop signing documents you don't fully understand and gain confidence in your commitment.
          </p>
          
          <SignupForm id="hero-form" variant="light" />
        </div>

        {/* Right Visual - Abstract Representation of Document Clarity */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-full max-w-md aspect-[4/5] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            {/* Document Header */}
            <div className="h-4 w-1/3 bg-white/10 rounded mb-8 animate-pulse"></div>
            
            {/* Document Lines (Blurred/Confusing) */}
            <div className="space-y-4 mb-8 opacity-30">
              <div className="h-2 w-full bg-white rounded"></div>
              <div className="h-2 w-5/6 bg-white rounded"></div>
              <div className="h-2 w-full bg-white rounded"></div>
              <div className="h-2 w-4/6 bg-white rounded"></div>
            </div>

            {/* Clarity Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-brand-dark/95 backdrop-blur-md p-6 rounded-xl border border-brand-green/30 shadow-xl max-w-[280px]">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-green/20 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Capital Calls Decoded</h3>
                    <p className="text-sm text-gray-400">Know exactly when and how much you're obligated to fund.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 p-4 bg-gray-800 rounded-xl shadow-lg border border-white/10 animate-bounce" style={{ animationDuration: '3s' }}>
               <FileSearch className="w-6 h-6 text-brand-orange" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-gray-800 rounded-xl shadow-lg border border-white/10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
               <Scale className="w-6 h-6 text-brand-orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};