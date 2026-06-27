import React, { useState } from 'react';
import { ArrowLeft, Send, Sparkles, MapPin, Feather, CheckSquare } from 'lucide-react';
import { Artisan, Product } from '../types';
import { PRODUCTS, ARTISANS } from '../data';

interface ArtisanProfileViewProps {
  artisanId: string;
  setView: (view: 'home' | 'shop' | 'product' | 'artisan' | 'about') => void;
  setSelectedProductId: (id: string) => void;
  setSelectedArtisanId: (id: string) => void;
}

export const ArtisanProfileView: React.FC<ArtisanProfileViewProps> = ({
  artisanId,
  setView,
  setSelectedProductId,
  setSelectedArtisanId,
}) => {
  const [activeArtisanId, setActiveArtisanId] = useState(artisanId);
  
  // Custom commission form fields
  const [commName, setCommName] = useState('');
  const [commType, setCommType] = useState('Weaving Throw');
  const [commDesc, setCommDesc] = useState('');
  const [commSubmitted, setCommSubmitted] = useState(false);

  const artisan = ARTISANS.find((a) => a.id === activeArtisanId) || ARTISANS[0];

  // Fetch collections made by this artisan
  const artisanCollections = PRODUCTS.filter((p) => p.artistId === artisan.id);

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArtisanChange = (id: string) => {
    setActiveArtisanId(id);
    setSelectedArtisanId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCommissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commName && commDesc) {
      setCommSubmitted(true);
      setCommName('');
      setCommDesc('');
    }
  };

  return (
    <div className="font-body text-ink max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 border-b border-ink/10 pb-6 mb-10">
        <button
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-sm font-mono font-bold hover:text-clay group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Guild Guildhall
        </button>

        {/* Artisan Selector Pills */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-mono text-ink/50 self-center mr-2">Select Maker:</span>
          {ARTISANS.map((art) => (
            <button
              key={art.id}
              onClick={() => handleArtisanChange(art.id)}
              className={`px-3 py-1 text-xs font-mono border-2 transition-all cursor-pointer ${
                artisan.id === art.id
                  ? 'bg-clay text-paper border-ink'
                  : 'bg-chalk hover:bg-paper border-ink/25 text-ink/70'
              }`}
            >
              {art.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Profile Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="font-accent text-clay text-lg font-bold">{artisan.role}</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-1">{artisan.name}</h1>
          <div className="flex items-center gap-2 text-xs font-mono text-ink/60 mt-1.5">
            <MapPin size={12} className="text-clay" />
            <span>Based in {artisan.location}</span>
          </div>
        </div>

        <span className="font-mono text-xs bg-indigo/5 text-indigo border border-indigo/25 px-3 py-1 ink-border rounded-none uppercase">
          5th Generation Craft lineage
        </span>
      </div>

      {/* Main Grid: My Story & Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-ink/15 pb-16">
        
        {/* Left Column: My Story Narrative (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="font-display text-3xl font-bold text-ink border-b-2 border-clay pb-1 w-max">
            My Story
          </h2>
          
          <div className="text-base text-ink/85 leading-relaxed flex flex-col gap-4">
            {artisan.storyDetails.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="p-4 bg-chalk border-l-4 border-clay text-xs italic text-ink/80 leading-relaxed mt-2 font-body">
            "I do not measure my life in clock hours, but in the rhythm of the wooden shuttle clicking, and the daily temperature variations of the indigo vat."
          </div>
        </div>

        {/* Right Column: Visuals & Raw Tags (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Artisan Image */}
          <div className="relative aspect-square wobbly-border bg-paper overflow-hidden shadow-md select-none">
            <img 
              src={artisan.image} 
              alt={artisan.name} 
              className="w-full h-full object-cover filter contrast-105 brightness-95"
            />
            <div className="absolute top-4 right-4 bg-paper ink-border px-2 py-1 flex items-center gap-1.5 text-[10px] font-mono">
              <Sparkles size={11} className="text-clay" />
              <span>Studio Master</span>
            </div>
          </div>

          {/* Raw Materials tags */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold text-lg text-ink">Source Raw Materials</span>
            <div className="flex flex-wrap gap-2">
              {artisan.materials.map((mat) => (
                <span key={mat} className="font-mono text-xs text-indigo bg-indigo/5 border border-indigo/20 px-3 py-1">
                  🌿 {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Key Techniques tags */}
          <div className="flex flex-col gap-3 mt-1">
            <span className="font-display font-bold text-lg text-ink">Core Techniques</span>
            <div className="flex flex-wrap gap-2">
              {artisan.techniques.map((tech) => (
                <span key={tech} className="font-mono text-xs text-clay bg-clay/5 border border-clay/20 px-3 py-1">
                  ⚙️ {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Handcrafted Collections Grid below */}
      <section className="py-16 border-b border-ink/15">
        <div className="mb-10">
          <span className="font-accent text-clay text-base font-bold">Registry Inventory</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mt-1">Handcrafted Collections</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisanCollections.map((product) => (
            <div 
              key={product.id}
              onClick={() => handleProductSelect(product.id)}
              className="bg-chalk wobbly-border p-4 flex flex-col cursor-pointer hover:bg-paper transition-all relative group shadow-sm"
            >
              {product.status && (
                <span className={`absolute top-6 left-6 z-10 font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-ink ${
                  product.status === 'Sold out' ? 'bg-ink text-paper' : 'bg-turmeric text-ink'
                }`}>
                  {product.status}
                </span>
              )}

              <div className="w-full h-56 overflow-hidden ink-border bg-paper">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
              </div>

              <div className="mt-4 flex flex-col flex-1 justify-between">
                <h3 className="font-display text-xl font-bold text-ink group-hover:text-clay transition-colors">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-dashed border-ink/20">
                  <span className="text-[10px] font-mono text-ink/50 uppercase tracking-wider">{product.category}</span>
                  <span className="font-mono text-sm font-bold text-indigo">
                    {product.currency}{product.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step by step Process timeline block */}
      <section className="py-16 border-b border-ink/15">
        <div className="text-center mb-12">
          <span className="font-accent text-clay text-lg font-bold">The Slow Process</span>
          <h2 className="font-display text-4xl font-bold text-ink">My Workshop Timeline</h2>
          <p className="text-sm text-ink/70 mt-2 font-body max-w-md mx-auto">
            Unlike rapid factory pipelines, each piece undergoes a highly specific sequence of generational stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {artisan.processSteps.map((step) => (
            <div key={step.title} className="wobbly-border bg-chalk p-6 relative flex flex-col gap-3 shadow-xs">
              <span className="font-accent text-clay text-xl font-bold">{step.title}</span>
              <p className="font-body text-sm text-ink/80 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Commissions terracotta box */}
      <section className="py-16 max-w-3xl mx-auto">
        <div className="wobbly-border bg-clay text-paper p-8 md:p-12 hard-shadow relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 left-0 w-32 h-32 bg-paper/5 rounded-full blur-3xl"></div>
          
          <Feather size={32} className="text-paper/80 mb-4 animate-bounce" />
          
          <span className="font-accent text-paper/90 text-lg font-bold">Special Commissions Ledger</span>
          <h3 className="font-display text-4xl font-bold text-paper mt-1 leading-tight">
            Order Custom Sizing & Weaves
          </h3>
          <p className="font-body text-sm text-paper/85 mt-2 max-w-md mx-auto leading-relaxed">
            Need custom widths, alternate wave styles, or larger wall tapestry lengths? Write a direct dispatch message to {artisan.name.split(' ')[0]}.
          </p>

          {commSubmitted ? (
            <div className="mt-8 p-4 bg-paper/10 border-2 border-dashed border-paper text-paper font-mono text-xs max-w-md text-left w-full">
              <div className="text-center font-bold border-b border-dashed border-paper/30 pb-2 mb-2">
                DIRECT COMMISSIONS LEDGER ENTRY
              </div>
              <div className="flex justify-between py-1">
                <span>Requestor:</span>
                <span className="font-bold">Recorded</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Commission Type:</span>
                <span className="font-bold">{commType}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Maker ID:</span>
                <span className="font-bold">{artisan.id.toUpperCase()}-002</span>
              </div>
              <p className="mt-2 text-[10px] leading-tight text-paper/80 italic">
                ✓ Message successfully credited to {artisan.name}'s workshop clipboard. Please allow up to 4 moon cycles for custom looms or kiln firings.
              </p>
              <button 
                onClick={() => setCommSubmitted(false)}
                className="mt-4 w-full bg-paper text-clay font-accent font-bold py-1.5 text-center text-sm cursor-pointer border border-transparent hover:bg-paper/90"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleCommissionSubmit} className="w-full max-w-md mt-8 flex flex-col gap-4 text-left font-body text-sm text-ink">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono font-bold text-paper/95">Your Name *</label>
                <input
                  type="text"
                  required
                  value={commName}
                  onChange={(e) => setCommName(e.target.value)}
                  placeholder="Connoisseur Name"
                  className="p-2.5 bg-paper ink-border rounded-none focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono font-bold text-paper/95">Commission Craft *</label>
                <select
                  value={commType}
                  onChange={(e) => setCommType(e.target.value)}
                  className="p-2.5 bg-paper ink-border rounded-none focus:outline-none cursor-pointer font-semibold"
                >
                  <option value="Weaving Throw">Custom Double-loom Throw</option>
                  <option value="Studio Ceramic">Custom High-fired Ceramic Vase</option>
                  <option value="Walnut wood">Custom Walnut Storage Chest</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono font-bold text-paper/95">Sizing Splicing details *</label>
                <textarea
                  required
                  value={commDesc}
                  onChange={(e) => setCommDesc(e.target.value)}
                  placeholder="e.g. Please weaving a 70 x 110 inch Midnight Lotus throw with alternate terracotta border tassels..."
                  rows={3}
                  className="p-2.5 bg-paper ink-border rounded-none focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-ink hover:bg-indigo text-paper font-accent font-bold text-base py-3 mt-2 flex items-center justify-center gap-2 transition-all ink-border cursor-pointer shadow-[2px_3px_0px_0px_#1C1A14]"
              >
                Send Commission Request
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
