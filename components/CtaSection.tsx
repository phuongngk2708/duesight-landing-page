import React from 'react';
import { SignupForm } from './SignupForm';

export const CtaSection: React.FC = () => {
  return (
    <section id="early-access" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto bg-orange-50 rounded-3xl p-8 md:p-16 border border-orange-100 text-center relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none mix-blend-multiply"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Be the first to know
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Join the waitlist for early access and exclusive pricing when we launch.
          </p>
          
          <div className="w-full flex justify-center">
            <SignupForm id="footer-form" variant="dark" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};