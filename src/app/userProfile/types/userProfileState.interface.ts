import { UserProfileInterface } from './userProfile.interface';
export interface UserProfileStateInterface {
  isLoading: boolean;
  data: UserProfileInterface | null;
  error: string | null;
}
