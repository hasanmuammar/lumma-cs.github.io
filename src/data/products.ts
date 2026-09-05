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

// Only public-facing products belong in this catalogue.
// Content channels and learning platforms are represented separately in the Aya ecosystem.
export const products: Product[] = [
  {
    slug: 'aya-books',
    title: 'Aya Books',
    category: 'Books & Educational Resources',
    shortDescription: 'Storybooks, activity materials, and educational resources designed for repeated family use.',
    description: 'A developing product line of storybooks and supporting educational resources that extend Aya’s stories and learning themes beyond a single screen or lesson.',
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
