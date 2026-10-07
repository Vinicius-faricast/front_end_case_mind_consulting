export interface Article {
  id: number;
  user_id: number;
  title: string;
  content: string;
  banner_image: string | null;
  banner_mimetype: string | null;
  published: number;
  published_at: string;
  active: number;
  created_at: string;
  updated_at: string;
  author_name: string;
}
