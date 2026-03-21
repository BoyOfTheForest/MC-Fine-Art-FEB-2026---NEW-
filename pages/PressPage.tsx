import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { Download, FileText, ExternalLink } from 'lucide-react';

export const PressPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = (itemName: string) => {
    alert(`Downloading: ${itemName}...`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">
          Electronic Press Kit
        </span>
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="max-w-2xl">
             <h1 className="text-5xl font-serif text-black mb-6">Matthew Cicanese</h1>
             <p className="text-2xl text-gray-500 font-light italic mb-8 font-serif">
               Storyteller. Explorer. Artist.
             </p>
             <p className="text-gray-600 leading-relaxed max-w-xl">
               Thank you for your interest. This page provides official biographies, high-resolution imagery, and brand assets for media use. For interviews or specific media inquiries, please contact the studio directly.
             </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
             <Button to="/contact" className="bg-black text-white">Contact for Press</Button>
             <Button onClick={() => handleDownload('Full EPK Zip')} variant="outline" className="justify-between group">
               Download Full EPK (ZIP) <Download size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
             </Button>
          </div>
        </div>
      </section>

      {/* 2. Official Biographies */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-3 block">Press Resources</span>
          <h2 className="text-4xl font-serif text-black">Official Biographies</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Short Bio */}
          <div className="bg-gray-50 p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Short Bio</h3>
              <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-500 border border-gray-200">50 Words</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Matthew Cicanese is a National Geographic Explorer and fine art photographer specializing in macro and landscape imagery. His work unveils the "World Unseen," bridging the gap between human perception and the intricate details of nature to inspire conservation and curiosity.
            </p>
            <button 
              onClick={() => navigator.clipboard.writeText("Matthew Cicanese is a National Geographic Explorer...")}
              className="text-xs font-bold uppercase tracking-widest text-black flex items-center hover:text-gray-600"
            >
              Copy Text <FileText size={12} className="ml-2" />
            </button>
          </div>

           {/* Medium Bio */}
          <div className="bg-gray-50 p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Medium Bio</h3>
              <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-500 border border-gray-200">150 Words</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Matthew Cicanese is a National Geographic Explorer, documentary artist, and speaker whose work explores the intersection of nature, empathy, and scale. With a background in ecology and a passion for storytelling, Matthew captures the "World Unseen"—from the mossy floors of Icelandic canyons to the cloud forests of Ecuador. His fine art prints are collected globally, celebrated for their ability to turn overlooked details into grand, emotional landscapes.
            </p>
            <button 
              onClick={() => navigator.clipboard.writeText("Matthew Cicanese is a National Geographic Explorer...")}
              className="text-xs font-bold uppercase tracking-widest text-black flex items-center hover:text-gray-600"
            >
              Copy Text <FileText size={12} className="ml-2" />
            </button>
          </div>

           {/* Long Bio Link */}
          <div className="border border-gray-200 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
            <h3 className="font-medium mb-4">Full Artist Statement & CV</h3>
            <p className="text-sm text-gray-500 mb-8">
              Includes comprehensive exhibition history, awards, and expanded narrative.
            </p>
            <Button onClick={() => handleDownload('Artist Statement PDF')} variant="outline">Download PDF</Button>
          </div>
        </div>
      </section>

      {/* 3. Approved Imagery */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-3 block">Media Assets</span>
            <h2 className="text-4xl font-serif text-black">Approved Imagery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group cursor-pointer" onClick={() => handleDownload('Studio Headshot')}>
              <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden mb-4 relative">
                <img src="https://picsum.photos/id/1005/600/600" className="w-full h-full object-cover" alt="Headshot 1" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Download className="text-white" />
                </div>
              </div>
              <p className="text-sm font-medium">Studio Headshot</p>
              <p className="text-xs text-gray-500">High-Res JPG</p>
            </div>
             <div className="group cursor-pointer" onClick={() => handleDownload('Field Photo')}>
              <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden mb-4 relative">
                <img src="https://picsum.photos/id/36/600/600" className="w-full h-full object-cover" alt="In the Field" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Download className="text-white" />
                </div>
              </div>
              <p className="text-sm font-medium">In The Field (Ecuador)</p>
              <p className="text-xs text-gray-500">High-Res JPG</p>
            </div>
             <div className="group cursor-pointer" onClick={() => handleDownload('Speaking Photo')}>
              <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden mb-4 relative">
                <img src="https://picsum.photos/id/250/600/600" className="w-full h-full object-cover" alt="Speaking" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Download className="text-white" />
                </div>
              </div>
              <p className="text-sm font-medium">Keynote Speaking</p>
              <p className="text-xs text-gray-500">High-Res JPG</p>
            </div>
             <div className="group cursor-pointer" onClick={() => handleDownload('Logo Pack')}>
              <div className="aspect-square bg-white border border-gray-200 rounded-3xl flex items-center justify-center mb-4 relative p-8">
                 <span className="text-2xl font-serif">MC</span>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                  <Download className="text-black" />
                </div>
              </div>
              <p className="text-sm font-medium">Logo Pack</p>
              <p className="text-xs text-gray-500">EPS / PNG / SVG</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Select Press & Features */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-3 block">In the Press</span>
          <h2 className="text-4xl font-serif text-black">Select Features</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="#" className="flex items-start p-6 border border-gray-100 rounded-3xl hover:shadow-lg transition-all group">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex-shrink-0 mr-6"></div>
            <div>
               <h4 className="font-medium text-lg mb-1 group-hover:text-blue-700 transition-colors flex items-center">
                 National Geographic <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
               </h4>
               <p className="text-sm text-gray-500 italic mb-3">"Through the Looking Glass: How Macro Photography Changes Our Perspective on Conservation"</p>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-400">August 2023</span>
            </div>
          </a>
          <a href="#" className="flex items-start p-6 border border-gray-100 rounded-3xl hover:shadow-lg transition-all group">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex-shrink-0 mr-6"></div>
            <div>
               <h4 className="font-medium text-lg mb-1 group-hover:text-blue-700 transition-colors flex items-center">
                 The Smithsonian Magazine <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
               </h4>
               <p className="text-sm text-gray-500 italic mb-3">"Future of Nature: Emerging Artists to Watch"</p>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-400">November 2022</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};