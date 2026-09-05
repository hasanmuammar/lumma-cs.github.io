export type ProductStatus = 'available' | 'coming-soon' | 'developing';

export interface Product {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  audience: string;
  format: string[];
  highlights: string[];
  relatedArea: string;
}

export const products: Product[] = [
  {
    slug: 'aya-the-little-muslim',
    title: 'Aya The Little Muslim',
    category: 'Stories & Islamic Learning',
    shortDescription: 'Character-led stories, Islamic lessons, duʿā, and everyday learning experiences.',
    description: 'A growing learning universe centred on Aya and designed to help families explore faith, character, stories, and everyday Islamic learning through familiar and age-appropriate experiences.',
    status: 'coming-soon',
    statusLabel: 'Coming soon',
    audience: 'Muslim families and young learners',
    format: ['Stories', 'Short lessons', 'Duʿā', 'Family learning'],
    highlights: ['Faith and character', 'Authentic learning foundations', 'Familiar recurring characters'],
    relatedArea: 'Aya universe'
  },
  {
    slug: 'aya-fun-lingua',
    title: 'Aya Fun Lingua',
    category: 'Language Learning',
    shortDescription: 'A multilingual learning space built around familiar characters and practical communication.',
    description: 'Aya Fun Lingua explores language learning through familiar situations, vocabulary, stories, and practical communication, with a growing multilingual direction for families and beginners.',
    status: 'coming-soon',
    statusLabel: 'Coming soon',
    audience: 'Young learners, beginners, and families',
    format: ['Vocabulary', 'Everyday phrases', 'Stories', 'Multilingual learning'],
    highlights: ['English and Arabic learning', 'Familiar contexts', 'Connected learning experiences'],
    relatedArea: 'Aya universe'
  },
  {
    slug: 'aya-books',
    title: 'Aya Books',
    category: 'Books & Activities',
    shortDescription: 'Storybooks, activity materials, and educational resources designed for repeated family use.',
    description: 'A developing collection of books and supporting activities that can extend Aya’s stories and learning themes beyond a single screen or lesson.',
    status: 'developing',
    statusLabel: 'In development',
    audience: 'Families and young readers',
    format: ['Storybooks', 'Activities', 'Printable resources'],
    highlights: ['Story-based learning', 'Family participation', 'Reusable educational resources'],
    relatedArea: 'Aya universe'
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
