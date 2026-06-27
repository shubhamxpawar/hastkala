import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, CheckCircle } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  
  // Shipping form fields
  const [shippingName, setShippingName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingPhone, setShippingPhone] = useState('');
  
  if (!isOpen) return null;

  // Group items by currency
  const dollarItems = cartItems.filter((item) => item.product.currency === '$');
  const rupeeItems = cartItems.filter((item) => item.product.currency === '₹');

  const dollarSubtotal = dollarItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const rupeeSubtotal = rupeeItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Free shipping thresholds
  const freeShippingDollarThreshold = 100;
  const freeShippingRupeeThreshold = 2500;

  const dollarShipping = dollarSubtotal > 0 && dollarSubtotal < freeShippingDollarThreshold ? 12 : 0;
  const rupeeShipping = rupeeSubtotal > 0 && rupeeSubtotal < freeShippingRupeeThreshold ? 150 : 0;

  const dollarTotal = dollarSubtotal + dollarShipping;
  const rupeeTotal = rupeeSubtotal + rupeeShipping;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (shippingName && shippingAddress && shippingPhone) {
      setCheckoutStep('success');
    }
  };

  const handleFinishCheckout = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-body text-ink">
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-over container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-paper ink-border border-r-0 border-y-0 flex flex-col h-full shadow-2xl relative">
          
          {/* Header */}
          <div className="p-6 border-b border-ink/10 flex items-center justify-between bg-chalk">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold">Your Market Bag</span>
              <span className="text-xs font-mono bg-clay text-paper px-2 py-0.5 rounded-none font-semibold">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
              </span>
            </div>
            <button 
              id="close-cart-btn"
              onClick={onClose}
              className="p-1 hover:text-clay transition-colors ink-border bg-paper"
            >
              <X size={18} />
            </button>
          </div>

          {/* Checkout Steps */}
          {checkoutStep === 'cart' && (
            <>
              {/* Cart List */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 flex flex-col items-center justify-center gap-4">
                    <div className="w-20 h-20 wobbly-border flex items-center justify-center bg-chalk text-ink/40 text-4xl">
                      🛍️
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink">Bag is currently empty</h3>
                    <p className="text-sm text-ink/65 max-w-xs">
                      Our artisans spend weeks on each piece. Fill your bag with authentic soul!
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-4 bg-clay hover:bg-indigo text-paper font-accent font-bold px-6 py-2 transition-colors ink-border shadow-[2px_3px_0px_0px_#1C1A14]"
                    >
                      Browse Crafts
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Free shipping status bars */}
                    {dollarSubtotal > 0 && (
                      <div className="p-3 bg-chalk ink-border text-xs">
                        {dollarSubtotal >= freeShippingDollarThreshold ? (
                          <span className="text-emerald-700 font-bold">🎉 You qualified for Free Shipping!</span>
                        ) : (
                          <span>
                            Add <strong className="text-clay">${(freeShippingDollarThreshold - dollarSubtotal).toFixed(2)}</strong> more for <strong className="text-indigo">Free Worldwide Shipping</strong>.
                          </span>
                        )}
                        <div className="w-full bg-paper ink-border h-2 mt-2 overflow-hidden">
                          <div 
                            className="bg-indigo h-full transition-all duration-300" 
                            style={{ width: `${Math.min((dollarSubtotal / freeShippingDollarThreshold) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {rupeeSubtotal > 0 && (
                      <div className="p-3 bg-chalk ink-border text-xs mt-1">
                        {rupeeSubtotal >= freeShippingRupeeThreshold ? (
                          <span className="text-emerald-700 font-bold">🎉 You qualified for Free Indian Shipping!</span>
                        ) : (
                          <span>
                            Add <strong className="text-clay">₹{freeShippingRupeeThreshold - rupeeSubtotal}</strong> more for <strong className="text-indigo">Free Shipping</strong>.
                          </span>
                        )}
                        <div className="w-full bg-paper ink-border h-2 mt-2 overflow-hidden">
                          <div 
                            className="bg-indigo h-full transition-all duration-300" 
                            style={{ width: `${Math.min((rupeeSubtotal / freeShippingRupeeThreshold) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Cart Items list */}
                    <div className="flex flex-col gap-4">
                      {cartItems.map((item) => (
                        <div key={item.product.id} className="flex gap-4 p-3 bg-chalk ink-border hover:bg-chalk/50 transition-colors">
                          {/* Image */}
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-16 h-16 object-cover ink-border bg-paper"
                          />
                          
                          {/* Details */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <h4 className="text-sm font-bold leading-tight line-clamp-1">{item.product.name}</h4>
                                <button 
                                  onClick={() => onRemoveItem(item.product.id)}
                                  className="text-ink/40 hover:text-clay p-1"
                                  title="Remove"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                              <p className="text-[11px] text-ink/60 font-mono -mt-0.5">By {item.product.artistName}</p>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                              {/* Quantity increments */}
                              <div className="flex items-center gap-2 bg-paper ink-border px-1 py-0.5">
                                <button 
                                  onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                  className="p-0.5 text-ink/60 hover:text-ink disabled:opacity-30"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="font-mono text-xs font-bold w-4 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                  className="p-0.5 text-ink/60 hover:text-ink"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>

                              {/* Price */}
                              <span className="font-mono text-sm font-bold">
                                {item.product.currency}{(item.product.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Footer Summary & Action */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-ink/10 bg-chalk flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5 font-mono text-xs text-ink/70">
                    
                    {/* Subtotal columns */}
                    {dollarSubtotal > 0 && (
                      <div className="flex justify-between">
                        <span>Dollar Items Subtotal</span>
                        <span>${dollarSubtotal.toFixed(2)}</span>
                      </div>
                    )}
                    {dollarShipping > 0 && (
                      <div className="flex justify-between">
                        <span>Dollar Shipping</span>
                        <span>${dollarShipping.toFixed(2)}</span>
                      </div>
                    )}
                    
                    {rupeeSubtotal > 0 && (
                      <div className="flex justify-between">
                        <span>Rupee Items Subtotal</span>
                        <span>₹{rupeeSubtotal.toLocaleString()}</span>
                      </div>
                    )}
                    {rupeeShipping > 0 && (
                      <div className="flex justify-between">
                        <span>Rupee Shipping</span>
                        <span>₹{rupeeShipping.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {/* Grand Totals */}
                  <div className="flex flex-col gap-1 border-t border-dashed border-ink/20 pt-3">
                    {dollarSubtotal > 0 && (
                      <div className="flex justify-between font-bold text-base">
                        <span>USD Total</span>
                        <span className="text-indigo font-mono">${dollarTotal.toFixed(2)}</span>
                      </div>
                    )}
                    {rupeeSubtotal > 0 && (
                      <div className="flex justify-between font-bold text-base">
                        <span>INR Total</span>
                        <span className="text-indigo font-mono">₹{rupeeTotal.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setCheckoutStep('shipping')}
                    className="w-full bg-clay hover:bg-indigo text-paper font-accent font-bold py-3 mt-3 flex items-center justify-center gap-2 transition-colors duration-300 ink-border shadow-[4px_6px_0px_0px_#1C1A14]"
                  >
                    Proceed to Folk Checkout
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}

          {checkoutStep === 'shipping' && (
            <form onSubmit={handleCheckoutSubmit} className="flex-1 flex flex-col h-full justify-between p-6 overflow-y-auto">
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl font-bold text-ink">Handmade Registry Delivery</h3>
                <p className="text-xs text-ink/75">
                  Since each item is handled individually by the artisan, please enter your direct registry details below.
                </p>

                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-xs font-mono font-bold">Connoisseur Full Name *</label>
                  <input 
                    type="text" 
                    value={shippingName} 
                    onChange={(e) => setShippingName(e.target.value)} 
                    placeholder="Anya Sharma"
                    required
                    className="w-full p-2 bg-chalk ink-border text-sm focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono font-bold">Delivery Address *</label>
                  <textarea 
                    value={shippingAddress} 
                    onChange={(e) => setShippingAddress(e.target.value)} 
                    placeholder="12 Folk Lane, Arts Quarter, NY 10012"
                    rows={3}
                    required
                    className="w-full p-2 bg-chalk ink-border text-sm focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono font-bold">Contact Phone *</label>
                  <input 
                    type="text" 
                    value={shippingPhone} 
                    onChange={(e) => setShippingPhone(e.target.value)} 
                    placeholder="+1 555-019-2821"
                    required
                    className="w-full p-2 bg-chalk ink-border text-sm focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-clay/5 border border-dashed border-clay text-xs text-clay leading-relaxed mt-4">
                  <strong>🌿 Gentle Sourcing Note:</strong> Your checkout is handled using a direct-to-artisan ledger system. Once confirmed, the respective maker (Aanya, Anjali, or Basheer) is directly credited.
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-ink/10">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="flex-1 bg-paper hover:bg-chalk text-ink font-body text-sm py-2 ink-border"
                >
                  Back to Bag
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo hover:bg-clay text-paper font-accent font-bold py-2 ink-border shadow-[2px_3px_0px_0px_#1C1A14]"
                >
                  Place Order
                </button>
              </div>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-6">
              <CheckCircle size={64} className="text-emerald-700 animate-bounce" />
              
              <div className="flex flex-col gap-2">
                <span className="font-accent text-clay text-lg font-bold">Ledger Confirmed!</span>
                <h3 className="font-display text-3xl font-bold text-ink">Thank You for Your Patronage</h3>
                <p className="text-sm text-ink/75 max-w-xs mx-auto leading-relaxed mt-2">
                  Your order has been recorded into Hastakala’s direct registry ledger. The artisans have been notified.
                </p>
              </div>

              <div className="wobbly-border bg-chalk p-4 text-left font-mono text-xs w-full max-w-xs shadow-sm">
                <div className="border-b border-dashed border-ink/20 pb-2 mb-2 text-center font-bold text-ink/80">
                  RECEIPT INK LEDGER
                </div>
                <div className="flex justify-between py-1">
                  <span>Patron:</span>
                  <span className="font-bold">{shippingName}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Shipment:</span>
                  <span className="font-bold truncate max-w-[150px]">{shippingAddress}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Status:</span>
                  <span className="text-emerald-700 font-bold">Ledger Dispatched</span>
                </div>
                <div className="border-t border-dashed border-ink/20 pt-2 mt-2 flex justify-between font-bold text-indigo">
                  <span>Total Credited:</span>
                  <span>
                    {dollarSubtotal > 0 && `$${dollarTotal.toFixed(2)}`}
                    {dollarSubtotal > 0 && rupeeSubtotal > 0 && ' & '}
                    {rupeeSubtotal > 0 && `₹${rupeeTotal.toLocaleString()}`}
                  </span>
                </div>
              </div>

              <button
                onClick={handleFinishCheckout}
                className="bg-clay hover:bg-indigo text-paper font-accent font-bold px-8 py-3 transition-colors ink-border shadow-[4px_6px_0px_0px_#1C1A14] mt-4"
              >
                Return to Folk Guild
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
