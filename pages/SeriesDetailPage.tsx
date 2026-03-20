import React, { useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SERIES_CONTENT_DATA, NavItem } from '../types';

// Recursively flatten the series data to get a linear list for navigation & breadcrumbs
const flattenSeries = (items: NavItem[], parentPath: NavItem[] = []): { item: NavItem, breadcrumbs: NavItem[] }[] => {
  let result: { item: NavItem, breadcrumbs: NavItem[] }[] = [];
  
  items.forEach(item => {
    const currentBreadcrumbs = [...parentPath, item];
    // If it has a path and no children, it's a series leaf node
    if (item.path && (!item.children || item.children.length === 0)) {
       result.push({ item, breadcrumbs: currentBreadcrumbs });
    }
    // If it has children, recurse
    if (item.children) {
      result = result.concat(flattenSeries(item.children, currentBreadcrumbs));
    }
  });
  return result;
};

export const SeriesDetailPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Compute navigation data
  const { currentSeries, breadcrumbs, prevSeries, nextSeries } = useMemo(() => {
    const flatList = flattenSeries(SERIES_CONTENT_DATA);
    const currentIndex = flatList.findIndex(x => x.item.path === location.pathname);
    
    // Handle case where route might be generic /series/* but not matched in data (fallback)
    if (currentIndex === -1) {
        // Fallback basics
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const name = pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ') || 'Series';
        return {
            currentSeries: { label: name, path: location.pathname } as NavItem,
            breadcrumbs: [] as NavItem[],
            prevSeries: flatList[flatList.length - 1]?.item,
            nextSeries: flatList[0]?.item
        };
    }

    const prevIndex = (currentIndex - 1 + flatList.length) % flatList.length;
    const nextIndex = (currentIndex + 1) % flatList.length;

    return {
        currentSeries: flatList[currentIndex].item,
        breadcrumbs: flatList[currentIndex].breadcrumbs,
        prevSeries: flatList[prevIndex].item,
        nextSeries: flatList[nextIndex].item
    };
  }, [location.pathname]);

  // Mock "Cinematic" Images
  const images = Array.from({ length: 6 }).map((_, i) => ({
    url: `https://picsum.photos/seed/${currentSeries.label}${i}/1600/900`,
    caption: `Plate No. ${i + 1} — ${currentSeries.label}, 2023`
  }));

  return (
    <div className="bg-white">
      {/* 1. Header & Breadcrumb */}
      <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
            <Link to="/series" className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-4">
            <ArrowLeft size={12} className="mr-2" /> All Series
            </Link>
            
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
                <div className="flex flex-wrap items-center text-xs font-bold uppercase tracking-widest text-gray-400 space-x-2">
                    {breadcrumbs.slice(0, -1).map((crumb, idx) => (
                        <React.Fragment key={idx}>
                            <span>{crumb.label}</span>
                            <span>/</span>
                        </React.Fragment>
                    ))}
                    <span className="text-black">{currentSeries.label}</span>
                </div>
            )}
        </div>

        <h1 className="text-5xl md:text-6xl font-light capitalize text-black mb-8">{currentSeries.label}</h1>
      </div>

      {/* 2. Story Block */}
      <div className="max-w-3xl mx-auto px-6 mb-24">
        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800 border-l-2 border-gray-900 pl-6 font-serif">
          "I didn't come to {currentSeries.label} looking for postcards. I came looking for the quiet: the kind
          that forces a restless mind to stop scrolling and start breathing. These pieces bring that raw, unfiltered
          stillness directly into your daily orbit."
        </p>
      </div>

      {/* 3. Cinematic Scroll Layout */}
      <div className="max-w-7xl mx-auto px-0 md:px-6 pb-32 space-y-24">
        {images.map((img, idx) => (
          <Link 
            key={idx} 
            to="/artwork/skyward-sentinel"
            className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out] group cursor-pointer"
          >
            <div className={`w-full overflow-hidden shadow-sm ${idx % 2 !== 0 ? 'md:w-3/4 rounded-3xl' : 'md:w-full md:rounded-3xl'}`}>
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs font-serif italic text-gray-500 group-hover:text-black transition-colors">{img.caption}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 4. End CTA & Navigation */}
      <div className="bg-gray-50 py-24 px-6 border-t border-gray-100">
         <div className="max-w-7xl mx-auto">
            {/* Nav Arrows */}
            <div className="flex justify-between items-center mb-16">
               <Link to={prevSeries?.path || '#'} className="flex flex-col items-start group">
                 <div className="flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-1">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous Series
                 </div>
                 <span className="text-lg font-light text-black hidden md:block">{prevSeries?.label}</span>
               </Link>

               <Link to={nextSeries?.path || '#'} className="flex flex-col items-end group">
                 <div className="flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-1">
                    Next Series <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </div>
                 <span className="text-lg font-light text-black hidden md:block">{nextSeries?.label}</span>
               </Link>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-light mb-8">Keep flipping rocks.</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Button to="/series">View More Series</Button>
                <Button to="/collections/earth-up-close" variant="outline">Explore Collections</Button>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};