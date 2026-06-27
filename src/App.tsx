import React, { useState, useEffect } from 'react';
import { ViewState, Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { HomeView } from './components/HomeView';
import { ShopView } from './components/ShopView';
import { ProductDetailView } from './components/ProductDetailView';
import { ArtisanProfileView } from './components/ArtisanProfileView';
import { AboutView } from './components/AboutView';

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('indigo-crest');
  const [selectedArtisanId, setSelectedArtisanId] = useState<string>('anjali');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [view]);

  // Handle adding items to the cart
  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const newItems = [...prevItems];
        newItems[existingIdx].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
    // Open cart drawer immediately so the user gets direct tactile feedback
    setCartOpen(true);
  };

  // Handle updating item quantities
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Handle removing items from cart
  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  // Handle clearing cart (post-checkout)
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Calculate cart counts
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col paper-texture bg-paper text-ink relative antialiased selection:bg-clay/25 selection:text-ink">
      
      {/* 1. Navbar */}
      <Navbar
        currentView={view}
        setView={setView}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 2. Main Body Content (rendered dynamically based on viewState) */}
      <main className="flex-1">
        {view === 'home' && (
          <HomeView
            setView={setView}
            setSelectedProductId={setSelectedProductId}
            setSelectedArtisanId={setSelectedArtisanId}
          />
        )}

        {view === 'shop' && (
          <ShopView
            setView={setView}
            setSelectedProductId={setSelectedProductId}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {view === 'product' && (
          <ProductDetailView
            productId={selectedProductId}
            setView={setView}
            setSelectedProductId={setSelectedProductId}
            setSelectedArtisanId={setSelectedArtisanId}
            onAddToCart={handleAddToCart}
          />
        )}

        {view === 'artisan' && (
          <ArtisanProfileView
            artisanId={selectedArtisanId}
            setView={setView}
            setSelectedProductId={setSelectedProductId}
            setSelectedArtisanId={setSelectedArtisanId}
          />
        )}

        {view === 'about' && <AboutView />}
      </main>

      {/* 3. Footer */}
      <Footer setView={setView} />

      {/* 4. Sliding Cart drawer overlay */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
