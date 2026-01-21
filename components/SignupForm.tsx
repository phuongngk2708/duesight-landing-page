import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SignupFormProps {
  id: string;
  className?: string;
  buttonText?: string;
  variant?: 'light' | 'dark';
}

export const SignupForm: React.FC<SignupFormProps> = ({ 
  id, 
  className = "", 
  buttonText = "Get early access",
  variant = 'dark'
}) => {
  const [email, setEmail] = useState('');

  // ConvertKit Form Action URL
  const formAction = "https://app.kit.com/forms/8992889/subscriptions";

  const isLight = variant === 'light';

  return (
    <form 
      action={formAction}
      method="POST"
      className={`w-full max-w-md ${className}`}
      data-sv-form="8992889"
      data-uid="b31d3faaa6"
      data-format="inline"
      data-version="5"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <input
            type="email"
            name="email_address"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all outline-none ${
              isLight 
                ? 'bg-white/10 border-white/10 text-white placeholder:text-gray-400 focus:ring-brand-orange/50 focus:border-brand-orange/50' 
                : 'bg-white border-gray-200 text-gray-900 focus:border-brand-orange focus:ring-brand-orange/20'
            }`}
          />
        </div>
        <button
          type="submit"
          className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all transform active:scale-95 text-white shadow-lg ${
            isLight
              ? 'bg-brand-orange hover:bg-orange-600 shadow-orange-500/20'
              : 'bg-brand-orange hover:bg-orange-600 shadow-orange-500/20'
          }`}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <p className={`mt-3 text-xs flex items-center gap-1.5 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
        <CheckCircle2 className={`w-3 h-3 ${isLight ? 'text-brand-green' : 'text-brand-green'}`} />
        <span>No spam. Unsubscribe anytime.</span>
      </p>
    </form>
  );
};