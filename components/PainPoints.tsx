import React from 'react';
import { AlertCircle, FileWarning, HelpCircle, CheckSquare } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const points = [
    {
      icon: FileWarning,
      text: "Staring at 50+ pages of dense legal jargon without a law degree."
    },
    {
      icon: CheckSquare,
      text: "Checking boxes blindly without truly understanding the commitment."
    },
    {
      icon: HelpCircle,
      text: "Wondering what terms like 'qualified purchaser' or '3(c)(7)' actually imply."
    },
    {
      icon: AlertCircle,
      text: "Worrying that you're missing a critical red flag hidden in the footnotes."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Sound familiar?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Investing in Private Equity is complex enough. The paperwork shouldn't be the hardest part.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="flex-shrink-0 p-3 bg-orange-50 rounded-xl">
                <point.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <p className="text-gray-700 font-medium text-lg leading-snug pt-2">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};