import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { CheckCircle, BookOpen } from 'lucide-react';

export const WaitlistPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
             <div className="aspect-[3/4] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                    src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1200&auto=format&fit=crop" 
                    alt="Coffee Table Book Mockup"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-8 text-center">
                    <BookOpen className="text-white/80 mb-4" size={48} strokeWidth={1} />
                    <span className="text-white font-serif text-4xl italic mb-2">The World Unseen</span>
                    <span className="text-white/80 text-sm font-bold uppercase tracking-widest">Volume I</span>
                </div>
             </div>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800 border border-blue-100 bg-blue-50 px-3 py-1 rounded-full">Limited First Edition</span>
            <h1 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                A Monograph <br/> of Scale & Silence.
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
                Over 200 pages of high-fidelity macro and landscape photography, curated to bring the silence and scale of the natural world into your home. This monograph features never-before-seen plates from the "Ghosts" and "Earth Up Close" series.
            </p>
            <ul className="space-y-4 text-gray-600 pt-4 border-t border-gray-100">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Hardcover Linen with Foil Stamping</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>150lb Archival Art Paper</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Foreword by [Notable Figure]</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Includes Signed Art Print (First 100 Orders)</li>
            </ul>

            {submitted ? (
                 <div className="bg-green-50 p-8 rounded-2xl flex flex-col items-center text-center animate-[fadeIn_0.5s_ease-out] border border-green-100">
                    <CheckCircle size={48} className="text-green-600 mb-4" />
                    <h3 className="text-2xl font-medium text-green-900 mb-2">You're on the list.</h3>
                    <p className="text-green-700">Thank you for your interest. We'll notify you as soon as pre-orders open.</p>
                    <Button to="/collections" variant="outline" className="mt-6 border-green-800 text-green-900 hover:bg-green-100">Browse Collections</Button>
                 </div>
            ) : (
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-8">
                    <h3 className="text-xl font-medium mb-4">Join the Waitlist</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="email" required placeholder="Email Address" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-black focus:outline-none transition-colors bg-white" />
                        <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800 border-none">Notify Me of Release</Button>
                    </form>
                    <p className="text-xs text-center text-gray-400 mt-4">We respect your inbox. Updates only.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};