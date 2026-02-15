import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { NAVIGATION_DATA } from '../types';

export const CollectionDetailPage: React.FC = () => {
  const { id } = useParams();
  const collectionTitle = id ? id.replace(/-/g, ' ') : 'Collection';

  // Logic to find Next/Prev collection
  const collectionsNav = NAVIGATION_DATA.find(n => n.label === 'Collections')?.children || [];
  // Filter out "Browse All" if it exists in path structure
  const collectionsList = collectionsNav.filter(c => c.path !== '/collections');
  
  const currentIndex = collectionsList.findIndex(c => c.path?.includes(id || ''));
  const prevCollection = currentIndex > 0 ? collectionsList[currentIndex - 1] : collectionsList[collectionsList.length - 1];
  const nextCollection = currentIndex < collectionsList.length - 1 ? collectionsList[currentIndex + 1] : collectionsList[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock Grid Images
  const images = Array.from({ length: 9 }).map((_, i) => ({
    url: `https://picsum.photos/seed/${id}${i}/800/${i % 2 === 0 ? 1000 : 600}`,
    aspect: i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'
  }));

  return (
    <div className="bg-white">
      {/* 1. Full Width Hero */}
      <div className="w-full h-[60vh] relative overflow-hidden bg-gray-900">
        <img 
          src={`https://picsum.photos/seed/${id}hero/2400/1600`} 
          alt={collectionTitle} 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-white capitalize shadow-sm">
              {collectionTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* 2. Collection Overview Capsule */}
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
          Fine Art Collection
        </p>
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
          An exploration of form and void. This body of work challenges the viewer to look closer, 
          finding landscapes within the microscopic and stories within the silence.
        </p>
        <div className="flex justify-center space-x-8 text-sm text-gray-500 border-t border-b border-gray-100 py-6">
          <span>12 Works</span>
          <span>•</span>
          <span>Limited Edition of 50</span>
          <span>•</span>
          <span>Archival Pigment</span>
        </div>
      </div>

      {/* 3. Gallery Grid (Masonry-ish) */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <Link 
              key={idx} 
              to="/artwork/skyward-sentinel" 
              className="break-inside-avoid group cursor-pointer block"
            >
              <div className="relative overflow-hidden mb-3 rounded-2xl">
                <img 
                  src={img.url} 
                  alt={`Artwork ${idx}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              {/* Removed Price, kept title on left */}
              <div className="flex justify-start items-baseline opacity-70 group-hover:opacity-100 transition-opacity">
                <h3 className="text-sm font-medium uppercase tracking-wide">Untitled No. {idx + 1}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. Artist Notes */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-light mb-6">Artist Notes</h3>
          <p className="text-gray-600 font-light italic leading-relaxed font-serif">
            "I shot this collection primarily during the twilight hours, where the contrast between shadow and subject is at its most dramatic. The intention was to strip away the color context we rely on to identify objects, leaving only texture and shape."
          </p>
        </div>
      </div>

      {/* 5. Navigation & Related */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="border-t border-gray-100 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <Link 
              to={prevCollection?.path || '#'} 
              className="group flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Previous Collection</span>
                {prevCollection?.label}
              </div>
            </Link>
            
            <Button to="/quiz">Find Your Match</Button>

            <Link 
              to={nextCollection?.path || '#'} 
              className="group flex items-center text-right text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <div>
                <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Next Collection</span>
                {nextCollection?.label}
              </div>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};