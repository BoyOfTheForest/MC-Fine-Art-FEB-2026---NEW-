import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERIES_CONTENT_DATA, SERIES_DESCRIPTIONS, NavItem } from '../types';
import { Reveal } from '../components/Reveal';

const REGION_HERO_IMAGES: Record<string, string> = {
  'north-america': 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=2000',
  'south-america': 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=2000',
  'europe': 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=2000',
  'asia': 'https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?auto=compress&cs=tinysrgb&w=2000',
};

const SeriesCard: React.FC<{ item: NavItem; category: string }> = ({ item, category }) => {
  const imgId = (item.label.length * 11) % 100;

  return (
    <Link to={item.path || '#'} className="group block h-full">
      <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-6 relative rounded-3xl shadow-lg">
        <img
          src={`https://picsum.photos/id/${imgId + 10}/600/400`}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
      </div>
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] block">
          {category}
        </span>
        <h3 className="text-2xl font-serif text-black group-hover:text-gray-600 transition-colors">
          {item.label}
        </h3>
      </div>
    </Link>
  );
};

export const SeriesLandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      {/* Top Hero Parallax Section */}
      <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden group">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[2000ms] group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg")' }}
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 group-hover:bg-black/30" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 bg-gradient-to-t from-black/80 to-transparent">
          <Reveal delay={0} className="max-w-7xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4 block">Archive</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6">Explore by Series</h1>
            <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
              Geographic explorations organized by place. Earth's different ecosystems revealed through the macro lens.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Regions Layout */}
      <div className="relative z-10 bg-white">
        {SERIES_CONTENT_DATA.map((region, idx) => {
          const id = region.label.toLowerCase().replace(/\s+/g, '-');
          const regionDesc = SERIES_DESCRIPTIONS[id];
          const directSeries = region.children?.filter(child => !child.children) || [];
          const subRegions = region.children?.filter(child => child.children) || [];
          const heroImageUrl = REGION_HERO_IMAGES[id] || 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg';

          return (
            <div key={idx} id={id} className="bg-white border-b border-gray-100 last:border-0 relative z-10">
              {/* Parallax Hero for Region */}
              <section className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden group">
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[2000ms] group-hover:scale-105"
                  style={{ backgroundImage: `url("${heroImageUrl}")` }}
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-1000 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center p-6 mt-16">
                  <Reveal delay={0} className="text-center max-w-3xl">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C4A484] mb-4 block">Region Focus</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight drop-shadow-lg">
                      {region.label}
                    </h2>
                  </Reveal>
                </div>
              </section>

              {/* Region Content Block with Fade-up */}
              <section className="py-24 px-6 max-w-7xl mx-auto bg-white relative">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative lg:min-h-[40vh]">
                  
                  {/* Sticky Left Content - Region Context */}
                  <div className="w-full lg:w-5/12 lg:sticky lg:top-40 space-y-6 lg:pt-8 z-10 block">
                    {regionDesc && (
                      <Reveal delay={100} className="space-y-6">
                        <p className="text-gray-600 font-light text-xl leading-relaxed">
                          {regionDesc.description}
                        </p>
                        <p className="text-sm font-medium text-black uppercase tracking-widest italic opacity-80">
                          {regionDesc.cta}
                        </p>
                      </Reveal>
                    )}
                  </div>

                  {/* Right Scrolling Content - Series Cards */}
                  <div className="w-full lg:w-7/12 block space-y-24 pb-12 lg:pt-8">
                    
                    {/* Direct Series */}
                    {directSeries.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
                        {directSeries.map((item, i) => (
                          <Reveal key={i} delay={i * 150}>
                            <SeriesCard item={item} category={region.label} />
                          </Reveal>
                        ))}
                      </div>
                    )}

                    {/* Sub Regions */}
                    {subRegions.length > 0 && (
                      <div className="space-y-24">
                        {subRegions.map((sub, i) => (
                          <div key={i} className="space-y-12">
                            <Reveal delay={0}>
                              <h3 className="text-3xl font-serif text-black border-b border-gray-100 pb-4">
                                {sub.label}
                              </h3>
                            </Reveal>
                            {sub.children && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
                                {sub.children.map((item, j) => (
                                  <Reveal key={j} delay={j * 150}>
                                    <SeriesCard item={item} category={sub.label} />
                                  </Reveal>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};
