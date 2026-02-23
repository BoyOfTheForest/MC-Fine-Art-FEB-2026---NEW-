import React, { useState, useEffect } from 'react';
import { Button } from './Button';

const HERO_IMAGES = [
  '/EXHIBITIONS/Group/EXHIBITION_--_Morean.jpg',
  '/EXHIBITIONS/Solo/EXHIBITION_--_TPA_(Tampa_Intl_Airport).jpg',
  '/EXHIBITIONS/Solo/EXHIBITION_--_KWU.png',
  '/EXHIBITIONS/Group/EXHIBITION_--_Power_Plant_Gallery_(Duke_MFA).jpg',
  '/EXHIBITIONS/Solo/EXHIBITION_--_Fernbank_Museum.JPG',
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
      {/* Slideshow Background */}
      {HERO_IMAGES.map((img, index) => {
        const prevIndex = (currentIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length;
        let className = 'translate-x-full opacity-0 transition-none z-0';

        if (index === currentIndex) {
          className = 'translate-x-0 opacity-100 z-10 transition-transform duration-1000 ease-in-out';
        } else if (index === prevIndex) {
          className = '-translate-x-full opacity-100 z-10 transition-transform duration-1000 ease-in-out';
        }

        return (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full ${className}`}
            style={{ backgroundImage: `url('${encodeURI(img)}')` }}
          />
        );
      })}

      {/* Darker overlay for better text contrast (bg-black/60) */}
      <div className="absolute inset-0 bg-black/60 z-20"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start z-30">
        <div className="max-w-2xl text-white drop-shadow-lg animate-[fadeIn_1s_ease-out]">
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            The World <br />
            <span className="font-semibold">Unseen</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-lg opacity-90">
            Discover the hidden symphonies of scale and light in nature's most intimate details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/collections/earth-up-close" className="bg-white text-black hover:bg-gray-200 border-none">
              Explore Collections
            </Button>
            {/* Updated to outline-white for proper hover state */}
            <Button to="/quiz" variant="outline-white">
              Find Your Piece
            </Button>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-0 w-full z-40 flex justify-center space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};