import { CurrentUserInterface } from './currentUser.interface';

export interface CurrentUserInputInterface extends CurrentUserInterface {
  password: string;
}
