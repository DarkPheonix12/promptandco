declare module "*.mdx" {
  export const meta: {
    slug: string;
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    category: string;
    tags: string[];
    readingTimeMinutes: number;
    faq?: { question: string; answer: string }[];
  };
}