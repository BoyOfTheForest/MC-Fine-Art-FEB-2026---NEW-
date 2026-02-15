
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
      { label: 'Digital Dialogs', path: '/collections/digital-dialogs' },
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
  }
];
