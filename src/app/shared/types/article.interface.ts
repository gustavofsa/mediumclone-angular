import { ProfileInterface } from './profile.interface';

export interface ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
}
