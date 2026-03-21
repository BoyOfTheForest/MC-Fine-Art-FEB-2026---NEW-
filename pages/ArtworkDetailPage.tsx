import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Sun, MapPin, Eye, Shield, Truck, Stamp, Layers, PenTool, Ruler, CreditCard, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getArtworkBySlug, ALL_ARTWORKS } from '../data';

import { Reveal } from '../components/Reveal';
export const ArtworkDetailPage: React.FC = () => {
  const { id } = useParams();
  const [showStickyButton, setShowStickyButton] = useState(false);

  const artwork = id ? getArtworkBySlug(id) : undefined;

  const currentIndex = ALL_ARTWORKS.findIndex(a => a.slug === id);
  const prevArtwork = currentIndex > 0 ? ALL_ARTWORKS[currentIndex - 1] : ALL_ARTWORKS[ALL_ARTWORKS.length - 1];
  const nextArtwork = currentIndex < ALL_ARTWORKS.length - 1 ? ALL_ARTWORKS[currentIndex + 1] : ALL_ARTWORKS[0];

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Details Grid Images (crops)
  const detailImages = artwork?.detailGridImages || (artwork ? [
    artwork.detailCropImage,
    artwork.detailCropImage,
    artwork.detailCropImage,
    artwork.detailCropImage
  ] : []);

  // Mockups Carousel State
  const mockups = artwork?.interiorImages.map(img => img.src) || [];
  const [activeMockupIndex, setActiveMockupIndex] = useState(0);

  useEffect(() => {
    if (mockups.length <= 1) return;
    const interval = setInterval(() => {
      setActiveMockupIndex((prev) => (prev + 1) % mockups.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mockups.length]);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIndex(null);
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % detailImages.length);
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + detailImages.length) % detailImages.length);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setShowStickyButton(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('acquire-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!artwork) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="text-4xl font-light text-black mb-4">Artwork Not Found</h1>
        <p className="text-gray-500 mb-8">The piece you're looking for isn't available.</p>
        <Button to="/collections">Browse Collections</Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out transform ${showStickyButton ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <Button
          onClick={scrollToForm}
          className="shadow-2xl hover:scale-105 hover:shadow-3xl bg-black text-white hover:bg-gray-900 border-none px-8 py-4 text-xs tracking-widest font-bold"
        >
          Collect This Piece
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[85vh]">
        <div className="w-full lg:w-5/12 flex flex-col justify-center px-8 md:px-16 py-16 bg-white lg:sticky lg:top-0 lg:h-[85vh] z-10">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Limited Edition Release
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 leading-[1.1]">
              {artwork.title}
            </h1>

            <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-sm">
              {artwork.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToForm} className="bg-black text-white px-8 py-4 text-xs tracking-widest hover:bg-gray-800">
                Inquire to Acquire
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 bg-gray-100 min-h-[50vh] lg:h-[85vh] relative">
          <img
            src={artwork.heroImage}
            alt={artwork.heroAlt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Edition Size</span>
              <span className="text-sm font-medium">{artwork.editionSize}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Medium</span>
              <span className="text-sm font-medium">{artwork.medium}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Year</span>
              <span className="text-sm font-medium">{artwork.year}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Origin</span>
              <span className="text-sm font-medium">{artwork.origin}</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Moment */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-50">
        <div className="flex flex-col lg:flex-row gap-16 items-start relative lg:min-h-[80vh]">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-1/3 space-y-6 pt-12 z-10 block">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">Context</span>
            <h3 className="text-4xl md:text-5xl font-serif text-black leading-tight">The Moment</h3>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {artwork.narrativeMoment}
            </p>
          </div>
          <div className="w-full lg:w-7/12 mt-12 lg:mt-32 pb-32 ml-auto block">
            <Reveal delay={0}>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                {artwork.momentImage ? (
                  <img src={artwork.momentImage} alt="The Moment" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" />
                ) : (
                  <div className="w-full aspect-[4/3] flex flex-col items-center justify-center bg-gray-50"><Sun size={24} className="text-gray-400 mb-4" strokeWidth={1} /></div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Place */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-50">
        <div className="flex flex-col lg:flex-row gap-16 items-start relative lg:min-h-[80vh]">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-1/3 space-y-6 pt-12 z-10 block">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">Context</span>
            <h3 className="text-4xl md:text-5xl font-serif text-black leading-tight">The Place</h3>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {artwork.narrativePlace}
            </p>
          </div>
          <div className="w-full lg:w-7/12 mt-12 lg:mt-32 pb-32 ml-auto block">
            <Reveal delay={0}>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                {artwork.placeContextImage ? (
                  <img src={artwork.placeContextImage} alt="The Place" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" />
                ) : (
                  <div className="w-full aspect-[4/3] flex flex-col items-center justify-center bg-gray-50"><MapPin size={24} className="text-gray-400 mb-4" strokeWidth={1} /></div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Subject */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-50">
        <div className="flex flex-col lg:flex-row gap-16 items-start relative lg:min-h-[80vh]">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-1/3 space-y-6 pt-12 z-10 block">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">Context</span>
            <h3 className="text-4xl md:text-5xl font-serif text-black leading-tight">The Subject</h3>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {artwork.narrativeSubject}
            </p>
          </div>
          <div className="w-full lg:w-7/12 mt-12 lg:mt-32 pb-32 ml-auto block">
            <Reveal delay={0}>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                {artwork.subjectContextImage ? (
                  <img src={artwork.subjectContextImage} alt="The Subject" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" />
                ) : (
                  <div className="w-full aspect-[4/3] flex flex-col items-center justify-center bg-gray-50"><Eye size={24} className="text-gray-400 mb-4" strokeWidth={1} /></div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <Reveal delay={0} className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={artwork.detailCropImage}
                alt={artwork.detailCropAlt}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </Reveal>
          <Reveal delay={200} className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
              {artwork.storyOfSubjectLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              {artwork.storyOfSubjectHeading}
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {artwork.storyOfSubjectP1}
            </p>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {artwork.storyOfSubjectP2}
            </p>
          </Reveal>
        </div>
      </section>

      {artwork.fullBleedImage && (
        <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden group">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[2000ms] group-hover:scale-105"
            style={{ backgroundImage: `url('${artwork.fullBleedImage}')` }}
          />
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-1000 group-hover:bg-black/0" />
        </section>
      )}

      <section className="py-32 px-6 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-12 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <Reveal delay={200} className="w-full lg:w-1/2 space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
              {artwork.storyOfPlaceLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              {artwork.storyOfPlaceHeading}
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {artwork.storyOfPlaceP1}
            </p>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {artwork.storyOfPlaceP2}
            </p>
          </Reveal>
          <Reveal delay={0} className="w-full lg:w-1/2">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={artwork.placeImage}
                alt={artwork.placeImageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <Reveal delay={0} className="w-full lg:w-1/3 space-y-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
                Interior Visualization
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-black leading-tight">
                Bring Life to <br /> Your Space.
              </h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                {artwork.interiorDescription}
              </p>
              <Button onClick={scrollToForm} className="bg-white text-black border border-gray-200 shadow-xl hover:shadow-2xl hover:bg-gray-50 hover:scale-[1.02] transition-all px-8 py-4">
                Visualize In Your Room
              </Button>
            </Reveal>

            <Reveal delay={200} className="w-full lg:w-2/3 grid grid-cols-1 gap-6">
              {mockups.length > 0 && (
                <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-lg group">
                  {mockups.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Interior Mockup ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        activeMockupIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Thumbnail Strip */}
              {mockups.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                  {mockups.map((mockupSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMockupIndex(idx)}
                      className={`relative flex-shrink-0 h-24 w-32 rounded-xl overflow-hidden shadow-sm transition-all ${activeMockupIndex === idx ? 'ring-2 ring-black scale-95' : 'opacity-70 hover:opacity-100'}`}
                    >
                      <img src={mockupSrc} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 aspect-square bg-gray-50 rounded-3xl p-12 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=1000&auto=format&fit=crop"
              className="shadow-2xl rounded-xl max-w-full max-h-full"
              alt="Fine Art Paper Texture"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl font-light text-black">Museum Grade Archival.</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Layers size={24} className="text-gray-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-black">Hahnem&uuml;hle Photo Rag&reg;</h4>
                  <p className="text-sm text-gray-500 mt-1">100% cotton paper with a smooth surface texture, guaranteeing archival standards. Meets the highest industry standards regarding density, color gamut, color graduation and image sharpness.</p>
                </div>
              </div>
              <div className="flex items-start">
                <PenTool size={24} className="text-gray-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-black">Signed & Numbered</h4>
                  <p className="text-sm text-gray-500 mt-1">Every print is personally inspected, signed, and numbered by Matthew Cicanese. A Certificate of Authenticity is included with every acquisition.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Ruler size={24} className="text-gray-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-black">Custom Framing Available</h4>
                  <p className="text-sm text-gray-500 mt-1">We partner with premier framers to offer Italian Roma Moulding and museum-grade non-reflective glass. Arrives ready to hang.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#111] text-white py-24 rounded-3xl mx-6 mb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-2 text-white">Technically Unique.</h2>
            <h2 className="text-4xl md:text-5xl font-serif mb-16 text-gray-500 italic">Emotionally Resonant.</h2>

            <div className="space-y-12 max-w-lg">
              {artwork.technicalFeatures.map((feature, idx) => (
                <div key={idx}>
                  <span className="text-[#C4A484] text-lg font-mono mb-2 block">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-gray-800 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold mr-4">MC</div>
              <div>
                <h4 className="font-medium text-white">Matthew Cicanese</h4>
                <span className="text-[10px] uppercase tracking-wider text-gray-500">National Geographic Explorer</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative border border-gray-800 p-4 rounded-3xl">
              <img
                src={artwork.detailCropImage}
                alt="Detail Crop"
                className="shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS CROP GRID */}
      <section className="bg-gray-50 py-24 mx-2 md:mx-6 rounded-3xl mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {detailImages.map((imgSrc, idx) => (
              <div 
                key={idx} 
                className="aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all group"
                onClick={() => openLightbox(idx)}
              >
                <img 
                  src={imgSrc} 
                  alt={`Detail ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              &lt; tap to expand the details &gt;
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex justify-between items-center border-t border-gray-100 pt-8">
          <Link
            to={`/artwork/${prevArtwork.slug}`}
            className="group flex items-center text-sm text-gray-500 hover:text-black transition-colors"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span>
            <span className="hidden md:inline">{prevArtwork.title}</span>
            <span className="md:hidden">Previous</span>
          </Link>
          <Link
            to={`/artwork/${nextArtwork.slug}`}
            className="group flex items-center text-sm text-gray-500 hover:text-black transition-colors"
          >
            <span className="hidden md:inline">{nextArtwork.title}</span>
            <span className="md:hidden">Next</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>

      <div id="acquire-form" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">Acquire This Piece</h2>
            <p className="text-gray-500 font-light mb-12 text-lg">
              Limited edition prints are available worldwide. Please request a quote to receive current pricing, sizing options, and edition availability.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <Shield size={20} />
                <span>Secure Invoicing & Payment</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <CreditCard size={20} />
                <span>Payment Plans Available</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <Truck size={20} />
                <span>Insured Global Shipping</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <Stamp size={20} />
                <span>Certificate of Authenticity Included</span>
              </div>
            </div>
          </div>

          <form className="space-y-8 bg-gray-50 p-10 rounded-3xl shadow-sm">
            <input type="hidden" name="artwork" value={artwork.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Preferred Size</label>
              <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors">
                <option>I need advice on sizing</option>
                <option>Small (24")</option>
                <option>Medium (36")</option>
                <option>Large (50")</option>
                <option>Collector's Large Format (60"+)</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
              <textarea rows={3} placeholder="Tell us about the space..." className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-black text-white py-4 hover:bg-gray-800 transition-colors rounded-full">
                Request Quote
              </Button>
              <p className="text-center text-xs text-gray-400 mt-4">We typically respond within 24 hours.</p>
            </div>
          </form>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity" 
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white/70 hover:text-white p-2 transition-colors z-[110]"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={prevLightboxImage} 
            className="absolute left-4 md:left-8 text-white/50 hover:text-white p-4 z-[110] transition-transform hover:scale-110"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button 
            onClick={nextLightboxImage} 
            className="absolute right-4 md:right-8 text-white/50 hover:text-white p-4 z-[110] transition-transform hover:scale-110"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          <div 
            className="relative w-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={detailImages[lightboxIndex]} 
              alt="Expanded Detail" 
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
            />
          </div>
        </div>
      )}

    </div>
  );
};
