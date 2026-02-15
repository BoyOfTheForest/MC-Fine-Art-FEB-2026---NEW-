import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { ArrowRight, Calendar, Plus } from 'lucide-react';

const NEWS_ITEMS = [
  {
    category: 'Exhibitions',
    date: 'Oct 12, 2023',
    title: 'Solo Exhibition: "Ghosts" Opens at The Modern',
    excerpt: 'An immersive installation featuring the complete monochrome series exploring silence and space.',
    image: 'https://picsum.photos/id/111/800/600',
    featured: true
  },
  {
    category: 'In The Field',
    date: 'Sep 24, 2023',
    title: 'Return to Sri Lanka: Chasing the Monsoons',
    excerpt: 'Notes from a three-week expedition tracking shifting weather patterns in the central highlands.',
    image: 'https://picsum.photos/id/15/800/600',
    featured: false
  },
  {
    category: 'Press',
    date: 'Aug 10, 2023',
    title: 'Featured in National Geographic',
    excerpt: 'Matthew discusses the role of macro photography in modern conservation efforts.',
    image: 'https://picsum.photos/id/16/800/600',
    featured: false
  },
  {
    category: 'Thoughts',
    date: 'Jul 05, 2023',
    title: 'Why I shoot with a 100mm Macro',
    excerpt: 'A technical deep dive into the gear that shapes my perspective.',
    image: 'https://picsum.photos/id/250/800/600',
    featured: false
  },
  {
    category: 'Workshops',
    date: 'Jun 15, 2023',
    title: 'Fall 2024 Workshop Dates Announced',
    excerpt: 'Join us in the Pacific Northwest for a week of intensive learning.',
    image: 'https://picsum.photos/id/11/800/600',
    featured: false
  }
];

export const NewsPage: React.FC = () => {
  const [items, setItems] = useState(NEWS_ITEMS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      // Mock loading more items by duplicating standard items
      const newItems = NEWS_ITEMS.slice(1).map(i => ({...i, id: Math.random()}));
      setItems(prev => [...prev, ...newItems]);
      setLoading(false);
    }, 800);
  };

  const featured = items[0];
  const others = items.slice(1);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header */}
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto border-b border-gray-100 mb-12">
        <h1 className="text-5xl font-light text-black">News & Insights</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        
        {/* 2. Featured Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center group cursor-pointer">
           <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-gray-100">
             <img 
               src={featured.image} 
               alt={featured.title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
           </div>
           <div className="space-y-6">
             <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span className="text-black">{featured.category}</span>
                <span>•</span>
                <span>{featured.date}</span>
             </div>
             <h2 className="text-4xl font-light leading-tight group-hover:text-gray-600 transition-colors">
               {featured.title}
             </h2>
             <p className="text-lg text-gray-600 font-light leading-relaxed">
               {featured.excerpt}
             </p>
             <div className="pt-4">
               <span className="inline-flex items-center text-sm font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                 Read Full Story <ArrowRight size={16} className="ml-2" />
               </span>
             </div>
           </div>
        </div>

        {/* 3. Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {others.map((item, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col h-full animate-[fadeIn_0.5s_ease-out]">
              <div className="aspect-[3/2] overflow-hidden rounded-3xl bg-gray-100 mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow">
                 <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                    <span className="text-blue-600">{item.category}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                 </div>
                 <h3 className="text-xl font-medium text-black mb-3 leading-snug group-hover:text-gray-600 transition-colors">
                   {item.title}
                 </h3>
                 <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                   {item.excerpt}
                 </p>
                 <span className="text-xs font-bold uppercase tracking-widest text-black group-hover:translate-x-1 transition-transform inline-block">
                   Read More
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
            <button 
              onClick={loadMore} 
              disabled={loading}
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : <>Load More <Plus size={16} className="ml-2" /></>}
            </button>
        </div>

        {/* 4. Newsletter Signup */}
        <div className="mt-32 bg-gray-50 rounded-3xl p-12 lg:p-24 text-center">
           <h2 className="text-3xl font-light mb-6">Join the Inner Circle</h2>
           <p className="text-gray-500 mb-8 max-w-lg mx-auto">
             Receive early access to new collection releases, exhibition invitations, and stories from the field.
           </p>
           <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
             <input 
               type="email" 
               placeholder="Your Email Address" 
               className="flex-grow bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-black transition-colors"
             />
             <Button className="bg-black text-white px-8 py-4 rounded-full">Subscribe</Button>
           </form>
        </div>

      </div>
    </div>
  );
};