import React, { useState, useEffect } from 'react';
import { Star, Heart, Plus, Minus, ArrowLeft, ShieldCheck, Truck, Sparkles, ChevronDown, ChevronUp, Play, Film } from 'lucide-react';
import { Product, CartItem } from '../types';
import { PRODUCTS, ARTISANS } from '../data';

interface ProductDetailViewProps {
  productId: string;
  setView: (view: 'home' | 'shop' | 'product' | 'artisan' | 'about') => void;
  setSelectedProductId: (id: string) => void;
  setSelectedArtisanId: (id: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  productId,
  setView,
  setSelectedProductId,
  setSelectedArtisanId,
  onAddToCart,
}) => {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('materials');
  const [addingState, setAddingState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Sync active image when product changes
  useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
    setActiveAccordion('materials');
  }, [product]);

  const artisan = ARTISANS.find((a) => a.id === product.artistId) || ARTISANS[0];

  // Get other items by this artisan
  const moreByArtisan = PRODUCTS.filter((p) => p.artistId === product.artistId && p.id !== product.id);

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArtisanSelect = (id: string) => {
    setSelectedArtisanId(id);
    setView('artisan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddClick = () => {
    setAddingState('loading');
    setTimeout(() => {
      onAddToCart(product, quantity);
      setAddingState('success');
      setTimeout(() => setAddingState('idle'), 2000);
    }, 800);
  };

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  return (
    <div className="font-body text-ink max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      {/* Back Button */}
      <button
        onClick={() => setView('shop')}
        className="mb-8 flex items-center gap-2 text-sm font-mono font-bold hover:text-clay group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Guild Registry
      </button>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-ink/15 pb-16">
        
        {/* Left Column: Visuals Grid (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Main Photo Card */}
          <div className="relative w-full aspect-square wobbly-border bg-paper overflow-hidden group select-none">
            {product.status && (
              <span className="absolute top-6 left-6 z-10 font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-turmeric text-ink border-2 border-ink shadow-sm">
                {product.status}
              </span>
            )}
            
            <img 
              src={activeImage} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />

            {/* Magnifier glass note */}
            <div className="absolute bottom-4 right-4 bg-ink/70 text-paper text-[10px] font-mono px-2 py-1 flex items-center gap-1">
              <Sparkles size={10} className="text-turmeric" />
              100% Hand-Dyed Details
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex flex-wrap gap-3">
            {product.thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(thumb)}
                className={`w-20 h-20 wobbly-border overflow-hidden bg-paper hover:scale-105 transition-transform ${
                  activeImage === thumb ? 'border-clay border-3 ring-2 ring-clay/20' : 'opacity-80'
                }`}
              >
                <img src={thumb} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}

            {/* Video Walkthrough Thumbnail */}
            {product.hasVideo && (
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-20 h-20 wobbly-border overflow-hidden bg-ink/5 border-dashed flex flex-col items-center justify-center gap-1 group relative cursor-pointer text-ink hover:text-clay"
              >
                <div className="absolute inset-0 bg-clay/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Play size={20} className="text-clay group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[9px] font-bold uppercase">Maker Vid</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Descriptions & E-comm controls (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Product Header */}
          <div className="flex flex-col gap-2">
            <span className="font-accent text-clay text-base font-bold">{product.category}</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-ink">{product.name}</h1>
            
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-clay text-clay" />
                <span className="font-mono text-sm font-bold">{product.rating}</span>
                <span className="text-xs text-ink/50">({product.reviewCount} Patron Reviews)</span>
              </div>
              <span className="text-xs font-mono bg-indigo/10 text-indigo px-2.5 py-0.5 ink-border font-bold">
                Cluster: {product.region}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="bg-chalk p-4 wobbly-border flex justify-between items-center hard-shadow-sm">
            <span className="font-mono text-xs text-ink/60">Registered Valuation</span>
            <span className="font-mono text-3xl font-bold text-indigo">
              {product.currency}{product.price.toLocaleString()}
            </span>
          </div>

          {/* Miniature Artisan Profile Bio Box */}
          <div 
            onClick={() => handleArtisanSelect(artisan.id)}
            className="p-4 wobbly-border bg-paper border-clay/30 flex gap-4 items-center cursor-pointer hover:bg-clay/5 transition-colors group select-none"
          >
            <img 
              src={artisan.image} 
              alt={artisan.name} 
              className="w-16 h-16 rounded-full object-cover wobbly-border shrink-0"
            />
            <div className="flex-1">
              <span className="font-accent text-clay text-xs font-bold leading-none">{artisan.role}</span>
              <h4 className="font-display text-lg font-bold text-ink group-hover:text-clay transition-colors -mt-0.5">{artisan.name}</h4>
              <p className="font-body text-xs text-ink/75 leading-tight line-clamp-2 mt-1">
                "{artisan.bio}"
              </p>
            </div>
          </div>

          {/* E-commerce controls (Add to Cart / Quantity / Wishlist) */}
          <div className="flex flex-col gap-4 mt-2">
            
            <div className="flex gap-4">
              
              {/* Quantity Increments */}
              <div className="flex items-center bg-chalk ink-border px-3 py-2 select-none">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1 || product.status === 'Sold out'}
                  className="p-1 hover:text-clay text-ink/70 disabled:opacity-30"
                >
                  <Minus size={16} />
                </button>
                <span className="font-mono text-base font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  disabled={product.status === 'Sold out'}
                  className="p-1 hover:text-clay text-ink/70 disabled:opacity-30"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAddClick}
                disabled={product.status === 'Sold out' || addingState === 'loading'}
                className={`flex-1 font-accent font-bold text-lg py-3 flex items-center justify-center gap-2 transition-colors duration-300 ink-border shadow-[3px_4px_0px_0px_#1C1A14] select-none ${
                  product.status === 'Sold out'
                    ? 'bg-chalk text-ink/40 border-ink/20 shadow-none cursor-not-allowed'
                    : addingState === 'success'
                    ? 'bg-indigo text-paper'
                    : 'bg-clay hover:bg-indigo text-paper cursor-pointer'
                }`}
              >
                {product.status === 'Sold out' ? (
                  'Currently Sold Out'
                ) : addingState === 'loading' ? (
                  <span className="animate-pulse">Writing Ledger...</span>
                ) : addingState === 'success' ? (
                  '✓ Added to Bag!'
                ) : (
                  'Add to Market Bag'
                )}
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 ink-border flex items-center justify-center transition-colors ${
                  isFavorite ? 'bg-clay/10 text-clay' : 'bg-chalk hover:bg-paper'
                }`}
                title={isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart size={20} className={isFavorite ? 'fill-clay' : ''} />
              </button>
            </div>

            {/* Quick Sourcing Credentials */}
            <div className="grid grid-cols-2 gap-3 mt-2 font-mono text-[10px] text-ink/65">
              <div className="flex items-center gap-1.5 p-2.5 bg-chalk/60 border border-ink/10">
                <Truck size={14} className="text-clay" />
                <span>Custom Crating Included</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 bg-chalk/60 border border-ink/10">
                <ShieldCheck size={14} className="text-clay" />
                <span>Fair Trade Verified</span>
              </div>
            </div>
          </div>

          {/* Accordion Blocks */}
          <div className="flex flex-col gap-2 mt-4">
            
            {/* Accordion 1: Materials */}
            <div className="border-b border-ink/10 pb-2">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full flex justify-between items-center py-2 text-left font-display font-bold text-xl text-ink"
              >
                <span>Raw Organic Materials</span>
                {activeAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {activeAccordion === 'materials' && (
                <div className="pt-2 pb-3 text-sm text-ink/80 leading-relaxed font-body">
                  <p className="mb-2">This piece contains absolutely zero chemical dyes or composite woods:</p>
                  <ul className="list-disc pl-5 font-mono text-xs text-indigo flex flex-col gap-1">
                    {product.materials.map((mat) => (
                      <li key={mat}>{mat}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: Care Instructions */}
            <div className="border-b border-ink/10 pb-2">
              <button
                onClick={() => toggleAccordion('care')}
                className="w-full flex justify-between items-center py-2 text-left font-display font-bold text-xl text-ink"
              >
                <span>Care & Maturation</span>
                {activeAccordion === 'care' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {activeAccordion === 'care' && (
                <div className="pt-2 pb-3 text-sm text-ink/80 leading-relaxed font-body">
                  <p className="mb-2">Crafted using slow-methods. These guidelines ensure generations of durability:</p>
                  <ul className="list-disc pl-5 flex flex-col gap-1 text-xs">
                    {product.careInstructions?.map((ins) => (
                      <li key={ins}>{ins}</li>
                    )) || <li>Wipe with dry clean muslin cloth only.</li>}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Shipping & Returns */}
            <div className="border-b border-ink/10 pb-2">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex justify-between items-center py-2 text-left font-display font-bold text-xl text-ink"
              >
                <span>Provenance Crating & Shipping</span>
                {activeAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {activeAccordion === 'shipping' && (
                <div className="pt-2 pb-3 text-sm text-ink/85 leading-relaxed font-body">
                  <p>{product.shippingReturns}</p>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* "More from Artisan" Carousel/Grid */}
      {moreByArtisan.length > 0 && (
        <section className="py-16">
          <div className="mb-8">
            <span className="font-accent text-clay text-base font-bold">The Maker's Portfolio</span>
            <h3 className="font-display text-3xl font-bold text-ink">More from {artisan.name}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreByArtisan.map((item) => (
              <div 
                key={item.id}
                onClick={() => handleProductSelect(item.id)}
                className="bg-chalk wobbly-border p-4 flex flex-col cursor-pointer hover:bg-paper transition-colors duration-200 group"
              >
                <div className="w-full h-48 overflow-hidden ink-border bg-paper">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="mt-3 flex flex-col flex-1 justify-between">
                  <h4 className="font-display font-bold text-lg text-ink group-hover:text-clay transition-colors line-clamp-1">{item.name}</h4>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-dashed border-ink/10">
                    <div className="flex items-center gap-0.5 text-xs font-mono">
                      <Star size={10} className="fill-clay text-clay" />
                      <span>{item.rating}</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-indigo">
                      {item.currency}{item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cinematic Maker Walkthrough Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-ink/70 backdrop-blur-xs" onClick={() => setVideoModalOpen(false)}></div>
          
          <div className="relative w-full max-w-2xl bg-paper wobbly-border p-6 shadow-2xl z-10">
            <button 
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-4 -right-4 p-1.5 bg-paper ink-border shadow-md"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-4 border-b border-ink/10 pb-3">
              <Film size={20} className="text-clay animate-pulse" />
              <div>
                <span className="font-accent text-clay text-xs font-bold block leading-none">Studio Dispatch</span>
                <h4 className="font-display text-xl font-bold">Process Walkthrough with {artisan.name}</h4>
              </div>
            </div>

            {/* Simulated Hand-drawn Video Walkthrough Layout */}
            <div className="relative aspect-video w-full wobbly-border bg-ink overflow-hidden flex flex-col items-center justify-center text-paper p-8 text-center gap-4">
              {/* Background cover image blur */}
              <img src={artisan.image} alt="video blur bg" className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-xs" />

              <div className="relative z-10 flex flex-col items-center gap-3 max-w-md">
                <div className="w-16 h-16 rounded-full bg-clay text-paper flex items-center justify-center wobbly-border shadow-lg cursor-pointer hover:bg-indigo hover:scale-105 transition-all">
                  <Play size={24} className="fill-paper pl-1" />
                </div>
                <h5 className="font-display text-2xl font-bold">Cinematic Craft Stream</h5>
                <p className="text-xs text-paper/80 leading-relaxed font-body">
                  Watch {artisan.name} harvest clay from monsoon dry riverbeds, shape vessels on her kickwheel, and paint waves using fine squirrel-hair brushes in Bhuj.
                </p>
                <div className="flex gap-4 items-center text-[10px] font-mono opacity-60 mt-2 bg-paper/10 px-3 py-1 ink-border">
                  <span>● 02:45 Walkthrough</span>
                  <span>•</span>
                  <span>Audio: Ambient Studio Sounds</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-xs font-mono text-ink/65">
              <span>Recorded live in {artisan.location}</span>
              <span>© Hastakala Guild Archives</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Simple stub for X icon which is needed in video modal
const X: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
