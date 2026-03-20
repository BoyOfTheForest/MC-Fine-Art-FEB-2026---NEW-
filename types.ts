
export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
  menuType?: 'standard' | 'mega';
}

export interface CollectionItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface ContentEntry {
  slug: string;
  title: string;
  description: string;
  cta: string;
  imageUrl?: string;
}

// 1. CONTENT DATA (Used for rendering the Series Landing Page with all deep details)
export const SERIES_CONTENT_DATA: NavItem[] = [
  {
    label: 'North America',
    children: [
      {
        label: 'East',
        children: [
          { label: 'Appalachia', path: '/series/north-america/east/appalachia' },
          { label: 'Florida', path: '/series/north-america/east/florida' },
        ]
      },
      {
        label: 'West',
        children: [
          { label: 'Colorado', path: '/series/north-america/west/colorado' },
          { label: 'California', path: '/series/north-america/west/california' },
          { label: 'Oregon', path: '/series/north-america/west/oregon' },
          { label: 'Washington', path: '/series/north-america/west/washington' },
        ]
      },
      {
        label: 'Canada',
        children: [
          {
            label: 'British Columbia',
            children: [
              { label: 'Haida Gwaii', path: '/series/north-america/canada/bc/haida-gwaii' }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'South America',
    children: [
       {
        label: 'Ecuador',
        children: [
          { label: 'Choco Cloud Forest', path: '/series/south-america/ecuador/choco' }
        ]
      }
    ]
  },
  {
    label: 'Europe',
    children: [
      { label: 'Iceland', path: '/series/iceland' },
      {
        label: 'Spain',
        children: [
          { label: 'Cadiz', path: '/series/spain/cadiz' },
          { label: 'Barcelona', path: '/series/spain/barcelona' },
          {
            label: 'Canary Islands',
            children: [
              { label: 'Tenerife', path: '/series/spain/canary/tenerife' },
              { label: 'La Palma', path: '/series/spain/canary/la-palma' },
              { label: 'Lanzarote', path: '/series/spain/canary/lanzarote' },
            ]
          }
        ]
      },
      {
        label: 'Italy',
        children: [
          { label: 'Venice', path: '/series/italy/venice' },
          {
            label: 'Tuscany Region',
            children: [
              { label: 'Hill Town 1', path: '/series/italy/tuscany/1' },
              { label: 'Hill Town 2', path: '/series/italy/tuscany/2' },
              { label: 'Hill Town 3', path: '/series/italy/tuscany/3' },
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Asia',
    children: [
      { label: 'Sri Lanka', path: '/series/sri-lanka' },
      {
        label: 'Thailand',
        children: [
          { label: 'Bangkok', path: '/series/thailand/bangkok' }
        ]
      },
    ]
  }
];

// SERIES DESCRIPTIONS (Rock Flipper voice)
export const SERIES_DESCRIPTIONS: Record<string, ContentEntry> = {
  'north-america': {
    slug: 'north-america',
    title: 'North America',
    description: 'From the heavy, humid stillness of the Appalachian damp to the sharp, biting fog of the Pacific Northwest coast. These regions taught me that you don\'t have to cross an ocean to find an environment that forces you to stop scrolling and start breathing. These pieces bring the raw, unapologetic scale of our own backyards directly into your daily orbit.',
    cta: 'Which landscape feels like home to your restless mind? Explore the continent.',
  },
  'south-america': {
    slug: 'south-america',
    title: 'South America',
    description: 'Deep in the Andean Choco cloud forest, the humidity hangs so thick it physically muffles the noise of your own thoughts. I ventured into these vanishing ecosystems to capture the kind of primal, unfiltered wild that demands your absolute attention. Hanging these works is a daily reminder of a world that thrives entirely without our permission.',
    cta: 'Breathe in the heavy canopy. Step into the Choco.',
  },
  'europe': {
    slug: 'europe',
    title: 'Europe',
    description: 'We often romanticize Europe for its architecture, but its true power lies in the ancient, violent earth resting just beneath the pavement. Whether it\'s the volcanic, moss-covered breath of Iceland or the quiet, enduring stone of the Mediterranean, these pieces capture a landscape that has survived centuries of chaos. They bring a deep, immovable anchor into the center of a frantic life.',
    cta: 'Let the ancient earth ground your space. Browse the series.',
  },
  'asia': {
    slug: 'asia',
    title: 'Asia',
    description: 'Navigating the dense, vibrant ecosystems of Sri Lanka and Thailand feels like stepping into a living, breathing lung. I went looking for the quietest corners of these chaotic, thriving environments, isolating the moments where the jungle simply stands still. These large-scale works pull the intense, meditative heat of the East straight through your walls.',
    cta: 'Find your focus in the deep jungle. Explore the East.',
  },
};

// COLLECTIONS CONTENT DATA (Rock Flipper voice)
export const COLLECTIONS_CONTENT_DATA: ContentEntry[] = [
  {
    slug: 'earth-up-close',
    title: 'Earth Up Close',
    description: 'When the noise of the world gets too loud, I get on my hands and knees to find the quiet logic of the micro-world. This collection takes the overlooked, chaotic details of the forest floor and expands them into massive, immersive anchors for your space. It is a daily, physical reminder that true balance is often hiding right under our feet.',
    cta: 'Step out of the noise and explore the sanctuary of the small.',
    imageUrl: 'https://cicanese.my.canva.site/art/_assets/media/084e8cdec801c84371f6ba94d5df4000.jpg',
  },
  {
    slug: 'symphonies-in-scale',
    title: 'Symphonies in Scale',
    description: 'The modern world is full of chaotic noise, but if you look closely enough, nature is playing a perfectly composed rhythm. By blowing up the microscopic architecture of lichens to the size of a living room wall, this collection reveals the deep, vibrating geometry of survival. It is for the fellow rock flipper who needs their environment to feel incredibly grounded, ancient, and deliberate.',
    cta: 'Silence the room. Discover the architecture of the overlooked.',
    imageUrl: 'https://picsum.photos/id/250/1600/1200',
  },
  {
    slug: 'ghosts',
    title: 'Ghosts',
    description: 'We spend so much time moving fast that we miss the quiet echoes left behind in the landscapes around us. These pieces isolate the ephemeral: the mist, the shadows, the fleeting encounters, turning them into permanent anchors for a restless mind. They are for the collector who needs their walls to hold a profound, heavy stillness.',
    cta: 'What forgotten quiet are you waiting to remember? Step into the mist.',
    imageUrl: 'https://cicanese.my.canva.site/art/_assets/media/aad892e5eba653ffd6386c355ea82d63.jpg',
  },
  {
    slug: 'memento-mori',
    title: 'Memento Mori',
    description: 'We are conditioned to look away from decay, but there is a profound, grounding peace in acknowledging the cycle of time. These works capture the beautiful, quiet surrender of the natural world, offering a space to pause and drop the heavy armor of everyday life. They are a daily invitation to stop fighting the clock and simply exist in the present moment.',
    cta: 'Drop your armor. Find the beauty in the pause.',
    imageUrl: 'https://cicanese.my.canva.site/art/_assets/media/5b197909a005c10a51b538d2a7a70009.jpg',
  },
  {
    slug: 'the-digital-dialogues',
    title: 'The Digital Dialogues',
    description: 'Our lives are a constant tug-of-war between the organic world we crave and the digital systems we navigate. This collection visualizes that exact friction, blending the structured logic of technology with the unruly beauty of nature. It\'s a visual exhale for the high-performing brain trying to find harmony in the crossfire of a hyper-connected life.',
    cta: 'Where do you find your balance? Explore the intersection.',
    imageUrl: 'https://cicanese.my.canva.site/art/_assets/media/9c5d799ec66e2bebb58b211494dfb632.jpg',
  },
  {
    slug: 'dilmah-conservation',
    title: 'Dilmah Conservation',
    description: 'True conservation isn\'t just about observing the wild; it\'s about acknowledging our shared space within it. This partnership collection brings you face-to-face with the raw, vanishing ecosystems of Sri Lanka, transforming a distant reality into an intimate, life-sized presence in your home. It\'s for the sanctuary builder who knows that preserving the wild outside helps preserve the peace inside.',
    cta: 'Meet the gaze of the wild and bring the canopy indoors.',
    imageUrl: 'https://cicanese.my.canva.site/art/_assets/media/a5970cb72dcdd52a108f0e1e413b9087.jpg',
  },
];

// SUBJECTS CONTENT DATA (Rock Flipper voice)
export const SUBJECTS_CONTENT_DATA: ContentEntry[] = [
  {
    slug: 'abstracts',
    title: 'Abstracts',
    description: 'When my ADHD brain is spinning, literal subjects often carry too much cognitive baggage. I capture these wild, natural geometries and unrecognizable textures because they offer an escape from logic: a place where the mind doesn\'t have to solve a problem. They are pure, visual sanctuaries designed to let an overstimulated brain finally power down.',
    cta: 'Stop solving. Start breathing. Explore the abstracts.',
  },
  {
    slug: 'landscapes',
    title: 'Landscapes',
    description: 'A true landscape isn\'t a backdrop; it\'s an environment that physically alters your heart rate when you step inside it. I stitch these massive, panoramic worlds together so you can\'t simply glance at them and walk away; they command the room. They are built for the collector who needs their home to feel as expansive and unbothered as the horizon.',
    cta: 'Expand your walls. Find your horizon.',
  },
  {
    slug: 'wildlife',
    title: 'Wildlife',
    description: 'We spend so much of our lives talking past each other, which makes silent, unscripted eye contact with a wild creature so completely arresting. I don\'t shoot wildlife as scientific specimens; I capture them as equals sharing this chaotic rock we live on. Hanging these life-sized encounters in your sanctuary forces a daily, grounding connection with a world totally untethered to our own.',
    cta: 'Meet their gaze. Reconnect with the wild.',
  },
  {
    slug: 'waterscapes',
    title: 'Waterscapes',
    description: 'Water is the great equalizer: it can carve through solid rock or hold a single, floating lotus in perfect, mirror-like stillness. I photograph water to capture that duality, freezing the exact tension between chaos and absolute calm. These pieces bring a fluid, meditative rhythm into environments that are otherwise rigid with corporate or daily stress.',
    cta: 'Let the current wash the noise away. Dive in.',
  },
  {
    slug: 'nightscapes',
    title: 'Nightscapes',
    description: 'When the sun drops, the frantic pace of human expectation completely evaporates. Standing alone in the pitch black, waiting for the starlight to paint the landscape, is my ultimate version of touching grass. Bringing these deep, indigo voids into your space provides an immediate, physiological exhale, a reminder that the universe is vast, and our daily emergencies are actually quite small.',
    cta: 'Turn off the lights. Look up at the dark.',
  },
  {
    slug: 'architecture-cultural-sites',
    title: 'Architecture & Cultural Sites',
    description: 'There is a haunting, heavy quiet found in places where human history and nature have finally called a truce. I look for the spaces where the built world surrenders to time, capturing the deep resilience of stone, wood, and rust. These pieces are for the builder who needs a daily reminder that the most enduring things are often the ones we let go of.',
    cta: 'What history do you want your walls to hold? Step into the ruins.',
  },
];

// 2. NAVIGATION DATA (Simplified for the UI Menu)
export const NAVIGATION_DATA: NavItem[] = [
  {
    label: 'About',
    path: '/about',
    menuType: 'standard',
    children: [
      { label: 'Meet Matthew', path: '/about/meet-matthew' },
      { label: 'Services', path: '/about/services' },
      { label: 'Press Kit', path: '/about/press-kit' },
      { label: 'News', path: '/about/news' },
      { label: 'Contact', path: '/contact' },
    ]
  },
  {
    label: 'Collections',
    path: '/collections',
    menuType: 'standard',
    children: [
      { label: 'Browse All', path: '/collections' },
      { label: 'Earth Up Close', path: '/collections/earth-up-close' },
      { label: 'Symphonies in Scale', path: '/collections/symphonies-in-scale' },
      { label: 'Ghosts', path: '/collections/ghosts' },
      { label: 'Memento Mori', path: '/collections/memento-mori' },
      { label: 'The Digital Dialogues', path: '/collections/the-digital-dialogues' },
      { label: 'Dilmah Conservation', path: '/collections/dilmah-conservation' },
    ]
  },
  {
    label: 'Series',
    path: '/series',
    menuType: 'standard',
    children: [
      { label: 'Browse All', path: '/series' },
      { label: 'North America', path: '/series#north-america' },
      { label: 'South America', path: '/series#south-america' },
      { label: 'Europe', path: '/series#europe' },
      { label: 'Asia', path: '/series#asia' },
    ]
  },
  {
    label: 'Subjects',
    path: '/subjects',
    menuType: 'standard',
    children: [
      { label: 'Browse All', path: '/subjects' },
      { label: 'Abstracts', path: '/subjects/abstracts' },
      { label: 'Landscapes', path: '/subjects/landscapes' },
      { label: 'Wildlife', path: '/subjects/wildlife' },
      { label: 'Waterscapes', path: '/subjects/waterscapes' },
      { label: 'Nightscapes', path: '/subjects/nightscapes' },
      { label: 'Architecture & Cultural Sites', path: '/subjects/architecture-cultural-sites' },
    ]
  }
];
