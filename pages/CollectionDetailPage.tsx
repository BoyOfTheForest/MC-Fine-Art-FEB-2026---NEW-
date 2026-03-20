import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { COLLECTIONS_CONTENT_DATA } from '../types';
import { getArtworksByCollection } from '../data';

export const CollectionDetailPage: React.FC = () => {
  const { id } = useParams();

  const currentIndex = COLLECTIONS_CONTENT_DATA.findIndex(c => c.slug === id);
  const collection = currentIndex !== -1 ? COLLECTIONS_CONTENT_DATA[currentIndex] : null;
  const prevCollection = COLLECTIONS_CONTENT_DATA[(currentIndex - 1 + COLLECTIONS_CONTENT_DATA.length) % COLLECTIONS_CONTENT_DATA.length];
  const nextCollection = COLLECTIONS_CONTENT_DATA[(currentIndex + 1) % COLLECTIONS_CONTENT_DATA.length];

  const collectionTitle = collection?.title || (id ? id.replace(/-/g, ' ') : 'Collection');

  const artworks = id ? getArtworksByCollection(id) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white">
      <div className="w-full h-[60vh] relative overflow-hidden bg-gray-900">
        <img
          src={collection?.imageUrl || (artworks[0]?.heroImage) || `https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600`}
          alt={collectionTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-white capitalize shadow-sm">
              {collectionTitle}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
          Fine Art Collection
        </p>
        {collection ? (
          <>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
              {collection.description}
            </p>
            <p className="text-sm font-medium text-gray-800 italic">
              {collection.cta}
            </p>
          </>
        ) : (
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
            A curated body of work exploring the quiet logic of the natural world.
          </p>
        )}
        <div className="flex justify-center space-x-8 text-sm text-gray-500 border-t border-b border-gray-100 py-6 mt-12">
          <span>Limited Edition</span>
          <span>&bull;</span>
          <span>Archival Pigment</span>
          <span>&bull;</span>
          <span>Museum-Grade</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {artworks.map((artwork) => (
            <Link
              key={artwork.slug}
              to={`/artwork/${artwork.slug}`}
              className="break-inside-avoid group cursor-pointer block"
            >
              <div className="relative overflow-hidden mb-3 rounded-2xl">
                <img
                  src={artwork.heroImage}
                  alt={artwork.heroAlt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex justify-start items-baseline opacity-70 group-hover:opacity-100 transition-opacity">
                <h3 className="text-sm font-medium uppercase tracking-wide">{artwork.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {collection && (
        <div className="bg-gray-50 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-light mb-6">Artist Notes</h3>
            <p className="text-gray-600 font-light italic leading-relaxed font-serif">
              "{collection.cta}"
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="border-t border-gray-100 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <Link
              to={`/collections/${prevCollection.slug}`}
              className="group flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Previous Collection</span>
                {prevCollection.title}
              </div>
            </Link>

            <Button to="/quiz">Find Your Match</Button>

            <Link
              to={`/collections/${nextCollection.slug}`}
              className="group flex items-center text-right text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <div>
                <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Next Collection</span>
                {nextCollection.title}
              </div>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
