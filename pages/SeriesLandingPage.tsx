import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERIES_CONTENT_DATA, NavItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SeriesCard: React.FC<{ item: NavItem; category: string }> = ({ item, category }) => {
  // Generate deterministic random-looking image
  const imgId = (item.label.length * 11) % 100; 
  
  return (
    <Link to={item.path || '#'} className="group block h-full">
      <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-4 relative rounded-2xl">
        <img 
          src={`https://picsum.photos/id/${imgId + 10}/600/400`} 
          alt={item.label} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
          {category}
        </span>
        <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">
          {item.label}
        </h3>
      </div>
    </Link>
  );
};

const SeriesGrid: React.FC<{ items: NavItem[], category: string }> = ({ items, category }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item, idx) => (
       <SeriesCard key={idx} item={item} category={category} />
    ))}
  </div>
);

const SubRegionBlock: React.FC<{ subRegion: NavItem }> = ({ subRegion }) => {
  return (
    <div className="mb-8 break-inside-avoid">
       <h3 className="text-xl font-medium text-black mb-4 border-b border-gray-100 pb-2">{subRegion.label}</h3>
       {subRegion.children && (
         <SeriesGrid items={subRegion.children} category={subRegion.label} />
       )}
    </div>
  );
};

const RegionAccordion: React.FC<{ region: NavItem; defaultOpen?: boolean }> = ({ region, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = region.label.toLowerCase().replace(/\s+/g, '-');

  // Separate direct series children from sub-regions
  const directSeries = region.children?.filter(child => !child.children) || [];
  const subRegions = region.children?.filter(child => child.children) || [];

  return (
    <div id={id} className="border-b border-gray-200 last:border-0 scroll-mt-24">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between group text-left"
      >
        <h2 className="text-3xl font-light text-black uppercase tracking-wide group-hover:text-gray-600 transition-colors">
          {region.label}
        </h2>
        <span className={`p-2 rounded-full border transition-all ${isOpen ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'}`}>
           {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100 mb-12' : 'max-h-0 opacity-0'}`}
      >
         {/* Direct Series Grid (3 cols) */}
         {directSeries.length > 0 && (
           <div className="mb-12">
             <SeriesGrid items={directSeries} category={region.label} />
           </div>
         )}

         {/* Sub-Regions (2 cols layout) */}
         {subRegions.length > 0 && (
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {subRegions.map((sub, idx) => (
               <SubRegionBlock key={idx} subRegion={sub} />
             ))}
           </div>
         )}
      </div>
    </div>
  );
};

export const SeriesLandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling on mount or update
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Find the accordion button if possible or just rely on the ID being on the wrapper
        // We might need to manually trigger click if we want it open, 
        // but for now relying on defaultOpen prop or user interaction.
        // Actually, let's just scroll.
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Simple Header */}
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light mb-6">Series Archive</h1>
        <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
          Deep-dive photographic studies organized by place. 
          Travel through these visual narratives to explore the specific character of each location.
        </p>
      </section>

      {/* 2. Region Blocks (Accordion) */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {SERIES_CONTENT_DATA.map((region, idx) => (
          <RegionAccordion 
            key={idx} 
            region={region} 
            // Default open if the hash matches this region, or if it's the first one
            defaultOpen={idx === 0 || (location.hash === `#${region.label.toLowerCase().replace(/\s+/g, '-')}`)}
          />
        ))}
      </section>
    </div>
  );
};