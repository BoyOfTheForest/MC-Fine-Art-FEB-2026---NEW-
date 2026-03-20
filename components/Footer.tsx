import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { NAVIGATION_DATA, SUBJECTS_CONTENT_DATA } from '../types';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
             <Link
              to="/"
              className="text-lg font-semibold tracking-tight uppercase text-black block mb-4"
            >
              Matthew Cicanese <span className="font-light text-gray-500">Fine Art</span>
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Sanctuary-grade fine art for high-throttle brains. Macro and wildlife photography that serves as a physiological exhale&mdash;a reminder to slow down and find stillness in a world of noise.
            </p>

            <div className="pt-4 max-w-xs">
              <h4 className="font-bold text-xs uppercase tracking-widest text-black mb-2">Dear Fellow Rock Flipper</h4>
              <form className="flex border-b border-gray-300 focus-within:border-black transition-colors py-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent flex-grow focus:outline-none text-gray-600 placeholder-gray-400"
                />
                <button type="submit" className="text-black hover:text-gray-600">
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-black transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-black transition-colors"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-black uppercase tracking-wider mb-6">About & Contact</h3>
            <ul className="space-y-3">
              {NAVIGATION_DATA[0].children?.map((item, idx) => (
                 <li key={idx}>
                   <Link to={item.path || '#'} className="text-gray-500 hover:text-black transition-colors">
                     {item.label}
                   </Link>
                 </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="font-semibold text-black uppercase tracking-wider mb-6">Collections</h3>
             <ul className="space-y-3">
               {NAVIGATION_DATA[1].children?.map((item, idx) => (
                 <li key={idx}>
                   <Link to={item.path || '#'} className="text-gray-500 hover:text-black transition-colors">
                     {item.label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div>
             <h3 className="font-semibold text-black uppercase tracking-wider mb-6">Subjects</h3>
             <ul className="space-y-3">
               {SUBJECTS_CONTENT_DATA.map((subject, idx) => (
                 <li key={idx}>
                   <Link to={`/subjects/${subject.slug}`} className="text-gray-500 hover:text-black transition-colors">
                     {subject.title}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

           <div>
             <h3 className="font-semibold text-black uppercase tracking-wider mb-6">Featured Series</h3>
             <ul className="space-y-3">
                <li><Link to="/series/north-america/east/appalachia" className="text-gray-500 hover:text-black transition-colors">Appalachia</Link></li>
                <li><Link to="/series/iceland" className="text-gray-500 hover:text-black transition-colors">Iceland</Link></li>
                <li><Link to="/series/south-america/ecuador/choco" className="text-gray-500 hover:text-black transition-colors">Cloud Forests</Link></li>
                <li><Link to="/series/italy/venice" className="text-gray-500 hover:text-black transition-colors">Venice</Link></li>
                <li><Link to="/series/spain/canary/lanzarote" className="text-gray-500 hover:text-black transition-colors">Lanzarote</Link></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {currentYear} Matthew Cicanese Fine Art. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-black">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-black">Terms of Use</Link>
            <a href="mailto:info@matthewcicanese.com" className="flex items-center hover:text-black">
              <Mail size={14} className="mr-2" />
              info@matthewcicanese.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
