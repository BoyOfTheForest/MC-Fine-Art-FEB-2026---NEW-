import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SUBJECTS_CONTENT_DATA } from '../types';
import { getArtworksBySubject } from '../data';

const SUBJECT_HERO_IMAGES: Record<string, string> = {
  'abstracts': 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'landscapes': 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'wildlife': 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'waterscapes': 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'nightscapes': 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'architecture-cultural-sites': 'https://images.pexels.com/photos/2389474/pexels-photo-2389474.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export const SubjectDetailPage: React.FC = () => {
  const { id } = useParams();

  const currentIndex = SUBJECTS_CONTENT_DATA.findIndex(s => s.slug === id);
  const subject = currentIndex !== -1 ? SUBJECTS_CONTENT_DATA[currentIndex] : null;
  const prevSubject = SUBJECTS_CONTENT_DATA[(currentIndex - 1 + SUBJECTS_CONTENT_DATA.length) % SUBJECTS_CONTENT_DATA.length];
  const nextSubject = SUBJECTS_CONTENT_DATA[(currentIndex + 1) % SUBJECTS_CONTENT_DATA.length];

  const displayTitle = subject?.title || (id ? id.replace(/-/g, ' ') : 'Subject');

  const artworks = id ? getArtworksBySubject(id) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white">
      <div className="w-full h-[60vh] relative overflow-hidden bg-gray-900">
        <img
          src={id ? (SUBJECT_HERO_IMAGES[id] || `https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600`) : ''}
          alt={displayTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-white capitalize shadow-sm">
              {displayTitle}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
          Visual Subject
        </p>
        {subject && (
          <>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
              {subject.description}
            </p>
            <p className="text-sm font-medium text-gray-800 italic">
              {subject.cta}
            </p>
          </>
        )}
        <div className="flex justify-center space-x-8 text-sm text-gray-500 border-t border-b border-gray-100 py-6 mt-12">
          <span>Fine Art Prints</span>
          <span>&bull;</span>
          <span>Limited Edition</span>
          <span>&bull;</span>
          <span>Archival Pigment</span>
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

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="border-t border-gray-100 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <Link
              to={`/subjects/${prevSubject.slug}`}
              className="group flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Previous Subject</span>
                {prevSubject.title}
              </div>
            </Link>

            <Button to="/quiz">Find Your Match</Button>

            <Link
              to={`/subjects/${nextSubject.slug}`}
              className="group flex items-center text-right text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <div>
                <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Next Subject</span>
                {nextSubject.title}
              </div>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
