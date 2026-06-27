import React, { useState } from 'react';
import { ArrowRight, Star, Compass, User, RefreshCw, Feather } from 'lucide-react';
import { Product, Artisan } from '../types';
import { PRODUCTS, ARTISANS } from '../data';

interface HomeViewProps {
  setView: (view: 'home' | 'shop' | 'product' | 'artisan' | 'about') => void;
  setSelectedProductId: (id: string) => void;
  setSelectedArtisanId: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setView,
  setSelectedProductId,
  setSelectedArtisanId,
}) => {
  const [activeArtisanIndex, setActiveArtisanIndex] = useState(0);

  // Take 4 curated products for the "Handpicked Treasures" grid
  const featuredProducts = PRODUCTS.slice(0, 4);
  const currentSpotlightArtisan = ARTISANS[activeArtisanIndex];

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArtisanClick = (id: string) => {
    setSelectedArtisanId(id);
    setView('artisan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextArtisan = () => {
    setActiveArtisanIndex((prev) => (prev + 1) % ARTISANS.length);
  };

  return (
    <div className="font-body text-ink">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 md:px-8 py-16 md:py-24 overflow-hidden crosshatch border-b border-ink/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-clay/15 text-clay px-3 py-1 text-xs font-mono font-bold ink-border rounded-none">
              <Compass size={14} className="animate-spin" />
              AUTHENTIC SLOW CRAFTS
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-ink">
              Where tradition <br />
              finds a <span className="squiggle-underline text-clay">market</span>
            </h1>
            
            <p className="text-base md:text-lg text-ink/80 max-w-xl leading-relaxed">
              Hastakala connects global connoisseurs with master local artisans. No synthetic intermediaries, no factory duplicates. Only pure, living materials and ancestral techniques.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <button
                id="hero-explore-btn"
                onClick={() => setView('shop')}
                className="bg-clay hover:bg-indigo text-paper font-accent font-bold text-lg px-8 py-3.5 transition-colors duration-300 ink-border shadow-[4px_6px_0px_0px_#1C1A14] flex items-center gap-2 group cursor-pointer"
              >
                Explore Crafts
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                id="hero-story-btn"
                onClick={() => setView('about')}
                className="bg-chalk hover:bg-paper text-ink font-body font-semibold px-6 py-3.5 transition-colors duration-300 ink-border flex items-center gap-2 cursor-pointer"
              >
                Our Sourcing Story
              </button>
            </div>
          </div>

          {/* Right Image Layout - Overlapping rustic cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[350px]">
            {/* Background wobbly panel */}
            <div className="absolute w-[80%] h-[80%] wobbly-border bg-clay/5 -rotate-3"></div>
            
            {/* Front main card */}
            <div className="relative w-[70%] z-10 wobbly-border overflow-hidden bg-chalk shadow-lg rotate-2 group hover:rotate-0 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600" 
                alt="Weaving loom close up" 
                className="w-full h-64 object-cover filter contrast-105"
              />
              <div className="p-3 bg-paper border-t-2 border-ink flex justify-between items-center">
                <div>
                  <h4 className="font-display text-lg font-bold text-ink">Aanya Sharma</h4>
                  <p className="font-mono text-[10px] text-ink/60">Varanasi Double-beam loom</p>
                </div>
                <span className="font-accent text-clay font-bold text-xs bg-clay/10 px-2 py-0.5 ink-border">Weaving</span>
              </div>
            </div>

            {/* Back offset card */}
            <div className="absolute left-4 bottom-4 w-[50%] z-20 wobbly-border overflow-hidden bg-chalk shadow-md -rotate-12 hover:-rotate-6 transition-all duration-300 hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=400" 
                alt="Indigo Tall Vase" 
                className="w-full h-32 object-cover"
              />
              <div className="p-2 bg-paper border-t-2 border-ink text-center">
                <p className="font-accent text-xs font-bold text-ink">Studio Ceramics</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Category horizontal ticker marquee */}
      <section className="bg-ink text-paper py-4 border-y-2 border-ink overflow-hidden relative select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 font-accent text-xl font-bold tracking-wider">
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Shuttle Loom Weaving</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Cobalt Blue Ceramics</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Hand-beaten Brass</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Natural Indigo Dyeing</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Kashmir Walnut Carving</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Recycled Cotton Rag Papers</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Shuttle Loom Weaving</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Cobalt Blue Ceramics</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Hand-beaten Brass</span>
          <span className="cursor-pointer hover:text-clay" onClick={() => { setView('shop'); }}>✦ Natural Indigo Dyeing</span>
        </div>
      </section>

      {/* 3. Handpicked Treasures */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4">
          <div>
            <span className="font-accent text-clay text-lg font-bold">Curated Dispatches</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-1">Handpicked Treasures</h2>
          </div>
          <button
            onClick={() => setView('shop')}
            className="font-body text-sm font-bold text-ink hover:text-clay flex items-center gap-1 hover:underline group cursor-pointer"
          >
            Browse entire collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="bg-chalk wobbly-border p-4 flex flex-col cursor-pointer hard-shadow-hover relative group select-none"
            >
              {/* Product Status Label */}
              {product.status && (
                <span className={`absolute top-6 left-6 z-10 font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-ink ${
                  product.status === 'Sold out' ? 'bg-ink text-paper' : 'bg-turmeric text-ink'
                }`}>
                  {product.status}
                </span>
              )}

              {/* Product Image Panel with Hover Swap */}
              <div className="w-full h-64 overflow-hidden ink-border bg-paper relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.hoverImage && (
                  <img 
                    src={product.hoverImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
              </div>

              {/* Product Info */}
              <div className="mt-4 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-ink/65 mb-1">
                    <span>{product.category}</span>
                    <span>{product.region}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-clay transition-colors leading-snug">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-ink/20">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-clay text-clay" />
                    <span className="font-mono text-xs font-bold text-ink">{product.rating}</span>
                    <span className="text-[10px] text-ink/50">({product.reviewCount})</span>
                  </div>
                  <span className="font-mono text-base font-bold text-indigo">
                    {product.currency}{product.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Meet the Makers Spotlight */}
      <section className="bg-chalk ink-border border-x-0 py-16 md:py-24 px-4 md:px-8 crosshatch">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-accent text-clay text-xl font-bold">Unbroken Provenance</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-2">Meet the Handloom Masters</h2>
            <p className="font-body text-sm text-ink/75 max-w-md mx-auto mt-3">
              We operate without high-tech supply chains. Our craftsmen spin, shape, and chisel directly inside their rural workshops.
            </p>
          </div>

          {/* Maker Highlight block */}
          <div className="wobbly-border bg-paper p-8 md:p-12 hard-shadow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto relative">
            <div className="absolute top-4 right-4 bg-clay/5 text-clay text-xs font-mono px-3 py-1 ink-border rounded-none uppercase">
              Spotlight Maker
            </div>

            {/* Profile Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <div className="absolute inset-0 wobbly-border bg-indigo/10 translate-x-3 translate-y-3"></div>
                <div className="absolute inset-0 wobbly-border overflow-hidden bg-paper">
                  <img 
                    src={currentSpotlightArtisan.image} 
                    alt={currentSpotlightArtisan.name} 
                    className="w-full h-full object-cover filter brightness-[0.97] contrast-105"
                  />
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <span className="font-accent text-clay text-base font-bold">{currentSpotlightArtisan.role}</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">{currentSpotlightArtisan.name}</h3>
              <p className="font-mono text-xs text-ink/60 -mt-2">Based in {currentSpotlightArtisan.location}</p>
              
              <p className="font-body text-sm md:text-base text-ink/85 leading-relaxed mt-2 italic">
                "{currentSpotlightArtisan.bio}"
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {currentSpotlightArtisan.techniques.map((tech) => (
                  <span key={tech} className="font-mono text-[10px] text-indigo bg-indigo/5 border border-indigo/20 px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-ink/10 w-full">
                <button
                  onClick={() => handleArtisanClick(currentSpotlightArtisan.id)}
                  className="bg-clay hover:bg-indigo text-paper font-accent font-bold px-6 py-2.5 transition-colors duration-300 ink-border shadow-[2px_3px_0px_0px_#1C1A14]"
                >
                  Read full story
                </button>
                <button
                  onClick={nextArtisan}
                  className="p-2.5 text-xs text-ink/70 font-mono hover:text-clay border border-ink/20 flex items-center gap-2"
                >
                  <RefreshCw size={12} className="animate-spin-slow" />
                  Next artisan spotlight
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. From Loom to Living Room flow diagram */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-accent text-clay text-lg font-bold">The Sourcing Manifesto</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-2">Loom to Living Room</h2>
          <p className="font-body text-sm text-ink/75 max-w-md mx-auto mt-3">
            A simple, hand-drawn record of how a single raw thread becomes a cherished household heirloom.
          </p>
        </div>

        {/* Diagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connector Lines (desktop only) */}
          <div className="hidden md:block absolute top-[28%] left-[25%] right-[25%] h-0.5 border-t-2 border-dashed border-ink/30 z-0"></div>

          {/* Step 1 */}
          <div className="wobbly-border p-6 bg-chalk hover:bg-paper transition-colors duration-300 relative z-10 flex flex-col items-center text-center gap-4 shadow-sm group">
            <div className="w-16 h-16 wobbly-border bg-clay text-paper text-2xl font-display font-bold flex items-center justify-center shadow-[2px_3px_0px_0px_#1C1A14] group-hover:scale-110 transition-transform">
              01
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">Artisans Create</h3>
            <p className="font-body text-sm text-ink/80 leading-relaxed">
              We source raw fibers, local clays, and seasoned hardwoods directly. No speed-ups, only kickwheels and shuttle-looms.
            </p>
            <div className="text-[10px] font-mono text-clay mt-2 bg-clay/5 border border-clay/20 px-2 py-0.5">
              Raw-Earth Materials
            </div>
          </div>

          {/* Step 2 */}
          <div className="wobbly-border p-6 bg-chalk hover:bg-paper transition-colors duration-300 relative z-10 flex flex-col items-center text-center gap-4 shadow-sm group">
            <div className="w-16 h-16 wobbly-border bg-indigo text-paper text-2xl font-display font-bold flex items-center justify-center shadow-[2px_3px_0px_0px_#1C1A14] group-hover:scale-110 transition-transform">
              02
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">We Curate</h3>
            <p className="font-body text-sm text-ink/80 leading-relaxed">
              Our small ledger group catalogs every single item. We guarantee the provenance, verifying raw dyes and wood maturity details.
            </p>
            <div className="text-[10px] font-mono text-indigo mt-2 bg-indigo/5 border border-indigo/20 px-2 py-0.5">
              Direct-ledger Credited
            </div>
          </div>

          {/* Step 3 */}
          <div className="wobbly-border p-6 bg-chalk hover:bg-paper transition-colors duration-300 relative z-10 flex flex-col items-center text-center gap-4 shadow-sm group">
            <div className="w-16 h-16 wobbly-border bg-turmeric text-paper text-2xl font-display font-bold flex items-center justify-center shadow-[2px_3px_0px_0px_#1C1A14] group-hover:scale-110 transition-transform">
              03
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">You Cherish</h3>
            <p className="font-body text-sm text-ink/80 leading-relaxed">
              You receive a numbered craft with its complete maker provenance card. Built for lifelong service, passing from hand to hand.
            </p>
            <div className="text-[10px] font-mono text-turmeric mt-2 bg-turmeric/5 border border-turmeric/20 px-2 py-0.5">
              Lifelong Heirloom
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
