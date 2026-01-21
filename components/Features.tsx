import React from 'react';
import { BookOpen, Flag, Lock, Wallet, Scale } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "The Commitment Reality",
      description: "Understand exactly what you're legally binding yourself to for the next 7-10 years."
    },
    {
      icon: Lock,
      title: "Securities Exemptions",
      description: "Reg D, 3(c)(1), 3(c)(7) decoded into plain English. Know your investor status."
    },
    {
      icon: Wallet,
      title: "Capital Call Obligations",
      description: "Learn how drawdowns work, the timelines involved, and the severe penalties for defaulting."
    },
    {
      icon: Flag,
      title: "Red Flags Checklist",
      description: "A practical guide to the warning signs you should look for before applying your signature."
    },
    {
      icon: Scale,
      title: "LP Rights & Protections",
      description: "Know what protections you have (and don't have) as a limited partner."
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Section Header - Sticky on Desktop */}
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                What's inside DueSight?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We bridge the gap between complex legal documents and investor intuition. No legal jargon, just clear explanations.
              </p>
              <div className="hidden md:block h-1 w-20 bg-brand-orange rounded-full"></div>
            </div>
          </div>

          {/* Features List */}
          <div className="md:w-2/3 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-brand-green">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};