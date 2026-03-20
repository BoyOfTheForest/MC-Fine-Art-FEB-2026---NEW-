import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { COLLECTIONS_CONTENT_DATA } from '../types';

export const CollectionsLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full h-[60vh] relative overflow-hidden bg-gray-900">
        <img
          src="https://cicanese.my.canva.site/art/_assets/media/084e8cdec801c84371f6ba94d5df4000.jpg"
          alt="Earth Up Close Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-white capitalize shadow-sm">
              Collections
            </h1>
            <p className="text-xl text-gray-200 font-light max-w-2xl mt-4">
              Six bodies of work. Each one built as a different kind of sanctuary&mdash;a way to bring the quiet logic of the natural world into the spaces where your brain needs it most.
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {COLLECTIONS_CONTENT_DATA.map((collection) => (
            <Link
              key={collection.slug}
              to={`/collections/${collection.slug}`}
              className="flex flex-col space-y-4 group cursor-pointer block"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                <img
                  src={collection.imageUrl || `https://picsum.photos/seed/${collection.slug}/800/600`}
                  alt={collection.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl"
                />
              </div>
              <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">
                {collection.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                {collection.description}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                View Collection
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden">
            <img src="https://picsum.photos/id/104/1600/900" alt="Featured Work" className="w-full opacity-90" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Limited Edition Release</span>
            <h2 className="text-4xl font-light">The Monochrome Edit</h2>
            <p className="text-gray-400 font-light text-lg">
              Sometimes the world is too loud for color. This special selection strips the Ghosts series down to its bones&mdash;large-format metal prints in black and white, built for the space that needs absolute stillness.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Explore Monochrome
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 text-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-4">Your walls should exhale.</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Not sure which collection fits the sanctuary you're building? Take the quiz and let your instincts guide you.
          </p>
          <Button to="/quiz">Take the Art Quiz</Button>
        </div>
      </section>
    </div>
  );
};
