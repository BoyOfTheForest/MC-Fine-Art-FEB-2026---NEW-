import React from 'react';
import { Button } from '../components/Button';
import { CheckCircle2 } from 'lucide-react';

export const QuizLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 1. Hero / Hook */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-b from-gray-50 to-white">
        <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
          Art Personality Assessment
        </span>
        <h1 className="text-4xl md:text-6xl font-light text-black mb-6 max-w-4xl leading-tight">
          Discover Which Collection <br/> <span className="font-semibold">Resonates With You</span>
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-xl mb-12">
          Fine art is a reflection of the soul. Answer 5 visual questions to find the pieces that match your aesthetic and spirit.
        </p>
        <Button className="bg-black text-white px-12 py-5 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
          Start the Quiz
        </Button>
      </section>

      {/* 2. What You'll Get */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="p-8 bg-gray-50 rounded-3xl">
            <CheckCircle2 size={32} className="text-gray-400 mb-4 mx-auto md:mx-0" />
            <h3 className="text-xl font-medium mb-3">Define Your Style</h3>
            <p className="text-gray-500 font-light">Understand whether you lean towards abstract minimalism, vibrant macro textures, or sweeping landscapes.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl">
            <CheckCircle2 size={32} className="text-gray-400 mb-4 mx-auto md:mx-0" />
            <h3 className="text-xl font-medium mb-3">Curated Selection</h3>
            <p className="text-gray-500 font-light">Receive a personalized portfolio of 3-5 works that would perfectly complement your living space.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl">
            <CheckCircle2 size={32} className="text-gray-400 mb-4 mx-auto md:mx-0" />
            <h3 className="text-xl font-medium mb-3">Collector's Insight</h3>
            <p className="text-gray-500 font-light">Get exclusive context about the specific series matched to your personality profile.</p>
          </div>
        </div>
      </section>

      {/* 3. Visual Preview */}
      <section className="py-12 overflow-hidden opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="flex space-x-4 justify-center">
            <img src="https://picsum.photos/id/11/400/500" className="h-64 object-cover rounded-2xl" alt="Preview" />
            <img src="https://picsum.photos/id/12/400/500" className="h-64 object-cover mt-12 rounded-2xl" alt="Preview" />
            <img src="https://picsum.photos/id/13/400/500" className="h-64 object-cover rounded-2xl" alt="Preview" />
            <img src="https://picsum.photos/id/14/400/500" className="h-64 object-cover mt-12 rounded-2xl" alt="Preview" />
        </div>
      </section>

      {/* 4. Social Proof */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
         <blockquote className="text-2xl font-light italic text-gray-800 mb-8 font-serif">
           "The quiz surprised me. It pointed me towards the 'Ghosts' series, which I hadn't looked at closely. Now, 'Ghost No. 4' hangs in my entryway."
         </blockquote>
         <cite className="text-sm font-bold uppercase tracking-widest text-gray-400 not-italic">
           — Sarah Jenkins, Collector
         </cite>
      </section>
    </div>
  );
};