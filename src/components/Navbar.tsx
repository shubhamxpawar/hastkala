import React, { useState } from 'react';
import { Search, ShoppingBag, X, Menu, BookOpen } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setView,
  cartCount,
  onOpenCart,
  searchQuery,
  setSearchQuery,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 bg-paper ink-border border-t-0 border-x-0 px-4 md:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center/Left: Brand Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer select-none group"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-10 h-10 wobbly-border flex items-center justify-center bg-clay text-paper font-display text-2xl font-bold group-hover:bg-indigo transition-colors duration-300">
            H
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl font-bold text-ink leading-none tracking-wide">
              हस्तकला
            </span>
            <span className="font-accent text-xs text-clay -mt-1 font-semibold">
              Hastakala
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation links */}
        <div className="hidden md:flex items-center gap-8 font-body font-semibold text-ink text-sm">
          <button
            id="nav-home"
            onClick={() => handleNavClick('home')}
            className={`relative py-1 cursor-pointer transition-colors ${
              currentView === 'home' ? 'text-clay font-bold scale-105' : 'hover:text-clay'
            }`}
          >
            Home
            {currentView === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-clay wobbly-border"></span>
            )}
          </button>
          
          <button
            id="nav-shop"
            onClick={() => handleNavClick('shop')}
            className={`relative py-1 cursor-pointer transition-colors ${
              currentView === 'shop' ? 'text-clay font-bold scale-105' : 'hover:text-clay'
            }`}
          >
            Shop Crafts
            {currentView === 'shop' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-clay wobbly-border"></span>
            )}
          </button>

          <button
            id="nav-artisans"
            onClick={() => handleNavClick('artisan')}
            className={`relative py-1 cursor-pointer transition-colors ${
              currentView === 'artisan' ? 'text-clay font-bold scale-105' : 'hover:text-clay'
            }`}
          >
            Meet Artisans
            {currentView === 'artisan' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-clay wobbly-border"></span>
            )}
          </button>

          <button
            id="nav-about"
            onClick={() => handleNavClick('about')}
            className={`relative py-1 cursor-pointer transition-colors ${
              currentView === 'about' ? 'text-clay font-bold scale-105' : 'hover:text-clay'
            }`}
          >
            Our Journal
            {currentView === 'about' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-clay wobbly-border"></span>
            )}
          </button>
        </div>

        {/* Right Side: Search and Cart */}
        <div className="flex items-center gap-4">
          
          {/* Dynamic Search Toggle */}
          <div className="relative flex items-center">
            {searchOpen && (
              <input
                id="navbar-search-input"
                type="text"
                placeholder="Search raw crafts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 md:w-56 px-3 py-1 text-sm bg-chalk ink-border focus:outline-none rounded-none text-ink mr-2 font-body"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setView('shop');
                    setSearchOpen(false);
                  }
                }}
              />
            )}
            <button
              id="navbar-search-btn"
              onClick={() => {
                if (searchOpen && searchQuery) {
                  setView('shop');
                } else {
                  setSearchOpen(!searchOpen);
                }
              }}
              className="p-2 hover:text-clay text-ink transition-colors"
              aria-label="Search"
            >
              {searchOpen && !searchQuery ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>

          {/* Cart Icon Button */}
          <button
            id="navbar-cart-btn"
            onClick={onOpenCart}
            className="p-2 text-ink hover:text-clay transition-colors relative flex items-center justify-center group"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-clay text-paper text-[10px] font-accent font-bold rounded-full w-5 h-5 flex items-center justify-center wobbly-border animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-paper ink-border border-x-0 border-b-2 py-4 px-6 flex flex-col gap-4 shadow-lg font-body font-semibold">
          <button
            id="mobile-nav-home"
            onClick={() => handleNavClick('home')}
            className={`text-left py-2 ${currentView === 'home' ? 'text-clay font-bold pl-2 border-l-2 border-clay' : 'text-ink'}`}
          >
            Home
          </button>
          <button
            id="mobile-nav-shop"
            onClick={() => handleNavClick('shop')}
            className={`text-left py-2 ${currentView === 'shop' ? 'text-clay font-bold pl-2 border-l-2 border-clay' : 'text-ink'}`}
          >
            Shop Crafts
          </button>
          <button
            id="mobile-nav-artisans"
            onClick={() => handleNavClick('artisan')}
            className={`text-left py-2 ${currentView === 'artisan' ? 'text-clay font-bold pl-2 border-l-2 border-clay' : 'text-ink'}`}
          >
            Meet Artisans
          </button>
          <button
            id="mobile-nav-about"
            onClick={() => handleNavClick('about')}
            className={`text-left py-2 ${currentView === 'about' ? 'text-clay font-bold pl-2 border-l-2 border-clay' : 'text-ink'}`}
          >
            Our Journal
          </button>
        </div>
      )}
    </nav>
  );
};
