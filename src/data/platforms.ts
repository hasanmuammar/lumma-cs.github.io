export interface Platform {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  focus: string[];
}

export const platforms: Platform[] = [
  {
    slug: 'aya-the-little-muslim',
    title: 'Aya The Little Muslim',
    category: 'Content Channel & Islamic Learning Platform',
    shortDescription: 'Stories, Islamic learning, duʿā, and everyday reflections centred on Aya.',
    description: 'A content channel and developing learning platform that presents age-appropriate Islamic stories, lessons, duʿā, and character development through Aya’s familiar world.',
    focus: ['Islamic stories', 'Faith and character', 'Duʿā and everyday learning']
  },
  {
    slug: 'aya-fun-lingua',
    title: 'Aya Fun Lingua',
    category: 'Content Channel & Language Learning Platform',
    shortDescription: 'Multilingual learning through familiar situations, stories, vocabulary, and practical communication.',
    description: 'A content channel and developing learning platform exploring English, Arabic, and multilingual learning through Aya’s familiar world and practical everyday contexts.',
    focus: ['Language learning', 'Vocabulary and expression', 'Multilingual experiences']
  }
];

export function getPlatform(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}
