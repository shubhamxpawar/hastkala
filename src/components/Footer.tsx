import React, { useState } from 'react';
import { Mail, ArrowRight, Github, Globe, Heart } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNav = (view: ViewState) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper ink-border border-b-0 border-x-0 mt-16 pt-16 pb-8 px-4 md:px-8 crosshatch">
      <div className="max-w-7xl mx-auto">
        
        {/* Newsletter Section: "Join our Folk Circle" */}
        <div className="wobbly-border bg-chalk p-8 md:p-12 mb-16 relative overflow-hidden hard-shadow max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-24 h-24 bg-clay/10 rounded-full blur-2xl"></div>
          
          <div className="text-center max-w-xl mx-auto relative z-10">
            <span className="font-accent text-clay text-lg font-bold">The Folk Circle</span>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-ink mt-2">
              Join Our Slow Craft Journal
            </h3>
            <p className="font-body text-sm text-ink/75 mt-3 leading-relaxed">
              We send dispatch emails directly from artisan villages once a month. No spam, just deep stories of dyes, woods, and clays.
            </p>

            {subscribed ? (
              <div className="mt-6 p-3 bg-indigo/10 border-2 border-indigo text-indigo font-body text-sm font-semibold animate-pulse">
                ✓ You are in! Welcome to the folk family. First dispatch is on the next full moon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-paper ink-border focus:outline-none rounded-none text-ink text-sm font-body"
                  required
                />
                <button
                  type="submit"
                  className="bg-clay hover:bg-indigo text-paper font-accent font-bold px-6 py-3 flex items-center justify-center gap-2 transition-colors duration-300 ink-border shadow-[2px_3px_0px_0px_#1C1A14]"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Brand Information & Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-ink/10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 wobbly-border flex items-center justify-center bg-clay text-paper font-display text-xl font-bold">
                H
              </div>
              <span className="font-display text-2xl font-bold text-ink tracking-wide">
                हस्तकला
              </span>
            </div>
            <p className="font-body text-sm text-ink/85 max-w-sm leading-relaxed">
              Hastakala is an authentic, hand-drawn window into India’s slow-craft heritage. We bring master artisan works directly to your table, bypassing long corporate middle chains.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-ink/60 mt-2">
              <span>● Offline-first architecture</span>
              <span className="mx-1">•</span>
              <span>● Direct fair trade</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-xl font-bold text-ink border-b-2 border-clay pb-1 w-max">
              Shop Collections
            </h4>
            <div className="flex flex-col gap-2 font-body text-sm text-ink/75">
              <button onClick={() => handleNav('shop')} className="text-left hover:text-clay hover:underline">
                All Handlooms & Textiles
              </button>
              <button onClick={() => handleNav('shop')} className="text-left hover:text-clay hover:underline">
                Studio Pottery & Ceramics
              </button>
              <button onClick={() => handleNav('shop')} className="text-left hover:text-clay hover:underline">
                Walnut Wood Carvings
              </button>
              <button onClick={() => handleNav('shop')} className="text-left hover:text-clay hover:underline">
                Hand-beaten Brassware
              </button>
            </div>
          </div>

          {/* Col 3: Company & Values */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-xl font-bold text-ink border-b-2 border-clay pb-1 w-max">
              Our Journey
            </h4>
            <div className="flex flex-col gap-2 font-body text-sm text-ink/75">
              <button onClick={() => handleNav('about')} className="text-left hover:text-clay hover:underline">
                The Living Indigo Journal
              </button>
              <button onClick={() => handleNav('artisan')} className="text-left hover:text-clay hover:underline">
                Meet the Master Makers
              </button>
              <button onClick={() => handleNav('about')} className="text-left hover:text-clay hover:underline">
                Our Sourcing Manifesto
              </button>
              <span className="text-xs font-mono bg-clay/10 text-clay px-2 py-1 w-max ink-border">
                100% Authentic Provenance
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-mono text-ink/60 gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Hastakala. Made with</span>
            <Heart size={12} className="text-clay fill-clay animate-pulse" />
            <span>for generations of slow crafts.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-clay cursor-pointer">Sourcing Policy</span>
            <span>•</span>
            <span className="hover:text-clay cursor-pointer">Artisan Equity</span>
            <span>•</span>
            <span className="hover:text-clay cursor-pointer">Care Guide</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
