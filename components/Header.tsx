import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, BookOpen } from 'lucide-react';
import { DesktopMenu } from './Navigation/DesktopMenu';
import { MobileMenu } from './Navigation/MobileMenu';
import { NAVIGATION_DATA } from '../types';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`
          sticky top-0 z-40 w-full transition-all duration-300 border-b
          ${scrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 py-2 shadow-sm' : 'bg-white border-transparent py-4'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-semibold tracking-tight uppercase text-black z-50 flex-shrink-0"
          >
            Matthew Cicanese <span className="font-light text-gray-500">Fine Art</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center h-full">
            <DesktopMenu items={NAVIGATION_DATA} />
            
            <div className="hidden lg:block ml-8 pl-8 border-l border-gray-200">
              {/* 
                Royal Blue Gradient with Gold Hover 
                Added shadow-blue-500/50 for blue glow
              */}
              <Button 
                to="/quiz" 
                className="
                  !bg-gradient-to-r !from-blue-800 !to-blue-600 
                  hover:!from-amber-400 hover:!to-amber-600 
                  !text-white !font-bold !border-none text-xs 
                  shadow-[0_0_15px_rgba(37,99,235,0.4)] 
                  hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]
                  animate-[pulse_3s_ease-in-out_infinite]
                  hover:animate-none
                "
              >
                Take the Art Quiz
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button 
              className="lg:hidden ml-4 p-2 text-black"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
          items={NAVIGATION_DATA} 
        />
      </header>
      
      {/* Announcement Banner - Rests below top-level nav */}
      <Link to="/waitlist" className="block bg-[#001f3f] text-white text-center py-3 px-4 hover:bg-[#001529] transition-colors cursor-pointer relative z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
            <BookOpen size={16} className="text-blue-200 hidden sm:block" />
            <span className="text-xs md:text-sm font-medium tracking-wide">
                <span className="font-bold text-blue-200 mr-2">ANNOUNCEMENT:</span> 
                The World Unseen: Volume I — Limited Edition Coffee Table Book. 
                <span className="underline decoration-blue-400 underline-offset-4 ml-2">Join the Waitlist</span>
            </span>
        </div>
      </Link>
    </>
  );
};