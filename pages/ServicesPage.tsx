import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';

export const ServicesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <div className="bg-gray-50 py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">
            Artist Services
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-black mb-8 leading-tight">
            Education, Advocacy, <br/> and Connection.
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Beyond the gallery walls, I offer specialized services that bring the ethos of "The World Unseen" into corporate, educational, and public spaces.
          </p>
        </div>
      </div>

      {/* 2. SPEAKING */}
      <section id="speaking" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <img 
               src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop" 
               alt="Keynote Speaking" 
               className="rounded-3xl shadow-xl w-full"
             />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-3 text-black">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] block">Service</span>
              <h2 className="text-4xl font-serif">Speaking</h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              As a National Geographic Explorer and compelling storyteller, I weave together adventures from the field with profound insights on overcoming adversity to inspire audiences.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex flex-col">
                <span className="font-medium text-black">Evening with the Artist</span>
                <span className="text-sm text-gray-500">Intimate gallery talks and visual presentations.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-black">Keynote Speeches</span>
                <span className="text-sm text-gray-500">Inspirational addresses for conferences and organizations.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-black">Panel Discussions</span>
                <span className="text-sm text-gray-500">Expert commentary on conservation, art, and accessibility.</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button variant="outline" to="/contact">Book Matthew</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ART CONSULTING & "ART IN ACTION" */}
      <section id="consulting" className="py-24 px-6 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-3 text-black">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] block">Service</span>
              <h2 className="text-4xl font-serif">Art Consulting</h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              For corporate organizations, I offer my signature <strong>"Art in Action"</strong> program. Join the Pilot-to-Partner initiative to integrate fine art into your Corporate Social Responsibility (CSR) strategy.
            </p>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              I help organizations build meaningful collections that raise awareness for critical causes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-medium text-black mb-1">Accessibility & Health</h4>
                <p className="text-xs text-gray-500">Disability, Neurodiversity, & Chronic Condition Support</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-medium text-black mb-1">Conservation</h4>
                <p className="text-xs text-gray-500">Wildlife Preservation & Environmental Awareness</p>
              </div>
            </div>
            <div className="pt-4">
              <Button className="bg-black text-white" to="/contact">Inquire About Consulting</Button>
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
               alt="Corporate Office Art" 
               className="rounded-3xl shadow-xl w-full"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs hidden md:block">
               <p className="text-sm font-serif italic text-gray-500">"Art is not just decoration; it is a declaration of values."</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. WORKSHOPS */}
      <section id="workshops" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <img 
               src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1200&auto=format&fit=crop" 
               alt="Workshop Field" 
               className="rounded-3xl shadow-xl w-full"
             />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-3 text-black">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] block">Service</span>
              <h2 className="text-4xl font-serif">Workshops</h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Hands-on learning experiences designed to unlock creativity and foster a deeper connection with the visual world.
            </p>
            <div className="space-y-6 pt-4">
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-medium text-black">Corporate Creative Wellness</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Team-building sessions that use photography principles to teach mindfulness, perspective-taking, and creative problem solving in the workplace.
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-medium text-black">Wilderness Field Workshops</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Immersive expeditions into nature. Learn technical macro and landscape skills while exploring distinct ecosystems.
                </p>
              </div>
            </div>
            <div className="pt-4">
              <Button variant="outline" to="/contact">Inquire About Workshops</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WELLNESS RETREATS */}
      <section id="retreats" className="py-24 px-6 bg-[#1a1a1a] text-white rounded-3xl mx-4 md:mx-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] block">Service</span>
           <h2 className="text-4xl md:text-5xl font-serif">Wellness Retreats</h2>
           <h3 className="text-xl md:text-2xl font-serif italic text-gray-400">
             "Less about the click, more about what clicks."
           </h3>
           <p className="text-lg font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
             These retreats are designed for reflection and connection. We step away from the technical obsession of gear and settings to focus on the meditative act of seeing. Perfect for creatives seeking renewal and deeper alignment with their work.
           </p>
           <div className="pt-8">
             <Button className="bg-white text-black hover:bg-gray-200 border-none" to="/contact">
               View Upcoming Retreats
             </Button>
           </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-3xl font-serif mb-8">Ready to collaborate?</h2>
        <Button to="/contact">Get in Touch</Button>
      </section>
    </div>
  );
};