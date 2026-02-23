import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const CollectionsLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Full Bleed Hero */}
      <div className="w-full h-[60vh] relative overflow-hidden bg-gray-900">
        <img
          src="https://cicanese.my.canva.site/art/_assets/media/084e8cdec801c84371f6ba94d5df4000.jpg"
          alt="Earth Up Close Hero"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-white capitalize shadow-sm">
              Collections
            </h1>
            <p className="text-xl text-gray-200 font-light max-w-2xl mt-4">
              Curated bodies of work exploring texture, scale, and the unseen worlds around us.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Image-First Collection Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Earth Up Close */}
          <Link to="/collections/earth-up-close" className="flex flex-col space-y-4 group cursor-pointer block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://cicanese.my.canva.site/art/_assets/media/084e8cdec801c84371f6ba94d5df4000.jpg" alt="Earth Up Close" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl" />
            </div>
            <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">Earth Up Close</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">View Collection</p>
          </Link>

          {/* Ghosts */}
          <Link to="/collections/ghosts" className="flex flex-col space-y-4 group cursor-pointer block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://cicanese.my.canva.site/art/_assets/media/aad892e5eba653ffd6386c355ea82d63.jpg" alt="Ghosts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl" />
            </div>
            <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">Ghosts</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">View Collection</p>
          </Link>

          {/* Dilmah Conservation */}
          <Link to="#" className="flex flex-col space-y-4 group cursor-pointer block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://cicanese.my.canva.site/art/_assets/media/a5970cb72dcdd52a108f0e1e413b9087.jpg" alt="Dilmah Conservation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl" />
            </div>
            <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">Dilmah Conservation</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">View Collection</p>
          </Link>

          {/* The Digital Dialogs */}
          <Link to="/collections/digital-dialogs" className="flex flex-col space-y-4 group cursor-pointer block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://cicanese.my.canva.site/art/_assets/media/9c5d799ec66e2bebb58b211494dfb632.jpg" alt="The Digital Dialogs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl" />
            </div>
            <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">The Digital Dialogs</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">View Collection</p>
          </Link>

          {/* Momento Mori */}
          <Link to="#" className="flex flex-col space-y-4 group cursor-pointer block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://cicanese.my.canva.site/art/_assets/media/5b197909a005c10a51b538d2a7a70009.jpg" alt="Momento Mori" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl" />
            </div>
            <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">Momento Mori</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">View Collection</p>
          </Link>

          {/* TBA 6th Slot */}
          <div className="flex flex-col space-y-4 group block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Upcoming Collection" className="w-full h-full object-cover opacity-70" />
            </div>
            <h3 className="text-xl font-medium text-gray-400">To Be Announced</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Coming Soon</p>
          </div>
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