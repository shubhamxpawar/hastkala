import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Rss, X, Heart } from 'lucide-react';
import { ARTICLES, EditorialArticle } from '../data';

export const AboutView: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle | null>(null);

  return (
    <div className="font-body text-ink max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      {/* Page Header */}
      <div className="border-b border-ink/15 pb-8 mb-12 text-center max-w-2xl mx-auto">
        <span className="font-accent text-clay text-lg font-bold">Folk Dispatches</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-1">The Living Journal</h1>
        <p className="text-sm text-ink/70 mt-2 font-body leading-relaxed">
          Read monthly notes compiled directly from our weaver looms and kiln studios. Exploring the chemical secrets of indigo fermentations and kickwheel torque.
        </p>
      </div>

      {/* Main Grid: Articles & Sourcing Manifesto */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Articles List (lg:col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <h2 className="font-display text-3xl font-bold text-ink border-b-2 border-clay pb-1 w-max mb-2">
            Dispatches from the Field
          </h2>

          <div className="flex flex-col gap-10">
            {ARTICLES.map((article) => (
              <article 
                key={article.id} 
                className="wobbly-border bg-chalk p-6 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper transition-all duration-300 shadow-sm"
              >
                {/* Article Image (col-span-4) */}
                <div className="md:col-span-4 h-48 w-full wobbly-border overflow-hidden bg-paper select-none">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover filter contrast-105"
                  />
                </div>

                {/* Article Info (col-span-8) */}
                <div className="md:col-span-8 flex flex-col justify-between items-start gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 font-mono text-[10px] text-ink/50 uppercase">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} /> {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-ink hover:text-clay transition-colors mt-1 leading-snug">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-ink/75 leading-relaxed font-body mt-2 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="font-accent font-bold text-sm text-clay hover:text-indigo flex items-center gap-1 hover:underline mt-2 cursor-pointer group"
                  >
                    Read full journal entry
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Sourcing Manifesto (lg:col-span-4) */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          
          {/* Manifesto Card */}
          <div className="wobbly-border bg-paper border-clay/35 p-6 shadow-sm flex flex-col gap-4">
            <span className="font-accent text-clay text-lg font-bold">Hastakala Sourcing Manifesto</span>
            <h3 className="font-display text-2xl font-bold text-ink">We Stand For Slow-Craft Equity</h3>
            
            <p className="text-xs text-ink/80 leading-relaxed font-body">
              Modern digital retailers run rapid, industrial supply lines designed to copy artisanal motifs on massive polyester looms. This devalues real handlooms and pushes ancient villages into obsolescence.
            </p>

            <div className="flex flex-col gap-3 font-body text-xs mt-2 border-t border-dashed border-ink/10 pt-4">
              <div className="flex gap-2.5">
                <span className="text-clay font-bold">1.</span>
                <p className="text-ink/75">
                  <strong>Direct Workshop Crediting:</strong> 100% of the listed artisan value is routed to the creator immediately upon ledger registration.
                </p>
              </div>
              <div className="flex gap-2.5">
                <span className="text-clay font-bold">2.</span>
                <p className="text-ink/75">
                  <strong>Living Indigo Standard:</strong> We ban chemical stabilizers. All dyestuffs must be fermented in organic, live-culture composts.
                </p>
              </div>
              <div className="flex gap-2.5">
                <span className="text-clay font-bold">3.</span>
                <p className="text-ink/75">
                  <strong>Seasoned Mature Hardwoods:</strong> Walnut logs must be aged naturally for over three winters before chisel adze work to prevent cracking.
                </p>
              </div>
            </div>
          </div>

          {/* Social feed block */}
          <div className="wobbly-border bg-chalk p-6 shadow-sm flex flex-col gap-3">
            <span className="font-display font-bold text-lg flex items-center gap-1.5 text-ink">
              <Rss size={16} /> Live From Kutch & Srinagar
            </span>
            
            <div className="flex flex-col gap-4 font-mono text-[11px] text-ink/70">
              <div className="border-b border-dashed border-ink/10 pb-3">
                <div className="flex justify-between font-bold text-indigo mb-1">
                  <span>@anjali_ceramics</span>
                  <span>10m ago</span>
                </div>
                <p className="font-body text-xs text-ink/80 leading-snug">
                  "Sifted 40kg of iron-rich dry clay today from the monsoon river bank. Needs to rest inside burlap for two more weeks before wheel centering begins."
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-indigo mb-1">
                  <span>@basheer_carving</span>
                  <span>2h ago</span>
                </div>
                <p className="font-body text-xs text-ink/80 leading-snug">
                  "Just finished relievo relief on a walnut container. Hand rubbing linseed oil on walnut releases the most woody fragrance. Workshop smells like timber heaven."
                </p>
              </div>
            </div>
          </div>

        </aside>

      </div>

      {/* Article Detail View Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-ink/70 backdrop-blur-xs" onClick={() => setSelectedArticle(null)}></div>
          
          <div className="relative w-full max-w-3xl bg-paper wobbly-border p-6 md:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-1.5 bg-paper ink-border shadow-md hover:text-clay cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Article Modal Content */}
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-1.5 border-b border-ink/10 pb-4">
                <div className="flex items-center gap-3 font-mono text-[10px] text-ink/50 uppercase">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="w-full h-64 md:h-80 wobbly-border overflow-hidden select-none">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="font-body text-sm md:text-base text-ink/90 leading-relaxed flex flex-col gap-4 whitespace-pre-wrap">
                {selectedArticle.content}
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-ink/10 text-xs font-mono text-ink/50">
                <span>By Hastakala Editorial Guild</span>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="bg-clay hover:bg-indigo text-paper font-accent font-bold px-4 py-1.5 ink-border shadow-[1px_2px_0px_0px_#1C1A14] uppercase text-[10px]"
                >
                  Return to Journal
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
