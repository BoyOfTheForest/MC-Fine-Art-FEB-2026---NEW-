import React from 'react';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const ReadMoreLink: React.FC = () => (
  <a href="#" className="inline-flex items-center text-blue-600 italic underline decoration-blue-300 hover:text-blue-800 hover:decoration-blue-800 transition-colors mt-3 text-sm font-serif group">
    Read more <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
  </a>
);

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero / Intro Block with Parallax */}
      <section className="relative pt-32 pb-32 px-6 w-full flex flex-col items-center text-center overflow-hidden group">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[2000ms] group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=2000")' }}
        />
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000 group-hover:bg-black/50" />
        
        <Reveal delay={0} className="relative z-10 flex flex-col items-center mt-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 shadow-2xl border-4 border-white/10">
            <img
              src="/Images/Brand/HEADSHOT-as-of-NOV-2025.jpg"
              alt="Matthew Cicanese"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg">Matthew Cicanese</h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 italic mb-8 max-w-2xl font-serif">
            "Unveiling the hidden symphonies of our world through texture, light, and scale."
          </p>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#C4A484] mb-8">
            Fine-Art Macro & Landscape Photography
          </p>

          <Button className="bg-white text-black hover:bg-gray-200" to="/about/press-kit">Download Press Kit</Button>
        </Reveal>
      </section>

      {/* 2. Story Section (Split Layout) */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal delay={200} className="order-2 md:order-1">
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/Images/Brand/FIELD-SHOT-Matthew-on-ground-palmettos.jpg"
                  alt="Artist in the field"
                  className="w-full transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-md max-w-xs hidden md:block rounded-xl">
                <p className="font-serif italic text-gray-600 text-lg">"To look closely is to love."</p>
              </div>
            </div>
            <div className="mt-12 text-xs text-gray-400 text-right uppercase tracking-widest">Exploring the Choco Cloud Forest, Ecuador</div>
          </Reveal>

          <Reveal delay={0} className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black">The Story</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">A Unique Lens</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  My life is a testament to turning adversity into strength. Surviving meningitis as an infant resulted in hearing loss and vision impairment, yet instilled in me an unyielding resilience. Living with neurodivergence has gifted me a unique lens through which I view the world. Discovering photography at the age of 14 provided a powerful tool for expression and connection, transcending these sensory barriers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Capturing Feeling, Not Just Form</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg mb-4">
                  Photography, for me, has never been about capturing what something looks like—it is about capturing what it feels like. From the moss-laden forests of the Pacific Northwest to the vibrant textures of tropical ecosystems, my work seeks to bridge the gap between the human observer and the often-overlooked details of nature. My affinity for nature, coupled with my sensory experiences, has led me to form deep connections with the minutiae of life.
                </p>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  Every image in these collections is a result of patience. Waiting for the light to hit a fern just right, or for the fog to clear over a mountain pass. It is a meditative process that I hope translates into the peace you feel when viewing the work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Empowering Others</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  Beyond photography, as a DEIA speaker, workshop facilitator, and transformative mentor, my journey is one of discovery and transformation. I am dedicated to helping others embrace their uniqueness, blending innovative technology with inclusive practices to create spaces where diverse minds can collaborate, innovate, and thrive.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <span className="font-serif italic text-4xl text-black tracking-wide">Matthew Cicanese</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Editorial Covers */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-white">
        <Reveal delay={0} className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4 block">Publications</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black">Featured Editorial Covers</h2>
          <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">Selected cover features highlighting conservation narratives and editorial highlights.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal delay={100} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 group shadow-md">
              <img src="/Images/Press/COVER-WWF-Magazine-Cicanese-Matthew-October-2018.jpg.jpg" alt="World Wildlife Magazine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Cover Feature • 2018</p>
              <h3 className="text-2xl font-serif mb-3 text-black">World Wildlife Magazine</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
          <Reveal delay={200} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 group shadow-md">
              <img src="/Images/Press/COVER-ConBio-Journal-Cicanese-Matthew-October-2024.jpg" alt="Conservation Biology" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Journal Cover • 2024</p>
              <h3 className="text-2xl font-serif mb-3 text-black">Conservation Biology</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
          <Reveal delay={300} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 group shadow-md">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop" alt="Featured Publication Placeholder" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Editorial Cover • TBA</p>
              <h3 className="text-2xl font-serif mb-3 text-black">Featured Publication</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Solo Exhibitions (with small parallax BG shift between sections) */}
      <section className="py-32 relative overflow-hidden group border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal delay={0} className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4 block">Showcases</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black">Solo Exhibitions</h2>
            <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">A selection of curated individual showcases defining the artist's career.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Reveal delay={100} className="flex flex-col space-y-6">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-md group-hover/card">
                <img src="/EXHIBITIONS/Solo/EXHIBITION_--_TPA_(Tampa_Intl_Airport).jpg" alt="Textures of Ecuador" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Solo Exhibit • 2020</p>
                <h3 className="text-2xl font-serif mb-3 text-black">Tampa International Airport</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ReadMoreLink />
              </div>
            </Reveal>
            <Reveal delay={200} className="flex flex-col space-y-6">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-md group-hover/card">
                <img src="/EXHIBITIONS/Solo/EXHIBITION_--_Fernbank_Museum.JPG" alt="The World Unseen" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Atlanta, Georgia • 2021</p>
                <h3 className="text-2xl font-serif mb-3 text-black">Fernbank Natural History Museum</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ReadMoreLink />
              </div>
            </Reveal>
            <Reveal delay={300} className="flex flex-col space-y-6">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-md group-hover/card">
                <img src="/EXHIBITIONS/Solo/EXHIBITION_--_KWU.png" alt="Silent Giants" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Salina, Kansas • 2023</p>
                <h3 className="text-2xl font-serif mb-3 text-black">Kansas Wesleyan University</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
                </p>
                <ReadMoreLink />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Group Exhibitions */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-12 hidden md:block border border-gray-100 shadow-sm">
        <Reveal delay={0} className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4 block">Collaborations</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black">Group Exhibitions</h2>
          <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">Collaborative showcases featuring works alongside contemporaries.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal delay={100} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-md">
              <img src="/EXHIBITIONS/Group/EXHIBITION_--_Power_Plant_Gallery_(Duke_MFA).jpg" alt="Voices of the Wild" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Power Plant Gallery, Duke Univ. • 2023</p>
              <h3 className="text-2xl font-serif mb-3 text-black">MFA Thesis Exhibition</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
          <Reveal delay={200} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-md">
              <img src="/EXHIBITIONS/Group/EXHIBITION_--_Morean.jpg" alt="Future of Nature" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Morean Arts Center, St. Pete • 2021</p>
              <h3 className="text-2xl font-serif mb-3 text-black">Fresh Squeezed 2</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
          <Reveal delay={300} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-md">
              <img src="/EXHIBITIONS/Group/EXHIBITION--St-Louis-University-Art-Museum.jpg" alt="St. Louis University Art Museum" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">St. Louis, Missouri</p>
              <h3 className="text-2xl font-serif mb-3 text-black">St. Louis University Art Museum</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Awards & Accolades */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal delay={0} className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4 block">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black">Awards & Accolades</h2>
          <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">International recognition for contributions to fine art photography.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal delay={100} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-md">
              <img src="/Images/Brand/FIELDSHOT-Iceland-03.jpg" alt="National Geographic Young Explorer Grant" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Grant • Iceland Expedition 2016</p>
              <h3 className="text-2xl font-serif mb-3 text-black">National Geographic Young Explorer</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
          <Reveal delay={200} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-md">
              <img src="https://images.unsplash.com/photo-1629814493399-53b92a394a4c?q=80&w=800&auto=format&fit=crop" alt="Environmental Photographer of the Year Finalist" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Finalist</p>
              <h3 className="text-2xl font-serif mb-3 text-black">Environmental Photographer <br/> of the Year</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
          <Reveal delay={300} className="flex flex-col space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-md">
              <img src="https://images.unsplash.com/photo-1523906630133-06c36b4b32d1?q=80&w=800&auto=format&fit=crop" alt="Forbes 30 Under 30" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484] mb-2">Art and Style • 2021</p>
              <h3 className="text-2xl font-serif mb-3 text-black">Forbes 30 Under 30</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.
              </p>
              <ReadMoreLink />
            </div>
          </Reveal>
        </div>

        <Reveal delay={400} className="mt-20 text-center">
          <Button variant="outline" to="/about/press-kit">View Full CV & Press Kit</Button>
        </Reveal>
      </section>

      {/* 6. Press & Contact */}
      <section className="py-32 bg-black text-white relative overflow-hidden group">
        {/* Adds a slight dark parallax BG to the footer */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed opacity-20 transition-transform duration-[3000ms] group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=2000")' }}
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left relative z-10">
          <Reveal delay={0} className="flex flex-col items-center md:items-start space-y-8">
            <h3 className="text-4xl font-serif">For Curators & Press</h3>
            <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
              Download the full electronic press kit, including high-res headshots, artist biography, and exhibition history.
            </p>
            <Button variant="outline-white" to="/about/press-kit">
              Access Press Area
            </Button>
          </Reveal>
          <Reveal delay={200} className="flex flex-col items-center md:items-start space-y-8 md:border-l md:border-gray-800 md:pl-16">
            <h3 className="text-4xl font-serif">Get in Touch</h3>
            <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
              Interested in a commission or purchasing a print? Reach out directly to my studio.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Contact Studio
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};