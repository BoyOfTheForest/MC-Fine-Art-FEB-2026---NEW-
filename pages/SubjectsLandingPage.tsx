import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SUBJECTS_CONTENT_DATA } from '../types';

const SUBJECT_IMAGES: Record<string, string> = {
  'abstracts': 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
  'landscapes': 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
  'wildlife': 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=800',
  'waterscapes': 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
  'nightscapes': 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
  'architecture-cultural-sites': 'https://images.pexels.com/photos/2389474/pexels-photo-2389474.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const SubjectsLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full h-[60vh] relative overflow-hidden bg-gray-900">
        <img
          src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Subjects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-white shadow-sm">
              Subjects
            </h1>
            <p className="text-xl text-gray-200 font-light max-w-2xl mt-4">
              Six ways to enter the sanctuary. Each subject is a different doorway into stillness, built for the brain that needs its walls to do the heavy lifting.
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SUBJECTS_CONTENT_DATA.map((subject) => (
            <Link
              key={subject.slug}
              to={`/subjects/${subject.slug}`}
              className="flex flex-col space-y-4 group cursor-pointer block"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                <img
                  src={SUBJECT_IMAGES[subject.slug] || `https://picsum.photos/seed/${subject.slug}/800/600`}
                  alt={subject.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl"
                />
              </div>
              <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">
                {subject.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                {subject.description}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                View Subject
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-32 text-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-4">Your walls should exhale.</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Not sure which subject speaks to your space? Take the quiz and let your instincts guide you to the right sanctuary.
          </p>
          <Button to="/quiz">Take the Art Quiz</Button>
        </div>
      </section>
    </div>
  );
};
