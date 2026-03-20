import { Artwork } from '../types';
import { ARTWORKS_DATA } from './artworks';
import { ARTWORKS_EXTENDED_DATA } from './artworks-extended';

export const ALL_ARTWORKS: Artwork[] = [
  ...ARTWORKS_DATA,
  ...ARTWORKS_EXTENDED_DATA,
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return ALL_ARTWORKS.find(a => a.slug === slug);
}

export function getArtworksByCollection(collectionSlug: string): Artwork[] {
  return ALL_ARTWORKS.filter(a => a.collections.includes(collectionSlug));
}

export function getArtworksBySeries(seriesPath: string): Artwork[] {
  return ALL_ARTWORKS.filter(a => a.series === seriesPath);
}

export function getArtworksBySubject(subjectSlug: string): Artwork[] {
  return ALL_ARTWORKS.filter(a => a.subjects.includes(subjectSlug));
}
