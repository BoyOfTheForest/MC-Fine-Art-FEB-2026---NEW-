import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const GenericPage: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const title = pathSegments.length > 0 
    ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ') 
    : 'Page';

  const category = pathSegments.length > 1 ? pathSegments[0] : '';
  const breadcrumbs = pathSegments.map((seg, i) => ({
    label: seg.replace(/-/g, ' '),
    path: '/' + pathSegments.slice(0, i + 1).join('/')
  }));

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Generate some placeholder images based on the route hash to keep them consistent per page
  const seed = location.pathname.length; 
  const images = Array.from({ length: 6 }).map((_, i) => 
    `https://picsum.photos/seed/${seed + i}/800/600`
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Title Area */}
      <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs uppercase tracking-widest text-gray-400 mb-6 space-x-2">
          <Link to="/" className="hover:text-black">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.path}>
              <span>/</span>
              <Link 
                to={crumb.path} 
                className={idx === breadcrumbs.length - 1 ? 'text-black font-semibold' : 'hover:text-black'}
              >
                {crumb.label}
              </Link>
            </React.Fragment>
          ))}
        </div>

        <h1 className="text-5xl font-light capitalize text-black mb-6">{title}</h1>
        <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
          {category === 'about' 
            ? "Learn more about the vision, the process, and the artist behind the lens."
            : "Explore this curated selection of works. Each piece is available as a limited edition fine art print."}
        </p>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        {category === 'contact' ? (
           <div className="max-w-xl">
             <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors" placeholder="Hello..." />
                </div>
                <Button>Send Message</Button>
             </form>
           </div>
        ) : category === 'quiz' ? (
           <div className="max-w-2xl mx-auto text-center py-20 bg-gray-50 rounded-sm">
             <h2 className="text-2xl mb-4">Art Personality Quiz</h2>
             <p className="mb-8 text-gray-600">This feature is currently being curated. Check back soon to discover your art match.</p>
             <Button to="/collections/earth-up-close">Browse Collections Instead</Button>
           </div>
        ) : (
          /* Gallery Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={img} 
                    alt={`Gallery item ${idx}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{title} No. {idx + 1}</h3>
                <p className="text-sm text-gray-500">24" x 36" • Archival Pigment Print</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};