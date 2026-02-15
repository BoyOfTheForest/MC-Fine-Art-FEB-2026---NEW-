import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { NAVIGATION_DATA } from '../types';

// Extract collections from the nav data
const collections = NAVIGATION_DATA.find(item => item.label === 'Collections')?.children || [];

// Map dummy images to collections
const collectionImages: Record<string, string> = {
  'Earth Up Close': 'https://picsum.photos/id/16/1200/1200',
  'Symphonies in Scale': 'https://picsum.photos/id/250/1200/1200',
  'Ghosts': 'https://picsum.photos/id/28/1200/1200',
  'Digital Dialogs': 'https://picsum.photos/id/111/1200/1200',
};

export const CollectionsLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Minimal Page Header */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center md:text-left">
        <h1 className="text-5xl font-light mb-4 text-black">Collections</h1>
        <p className="text-xl text-gray-500 font-light max-w-2xl">
          Curated bodies of work exploring texture, scale, and the unseen worlds around us.
        </p>
      </section>

      {/* 2. Image-First Collection Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {collections.map((col, idx) => (
            <Link key={idx} to={col.path || '#'} className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-6 rounded-3xl">
                <img 
                  src={collectionImages[col.label] || `https://picsum.photos/seed/${idx}/800/1000`} 
                  alt={col.label} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-light text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {col.label}
                </h2>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                  View Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Featured / Highlight */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden">
             <img src="https://picsum.photos/id/104/1600/900" alt="Featured Work" className="w-full opacity-90" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Limited Edition Release</span>
            <h2 className="text-4xl font-light">The Monochrome Edit</h2>
            <p className="text-gray-400 font-light text-lg">
              A special selection of black and white works from the 'Ghosts' series, available for a limited time as large-format metal prints.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Explore Monochrome
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Footer CTA */}
      <section className="py-32 text-center bg-gray-50">
        <h2 className="text-3xl font-light mb-8">Unsure which collection suits your space?</h2>
        <Button to="/quiz">Take the Art Quiz</Button>
      </section>
    </div>
  );
};