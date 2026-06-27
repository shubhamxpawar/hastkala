import React, { useState, useMemo } from 'react';
import { Filter, Star, SlidersHorizontal, Search, RotateCcw, ArrowRight } from 'lucide-react';
import { Product, Category } from '../types';
import { PRODUCTS, CATEGORIES, REGIONS } from '../data';

interface ShopViewProps {
  setView: (view: 'home' | 'shop' | 'product' | 'artisan' | 'about') => void;
  setSelectedProductId: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  setView,
  setSelectedProductId,
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All'); // 'All' | 'low' | 'medium' | 'high'
  const [sortBy, setSortBy] = useState<string>('featured'); // 'featured' | 'price-asc' | 'price-desc' | 'rating'
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedRegion('All');
    setPriceRange('All');
    setSortBy('featured');
    setSearchQuery('');
  };

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.artistName.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Region
    if (selectedRegion !== 'All') {
      result = result.filter((p) => p.region === selectedRegion);
    }

    // Filter by Price range
    if (priceRange !== 'All') {
      result = result.filter((p) => {
        // Normalize price to dollars for standard filter bucket comparison (1 USD = approx 83 INR)
        const priceInUSD = p.currency === '₹' ? p.price / 83 : p.price;
        if (priceRange === 'low') return priceInUSD < 50;
        if (priceRange === 'medium') return priceInUSD >= 50 && priceInUSD <= 150;
        if (priceRange === 'high') return priceInUSD > 150;
        return true;
      });
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => {
        const valA = a.currency === '₹' ? a.price / 83 : a.price;
        const valB = b.currency === '₹' ? b.price / 83 : b.price;
        return valA - valB;
      });
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => {
        const valA = a.currency === '₹' ? a.price / 83 : a.price;
        const valB = b.currency === '₹' ? b.price / 83 : b.price;
        return valB - valA;
      });
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedRegion, priceRange, sortBy]);

  return (
    <div className="font-body text-ink max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      {/* Page Header */}
      <div className="border-b border-ink/15 pb-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="font-accent text-clay text-lg font-bold">The Guild Registry</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-1">The Slow Shop</h1>
          <p className="text-sm text-ink/70 mt-2 font-body max-w-lg leading-relaxed">
            "Handmade. Every single one." Crafted in tiny household clusters where time is measured by thread count and glaze firings.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-72">
          <input
            id="shop-search-input"
            type="text"
            placeholder="Search wool, clay, walnut..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-chalk text-sm ink-border focus:outline-none"
          />
          <Search size={16} className="absolute right-3 top-3 text-ink/50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:flex flex-col gap-8">
          
          {/* Active Filter Summary */}
          <div className="wobbly-border bg-chalk p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-ink/10">
              <span className="font-display font-bold text-lg flex items-center gap-1.5">
                <Filter size={16} /> Filters
              </span>
              {(selectedCategory !== 'All' || selectedRegion !== 'All' || priceRange !== 'All' || searchQuery !== '') && (
                <button 
                  onClick={handleResetFilters}
                  className="text-[10px] font-mono hover:text-clay underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw size={10} /> Clear
                </button>
              )}
            </div>

            <div className="flex flex-col gap-1.5 font-mono text-[11px] text-ink/75">
              <div className="flex justify-between">
                <span>Total Matched:</span>
                <span className="font-bold text-indigo">{filteredProducts.length} items</span>
              </div>
              {selectedCategory !== 'All' && (
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-bold text-clay">{selectedCategory}</span>
                </div>
              )}
              {selectedRegion !== 'All' && (
                <div className="flex justify-between">
                  <span>Region:</span>
                  <span className="font-bold text-clay">{selectedRegion}</span>
                </div>
              )}
              {priceRange !== 'All' && (
                <div className="flex justify-between">
                  <span>Price Range:</span>
                  <span className="font-bold text-clay uppercase">{priceRange}</span>
                </div>
              )}
            </div>
          </div>

          {/* 1. Category Filter */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-bold text-xl text-ink border-b-2 border-clay pb-1 w-max">
              By Craft Category
            </h3>
            <div className="flex flex-col gap-2 font-body text-sm">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left py-1 hover:text-clay transition-all duration-200 flex items-center justify-between ${
                    selectedCategory === cat ? 'text-clay font-bold pl-2 border-l-2 border-clay' : 'text-ink/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="text-xs font-mono opacity-50">
                    ({cat === 'All' 
                      ? PRODUCTS.length 
                      : PRODUCTS.filter((p) => p.category === cat).length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Region Filter */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-bold text-xl text-ink border-b-2 border-clay pb-1 w-max">
              By Artisan Cluster
            </h3>
            <div className="flex flex-col gap-2 font-body text-sm">
              {REGIONS.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`text-left py-1 hover:text-clay transition-all duration-200 flex items-center justify-between ${
                    selectedRegion === reg ? 'text-clay font-bold pl-2 border-l-2 border-clay' : 'text-ink/80'
                  }`}
                >
                  <span>{reg}</span>
                  <span className="text-xs font-mono opacity-50">
                    ({reg === 'All'
                      ? PRODUCTS.length
                      : PRODUCTS.filter((p) => p.region === reg).length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Price Filter */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-bold text-xl text-ink border-b-2 border-clay pb-1 w-max">
              By Exchange Valuation
            </h3>
            <div className="flex flex-col gap-2 font-body text-sm text-ink/80">
              <label className="flex items-center gap-2 cursor-pointer py-1 hover:text-clay">
                <input
                  type="radio"
                  name="price-range"
                  checked={priceRange === 'All'}
                  onChange={() => setPriceRange('All')}
                  className="hand-checkbox"
                />
                <span>All Valuations</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer py-1 hover:text-clay">
                <input
                  type="radio"
                  name="price-range"
                  checked={priceRange === 'low'}
                  onChange={() => setPriceRange('low')}
                  className="hand-checkbox"
                />
                <span>Under $50 / ₹4,000</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer py-1 hover:text-clay">
                <input
                  type="radio"
                  name="price-range"
                  checked={priceRange === 'medium'}
                  onChange={() => setPriceRange('medium')}
                  className="hand-checkbox"
                />
                <span>$50 - $150 / ₹4k - ₹12k</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer py-1 hover:text-clay">
                <input
                  type="radio"
                  name="price-range"
                  checked={priceRange === 'high'}
                  onChange={() => setPriceRange('high')}
                  className="hand-checkbox"
                />
                <span>Over $150 / ₹12,000</span>
              </label>
            </div>
          </div>

        </aside>

        {/* Main Products Listing Area */}
        <main className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Controls Bar */}
          <div className="flex items-center justify-between bg-chalk p-3 wobbly-border text-sm">
            
            {/* Mobile filters triggers */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden px-3 py-1.5 border border-ink/20 flex items-center gap-2 text-xs font-mono"
            >
              <SlidersHorizontal size={12} /> Filters
            </button>
            
            {/* Status counts */}
            <span className="font-mono text-xs text-ink/75">
              Showing <strong className="text-indigo">{filteredProducts.length}</strong> crafts
            </span>

            {/* Sorters */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-ink/60 font-mono">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-paper border border-ink/20 px-2 py-1 text-xs focus:outline-none rounded-none text-ink font-body font-semibold cursor-pointer"
              >
                <option value="featured">Provenance Spotlight</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Stars Evaluation</option>
              </select>
            </div>
          </div>

          {/* Grid list */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 wobbly-border bg-chalk flex flex-col items-center justify-center gap-4">
              <span className="text-4xl text-clay">🍂</span>
              <h3 className="font-display text-2xl font-bold">No craft matches this ledger query</h3>
              <p className="text-sm text-ink/75 max-w-sm">
                Try widening your price range, choosing another village cluster, or resetting our registry search list.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-clay hover:bg-indigo text-paper font-accent font-bold px-6 py-2 transition-colors ink-border shadow-[2px_3px_0px_0px_#1C1A14]"
              >
                Reset Ledger Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="bg-chalk wobbly-border p-4 flex flex-col cursor-pointer hover:bg-paper transition-colors duration-200 relative group select-none shadow-xs"
                >
                  {/* Status Badges */}
                  {product.status && (
                    <span className={`absolute top-6 left-6 z-10 font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-ink ${
                      product.status === 'Sold out' ? 'bg-ink text-paper' : 'bg-turmeric text-ink'
                    }`}>
                      {product.status}
                    </span>
                  )}

                  {/* Thumbnail */}
                  <div className="w-full h-56 overflow-hidden ink-border bg-paper relative">
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

                  {/* Descriptions */}
                  <div className="mt-4 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between font-mono text-[10px] text-ink/65 mb-1">
                        <span>{product.category}</span>
                        <span>{product.region}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-ink group-hover:text-clay transition-colors leading-snug line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="font-mono text-[11px] text-clay font-bold -mt-0.5">By {product.artistName}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-ink/20">
                      <div className="flex items-center gap-1">
                        <Star size={11} className="fill-clay text-clay" />
                        <span className="font-mono text-xs font-bold text-ink">{product.rating}</span>
                        <span className="text-[10px] text-ink/50">({product.reviewCount})</span>
                      </div>
                      <span className="font-mono text-sm font-bold text-indigo">
                        {product.currency}{product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </main>
      </div>

      {/* Mobile Drawer Slide-over Filters */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-ink/40 backdrop-blur-xs" onClick={() => setMobileFiltersOpen(false)} />
          
          <div className="relative flex flex-col w-full max-w-xs bg-paper h-full p-6 overflow-y-auto ink-border border-y-0 border-l-2 ml-auto">
            <div className="flex items-center justify-between pb-4 border-b border-ink/10 mb-6">
              <span className="font-display font-bold text-2xl">Filter Registry</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 border border-ink">
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {/* Category */}
              <div className="flex flex-col gap-2">
                <span className="font-display font-bold text-lg text-clay">Category</span>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 text-xs font-mono border-2 ${
                        selectedCategory === cat ? 'bg-clay text-paper border-ink' : 'bg-chalk text-ink border-ink/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region */}
              <div className="flex flex-col gap-2">
                <span className="font-display font-bold text-lg text-clay">Artisan Region</span>
                <div className="flex flex-wrap gap-2">
                  {REGIONS.map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-3 py-1 text-xs font-mono border-2 ${
                        selectedRegion === reg ? 'bg-clay text-paper border-ink' : 'bg-chalk text-ink border-ink/20'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Valuation */}
              <div className="flex flex-col gap-2">
                <span className="font-display font-bold text-lg text-clay">Valuation</span>
                <div className="flex flex-col gap-2 text-sm font-body">
                  {['All', 'low', 'medium', 'high'].map((val) => (
                    <label key={val} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price-range-mobile"
                        checked={priceRange === val}
                        onChange={() => setPriceRange(val)}
                        className="hand-checkbox"
                      />
                      <span className="capitalize">
                        {val === 'All' && 'All Valuations'}
                        {val === 'low' && 'Under $50 / ₹4,000'}
                        {val === 'medium' && '$50 - $150 / ₹4k - ₹12k'}
                        {val === 'high' && 'Over $150 / ₹12,000'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleResetFilters}
                className="w-full bg-chalk py-2.5 text-xs font-mono text-center ink-border"
              >
                Clear All Filters
              </button>

              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-indigo text-paper py-2.5 text-xs font-accent font-bold ink-border shadow-[2px_3px_0px_0px_#1C1A14]"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Simple stub for X icon which is needed in mobile drawer
const X: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
