import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { SUBJECTS_CONTENT_DATA, ContentEntry } from '../types';
import { Reveal } from '../components/Reveal';

const SUBJECT_HERO_IMAGES: Record<string, string> = {
  'abstracts': 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=2000',
  'landscapes': 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=2000',
  'wildlife': 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=2000',
  'waterscapes': 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=2000',
  'nightscapes': 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=2000',
  'architecture-cultural-sites': 'https://images.pexels.com/photos/2389474/pexels-photo-2389474.jpeg?auto=compress&cs=tinysrgb&w=2000',
};

const SUBJECT_CARD_IMAGES: Record<string, string> = {
  'abstracts': 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
  'landscapes': 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
  'wildlife': 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=800',
  'waterscapes': 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
  'nightscapes': 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
  'architecture-cultural-sites': 'https://images.pexels.com/photos/2389474/pexels-photo-2389474.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const SubjectCard: React.FC<{ subject: ContentEntry }> = ({ subject }) => {
  const imageUrl = SUBJECT_CARD_IMAGES[subject.slug] || `https://picsum.photos/seed/${subject.slug}/800/600`;

  return (
    <Link to={`/subjects/${subject.slug}`} className="group block h-full">
      <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-6 relative rounded-3xl shadow-lg">
        <img
          src={imageUrl}
          alt={subject.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
      </div>
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] block">
          Subject
        </span>
        <h3 className="text-2xl font-serif text-black group-hover:text-gray-600 transition-colors">
          {subject.title}
        </h3>
      </div>
    </Link>
  );
};

export const SubjectsLandingPage: React.FC = () => {
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
      <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden group">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[2000ms] group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=2000")' }}
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 group-hover:bg-black/30" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 bg-gradient-to-t from-black/80 to-transparent">
          <Reveal delay={0} className="max-w-7xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4 block">Archive</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6">Explore by Subject</h1>
            <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
              Six ways to enter the sanctuary. Each subject is a different doorway into stillness, built for the brain that needs its walls to do the heavy lifting.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        {SUBJECTS_CONTENT_DATA.map((subject, idx) => {
          const heroImageUrl = SUBJECT_HERO_IMAGES[subject.slug] || 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=2000';
          const isEven = idx % 2 === 0;

          return (
            <div key={subject.slug} id={subject.slug} className="bg-white border-b border-gray-100 last:border-0 relative z-10">
              <section className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden group">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[2000ms] group-hover:scale-105"
                  style={{ backgroundImage: `url("${heroImageUrl}")` }}
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-1000 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center p-6 mt-16">
                  <Reveal delay={0} className="text-center max-w-3xl">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C4A484] mb-4 block">Subject</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight drop-shadow-lg">
                      {subject.title}
                    </h2>
                  </Reveal>
                </div>
              </section>

              <section className="py-24 px-6 max-w-7xl mx-auto bg-white relative">
                <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative lg:min-h-[40vh] ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-5/12 lg:sticky lg:top-40 space-y-6 lg:pt-8 z-10">
                    <Reveal delay={100} className="space-y-6">
                      <p className="text-gray-600 font-light text-xl leading-relaxed">
                        {subject.description}
                      </p>
                      <p className="text-sm font-medium text-black uppercase tracking-widest italic opacity-80">
                        {subject.cta}
                      </p>
                    </Reveal>
                  </div>

                  <div className="w-full lg:w-7/12 lg:pt-8">
                    <Reveal delay={200}>
                      <SubjectCard subject={subject} />
                    </Reveal>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>

      <section className="py-32 text-center bg-gray-50 relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal delay={0}>
            <h2 className="text-3xl font-serif mb-4">Your walls should exhale.</h2>
            <p className="text-gray-600 mb-10 text-lg font-light">
              Not sure which subject speaks to your space? Take the quiz and let your instincts guide you to the right sanctuary.
            </p>
            <Button to="/quiz">Take the Art Quiz</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
