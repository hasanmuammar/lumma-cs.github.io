export type ResourceCategory = 'Parents' | 'Learning';
export type ResourceStatus = 'available' | 'coming-soon';

export interface Resource {
  slug: string;
  title: string;
  category: ResourceCategory;
  shortDescription: string;
  description: string;
  status: ResourceStatus;
  statusLabel: string;
  format: string;
  audience: string;
}

export const resources: Resource[] = [
  {
    slug: 'family-learning-with-aya',
    title: 'Family Learning with Aya',
    category: 'Parents',
    shortDescription: 'A practical introduction to extending stories and learning themes into everyday family life.',
    description: 'A developing collection of guidance and ideas intended to help families continue meaningful learning through conversation, routines, reading, and shared activities.',
    status: 'coming-soon',
    statusLabel: 'Coming soon',
    format: 'Parent guidance',
    audience: 'Parents and families'
  },
  {
    slug: 'learning-through-stories',
    title: 'Learning Through Stories',
    category: 'Learning',
    shortDescription: 'An introduction to using familiar stories as a starting point for wider learning experiences.',
    description: 'A developing educational resource exploring how stories can connect reading, language, reflection, activities, and family conversations.',
    status: 'coming-soon',
    statusLabel: 'Coming soon',
    format: 'Learning guide',
    audience: 'Families and educators'
  }
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
