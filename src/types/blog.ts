export interface BlogData {
  title: string;
  slug?: string;
  description: string;
  status?: "draft" | "published";
  visibility?: "public" | "private";
  timestamp: Date | string;
  isFeatured?: boolean;
  category?: string[];
  tags?: string[];
  imageUrl?: string;
  isPublished?: boolean;
}

export interface BlogResponse extends BlogData {
  _id: string;
  author?: string;
}
