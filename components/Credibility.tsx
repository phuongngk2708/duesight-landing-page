import React from 'react';
import { Award } from 'lucide-react';

export const Credibility: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6">
          <Award className="w-6 h-6 text-brand-orange" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          Real knowledge, not generic advice.
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          "Built by someone with 8+ years of private equity operations experience. I created DueSight because I've seen too many smart investors get confused by standard industry documentation."
        </p>
      </div>
    </section>
  );
};