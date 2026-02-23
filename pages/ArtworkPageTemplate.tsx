import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Sun, MapPin, Eye, Shield, Truck, Stamp, Layers, PenTool, Ruler, CreditCard } from 'lucide-react';

export const ArtworkPageTemplate: React.FC = () => {
    const { id } = useParams();
    const [showStickyButton, setShowStickyButton] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling past most of the hero (approx 80% of viewport)
            const threshold = window.innerHeight * 0.8;
            if (window.scrollY > threshold) {
                setShowStickyButton(true);
            } else {
                setShowStickyButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToForm = () => {
        document.getElementById('acquire-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white min-h-screen">

            {/* Floating Sticky CTA Button (Bottom Right) */}
            <div
                className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out transform ${showStickyButton ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
                    }`}
            >
                <Button
                    onClick={scrollToForm}
                    className="shadow-2xl hover:scale-105 hover:shadow-3xl bg-black text-white hover:bg-gray-900 border-none px-8 py-4 text-xs tracking-widest font-bold"
                >
                    Collect This Piece
                </Button>
            </div>

            {/* 1. HERO SECTION (Split Layout) - NO ROUNDING */}
            <div className="flex flex-col lg:flex-row min-h-[85vh]">
                {/* Left Content */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center px-8 md:px-16 py-16 bg-white lg:sticky lg:top-0 lg:h-[85vh] z-10">
                    <div className="max-w-xl">
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-600"></span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                                Limited Edition Release
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 leading-[1.1]">
                            Skyward Sentinel <br /> of Ella
                        </h1>

                        <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-sm">
                            A portrait of quiet dominance, carved against the Sri Lankan sky.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button onClick={scrollToForm} className="bg-black text-white px-8 py-4 text-xs tracking-widest hover:bg-gray-800">
                                Inquire to Acquire
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Image - Full Bleed / No Rounding */}
                <div className="w-full lg:w-7/12 bg-gray-100 min-h-[50vh] lg:h-[85vh] relative">
                    <img
                        src="/Images/Artwork/Skyward/Skyward-Sentinel-Original.jpg"
                        alt="Crested Serpent Eagle"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>

            {/* 2. SPECS BAR */}
            <div className="border-y border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
                        <div>
                            <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Edition Size</span>
                            <span className="text-sm font-medium">50 + 2 Artist Proofs</span>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Medium</span>
                            <span className="text-sm font-medium">Hahnemühle Photo Rag®</span>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Year</span>
                            <span className="text-sm font-medium">2023</span>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase text-gray-400 tracking-widest mb-1">Origin</span>
                            <span className="text-sm font-medium">Ella, Sri Lanka</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. NARRATIVE TRIPTYCH (Quick Intro) */}
            <div className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    <div className="flex flex-col items-start">
                        <Sun size={24} className="text-gray-400 mb-4" strokeWidth={1} />
                        <h3 className="text-lg font-medium text-black mb-3">The Moment</h3>
                        <p className="text-sm text-gray-500 leading-7 font-light">
                            High above Ella’s sweeping valleys, the clouds thinned to reveal a single tree snag. At its peak stood a Crested Serpent Eagle—still, composed, and utterly commanding.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <MapPin size={24} className="text-gray-400 mb-4" strokeWidth={1} />
                        <h3 className="text-lg font-medium text-black mb-3">The Place</h3>
                        <p className="text-sm text-gray-500 leading-7 font-light">
                            Ella, in Sri Lanka’s central highlands, is a world shaped by wind and mist. From the vantage points around Ella Rock, raptors use thermal currents as watchtowers.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Eye size={24} className="text-gray-400 mb-4" strokeWidth={1} />
                        <h3 className="text-lg font-medium text-black mb-3">The Subject</h3>
                        <p className="text-sm text-gray-500 leading-7 font-light">
                            The Crested Serpent Eagle (Spilornis cheela) is an icon of the skies. With its striking yellow cere and eyes, it specializes in hunting snakes.
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. STORY OF THE SUBJECT (New Deep Dive Section) */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/Images/Artwork/Skyward/Skyward-Sentinel-Detail-Crop.jpg"
                                alt="Eagle Eye Detail"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
                            Story of the Subject
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                            An Icon of the <br /> Highland Skies
                        </h2>
                        <p className="text-gray-600 font-light text-lg leading-relaxed">
                            The Crested Serpent Eagle is not a bird that hides. It is a raptor of presence. In the dense canopy of the Sri Lankan highlands, spotting one requires patience, but when they ascend to the thermal currents, they own the sky.
                        </p>
                        <p className="text-gray-600 font-light text-lg leading-relaxed">
                            For this piece, the objective was not just to document the species, but to capture its temperament. The intense yellow cere (the skin around the beak) and the piercing geometric eye create a focal point that feels almost ancient. It is a look that acknowledges the viewer, bridging the gap between the wild and the observer.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. STORY OF THE PLACE (New Deep Dive Section) */}
            <section className="py-32 px-6 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
                            Story of the Place
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                            Mist, Wind, and <br /> The Ella Gap
                        </h2>
                        <p className="text-gray-600 font-light text-lg leading-relaxed">
                            Ella is unique in its geography. A gap in the central mountain range creates a wind tunnel that brings rapid weather changes—bright sun one moment, dense mist the next. This dynamic environment creates a soft, diffused lighting scenario that is a dream for fine art photography.
                        </p>
                        <p className="text-gray-600 font-light text-lg leading-relaxed">
                            "Skyward Sentinel" was captured during a brief window of clarity. The background—a soft, almost painted blue—is the result of atmospheric haze at high altitude, stripping away the distraction of the valley floor below and isolating the subject in a sea of air.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop"
                                alt="Sri Lanka Highlands"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. INTERIOR VISUALIZATION (Revamped & Rounded) */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Left: Text & Context */}
                        <div className="w-full lg:w-1/3 space-y-8">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
                                Interior Visualization
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-serif text-black leading-tight">
                                Bring Life to <br /> Your Space.
                            </h2>
                            <p className="text-gray-600 font-light text-lg leading-relaxed">
                                Whether anchoring a minimalist living room or adding depth to a private study, "Skyward Sentinel" serves as a window to the wild.
                            </p>

                            {/* High Contrast Button */}
                            <Button onClick={scrollToForm} className="bg-white text-black border border-gray-200 shadow-xl hover:shadow-2xl hover:bg-gray-50 hover:scale-[1.02] transition-all px-8 py-4">
                                Visualize In Your Room
                            </Button>
                        </div>

                        {/* Right: Lifestyle Grid - ROUNDED, NO TEXT OVERLAYS */}
                        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Main Large Image */}
                            <div className="md:col-span-2 relative h-[450px] rounded-3xl overflow-hidden shadow-lg group">
                                <img
                                    src="/Images/Artwork/Skyward/Skyward-Sentinel-couch.jpg"
                                    alt="Living Room Context"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Secondary Image 1 */}
                            <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-lg group">
                                <img
                                    src="/Images/Artwork/Skyward/Skyward-Sentinel- Bench.jpg"
                                    alt="Office Context"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Secondary Image 2 */}
                            <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-lg group">
                                <img
                                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
                                    alt="Detail Texture"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 7. THE PHYSICAL PIECE (Rounded Images) */}
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
                                    <h4 className="font-medium text-black">Hahnemühle Photo Rag®</h4>
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

            {/* 8. TECHNICAL & EMOTIONAL (Rounded Image) */}
            <div className="bg-[#111] text-white py-24 rounded-3xl mx-6 mb-24">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                    {/* Left Text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-serif mb-2 text-white">Technically Unique.</h2>
                        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-gray-500 italic">Emotionally Resonant.</h2>

                        <div className="space-y-12 max-w-lg">
                            <div>
                                <span className="text-[#C4A484] text-lg font-mono mb-2 block">01</span>
                                <h3 className="text-xl font-medium mb-3">Minimalist Composition</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    A stark branch and open sky bring full attention to the raptor. No foliage, no clutter—just the eagle and the sky.
                                </p>
                            </div>
                            <div>
                                <span className="text-[#C4A484] text-lg font-mono mb-2 block">02</span>
                                <h3 className="text-xl font-medium mb-3">Direct Eye Contact</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    The eagle’s gaze pulls the viewer into the frame. A moment of connection across species lines.
                                </p>
                            </div>
                        </div>

                        <div className="mt-20 pt-10 border-t border-gray-800 flex items-center">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold mr-4">MC</div>
                            <div>
                                <h4 className="font-medium text-white">Matthew Cicanese</h4>
                                <span className="text-[10px] uppercase tracking-wider text-gray-500">National Geographic Explorer</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative border border-gray-800 p-4 rounded-3xl">
                            <img
                                src="/Images/Artwork/Skyward/Skyward-Sentinel-Detail-Crop.jpg"
                                alt="Detail Crop"
                                className="shadow-2xl rounded-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* 9. ACQUISITION FORM */}
            <div id="acquire-form" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Form Context */}
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
                            {/* ADDED PAYMENT PLANS */}
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

                    {/* The Form */}
                    <form className="space-y-8 bg-gray-50 p-10 rounded-3xl shadow-sm">
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

        </div>
    );
};
