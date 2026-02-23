import React from 'react';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

const ReadMoreLink: React.FC = () => (
  <a href="#" className="inline-flex items-center text-blue-600 italic underline decoration-blue-300 hover:text-blue-800 hover:decoration-blue-800 transition-colors mt-3 text-sm font-serif group">
    Read more <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
  </a>
);

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero / Intro Block */}
      <section className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 shadow-xl border-4 border-gray-50">
          <img
            src="/Images/Brand/HEADSHOT-as-of-NOV-2025.jpg"
            alt="Matthew Cicanese"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-light mb-4">Matthew Cicanese</h1>
        <p className="text-xl md:text-2xl font-light text-gray-500 italic mb-8 max-w-2xl font-serif">
          "Unveiling the hidden symphonies of our world through texture, light, and scale."
        </p>
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-8">
          Fine-Art Macro & Landscape Photography
        </p>

        {/* Updated to link to /about/press-kit */}
        <Button variant="outline" to="/about/press-kit">Download Press Kit</Button>
      </section>

      {/* 2. Story Section (Split Layout) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="/Images/Brand/FIELD-SHOT-Matthew-on-ground-palmettos.jpg"
                alt="Artist in the field"
                className="w-full shadow-lg rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-md max-w-xs hidden md:block rounded-xl">
                <p className="font-serif italic text-gray-600 text-lg">"To look closely is to love."</p>
              </div>
            </div>
            <div className="mt-8 text-xs text-gray-400 text-right">Exploring the Choco Cloud Forest, Ecuador</div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-3xl font-light mb-6">The Story</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">A Unique Lens</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  My life is a testament to turning adversity into strength. Surviving meningitis as an infant resulted in hearing loss and vision impairment, yet instilled in me an unyielding resilience. Living with neurodivergence has gifted me a unique lens through which I view the world. Discovering photography at the age of 14 provided a powerful tool for expression and connection, transcending these sensory barriers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Capturing Feeling, Not Just Form</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  Photography, for me, has never been about capturing what something looks like—it is about capturing what it feels like. From the moss-laden forests of the Pacific Northwest to the vibrant textures of tropical ecosystems, my work seeks to bridge the gap between the human observer and the often-overlooked details of nature. My affinity for nature, coupled with my sensory experiences, has led me to form deep connections with the minutiae of life.
                </p>
                <p className="text-gray-600 leading-relaxed font-light text-lg mt-4">
                  Every image in these collections is a result of patience. Waiting for the light to hit a fern just right, or for the fog to clear over a mountain pass. It is a meditative process that I hope translates into the peace you feel when viewing the work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Empowering Others</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  Beyond photography, as a DEIA speaker, workshop facilitator, and transformative mentor, my journey is one of discovery and transformation. I am dedicated to helping others embrace their uniqueness, blending innovative technology with inclusive practices to create spaces where diverse minds can collaborate, innovate, and thrive.
                </p>
              </div>
            </div>

            {/* Replaced broken image link with stable CSS signature */}
            <div className="pt-8">
              <span className="font-serif italic text-4xl text-gray-800 tracking-wide">Matthew Cicanese</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Editorial Covers */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Featured Editorial Covers</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">Selected cover features highlighting conservation narratives and editorial highlights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="/Images/Press/COVER-WWF-Magazine-Cicanese-Matthew-October-2018.jpg.jpg" alt="World Wildlife Magazine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl" />
            </div>
            <h3 className="text-xl font-medium">World Wildlife Magazine</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Cover Feature • 2018</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
            <ReadMoreLink />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="/Images/Press/COVER-ConBio-Journal-Cicanese-Matthew-October-2024.jpg" alt="Conservation Biology" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl" />
            </div>
            <h3 className="text-xl font-medium">Conservation Biology</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Journal Cover • 2024</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <ReadMoreLink />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop" alt="Featured Publication Placeholder" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hover:shadow-xl" />
            </div>
            <h3 className="text-xl font-medium">Featured Publication</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Editorial Cover • TBA</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
            <ReadMoreLink />
          </div>
        </div>
      </section>

      {/* 3. Solo Exhibitions */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Solo Exhibitions</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">A selection of curated individual showcases defining the artist's career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="/EXHIBITIONS/Solo/EXHIBITION_--_TPA_(Tampa_Intl_Airport).jpg" alt="Textures of Ecuador" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">Tampa International Airport</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Solo Exhibit • 2020</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
            <ReadMoreLink />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="/EXHIBITIONS/Solo/EXHIBITION_--_Fernbank_Museum.JPG" alt="The World Unseen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">Fernbank Natural History Museum</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Atlanta, Georgia • 2021</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <ReadMoreLink />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="/EXHIBITIONS/Solo/EXHIBITION_--_KWU.png" alt="Silent Giants" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">Kansas Wesleyan University</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Salina, Kansas • 2023</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
            <ReadMoreLink />
          </div>
        </div>
      </section>

      {/* 4. Group Exhibitions */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50 rounded-3xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Group Exhibitions</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">Collaborative showcases featuring works alongside contemporaries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white">
              <img src="/EXHIBITIONS/Group/EXHIBITION_--_Power_Plant_Gallery_(Duke_MFA).jpg" alt="Voices of the Wild" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">MFA Thesis Exhibition</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Power Plant Gallery, Duke Univ. • 2023</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <ReadMoreLink />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white">
              <img src="/EXHIBITIONS/Group/EXHIBITION_--_Morean.jpg" alt="Future of Nature" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">Fresh Squeezed 2</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Morean Arts Center, St. Pete • 2021</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque.
            </p>
            <ReadMoreLink />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white">
              <img src="/EXHIBITIONS/Group/EXHIBITION -- St. Louis University Art Museum (Oak Treehopper - Matthew Cicanese).jpg" alt="St. Louis University Art Museum" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">St. Louis University Art Museum</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">St. Louis, Missouri</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
            </p>
            <ReadMoreLink />
          </div>
        </div>
      </section>

      {/* 5. Awards & Accolades */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Awards & Accolades</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">International recognition for contributions to fine art photography.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="/Images/Brand/FIELDSHOT-Iceland-03.jpg" alt="National Geographic Young Explorer Grant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">National Geographic Young Explorer</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Grant • Iceland Expedition 2016</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
            <ReadMoreLink />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1629814493399-53b92a394a4c?q=80&w=800&auto=format&fit=crop" alt="Environmental Photographer of the Year Finalist" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">Environmental Photographer <br /> of the Year Finalist</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Finalist</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
            </p>
            <ReadMoreLink />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1523906630133-06c36b4b32d1?q=80&w=800&auto=format&fit=crop" alt="Forbes 30 Under 30" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl font-medium">Forbes 30 Under 30</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Art and Style • 2021</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <ReadMoreLink />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" to="/about/press-kit">View Full CV</Button>
        </div>
      </section>

      {/* 6. Press & Contact */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-2xl font-light">For Curators & Press</h3>
            <p className="text-gray-400 font-light max-w-md">
              Download the full electronic press kit, including high-res headshots, artist biography, and exhibition history.
            </p>
            {/* Updated to outline-white for hover visibility */}
            <Button variant="outline-white" to="/about/press-kit">
              Access Press Area
            </Button>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-6 md:border-l md:border-gray-800 md:pl-12">
            <h3 className="text-2xl font-light">Get in Touch</h3>
            <p className="text-gray-400 font-light max-w-md">
              Interested in a commission or purchasing a print? Reach out directly to my studio.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Contact Studio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};