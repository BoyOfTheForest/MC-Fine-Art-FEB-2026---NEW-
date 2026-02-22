import React from 'react';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const FeaturedCollection: React.FC<{ title: string; image: string; link: string; align?: 'left' | 'right' }> = ({ 
  title, image, link, align = 'left' 
}) => (
  <div className={`flex flex-col md:flex-row gap-12 items-center mb-32 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-3/5 aspect-[4/3] bg-gray-100 overflow-hidden group rounded-3xl">
      <Link to={link}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
    </div>
    <div className="w-full md:w-2/5 flex flex-col items-start space-y-6">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Featured Collection</span>
      <h2 className="text-4xl font-light text-black">{title}</h2>
      <p className="text-gray-600 leading-relaxed">
        Immerse yourself in textures and tones that challenge perception. 
        Each piece in this collection is a testament to the quiet, often overlooked beauty of our world.
      </p>
      <Button to={link} variant="outline">View Collection</Button>
    </div>
  </div>
);

const LOGO_DATA = [
  { name: 'National Geographic', path: '/logos/national-geographic.svg' },
  { name: 'Canon', path: '/logos/canon.svg' },
  { name: 'Smithsonian Magazine', path: '/logos/smithsonian.svg' },
  { name: 'Tampa International Airport', path: '/logos/tampa-airport.svg' },
  { name: 'World Wildlife Fund', path: '/logos/wwf.svg' },
  { name: 'Fernbank Museum', path: '/logos/fernbank.svg' },
  { name: 'Duke University', path: '/logos/duke.svg' },
  { name: 'Florida Southern College', path: '/logos/florida-southern.svg' },
];

export const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* As Seen In Section */}
      <section className="py-16 px-6 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-12">
              As Seen In
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 items-center justify-items-center">
              {LOGO_DATA.map((logo) => (
                <div key={logo.name} className="w-32 h-16 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    className="max-h-12 max-w-full object-contain mix-blend-multiply group-hover:mix-blend-normal"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-8">Welcome to the visual archives.</h2>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          Matthew Cicanese’s photographic practice spans the natural world, the digital frontier,
          and the nuanced stories embedded in geography and culture. Browse the collections, dive
          into the series, or take the quick quiz to discover which body of work resonates most
          with you.
        </p>
      </section>

      {/* Featured Collections Preview */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <FeaturedCollection 
          title="Earth Up Close" 
          image="https://picsum.photos/id/16/1600/1200"
          link="/collections/earth-up-close"
        />
        {/* Updated link to point to the new Product Page template for demonstration */}
        <FeaturedCollection 
          title="Skyward Sentinel (New Release)" 
          image="https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=1600&auto=format&fit=crop"
          link="/artwork/skyward-sentinel"
          align="right"
        />
        <FeaturedCollection 
          title="Symphonies in Scale" 
          image="https://picsum.photos/id/250/1600/1200"
          link="/collections/symphonies-in-scale"
        />
      </section>

      {/* Quiz CTA */}
      <section className="bg-gray-50 py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-light mb-6">Not sure where to start?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Art is personal. Take our curated art personality quiz to find the perfect piece 
            that speaks to your space and spirit.
          </p>
          <Button to="/quiz" className="bg-black text-white px-10 py-4 text-lg">
            Take the Art Quiz
          </Button>
        </div>
      </section>
    </div>
  );
};