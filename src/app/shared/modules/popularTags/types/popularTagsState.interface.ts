import { PopularTagType } from '../../../types/popularTag.type';

export interface PopularTagsStateInterface {
  isLoading: boolean;
  error: string | null;
  data: PopularTagType[] | null;
}
