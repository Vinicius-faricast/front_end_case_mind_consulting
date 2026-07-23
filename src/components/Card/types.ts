export interface CardProps {
  id: number;

  title: string;

  description: string;

  image?: string;

  category: string;

  author: string;

  publishedAt: string;

  readingTime: number;

  views: number;

  likes: number;

  onClick?: () => void;
}