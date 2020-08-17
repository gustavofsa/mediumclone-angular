export interface CurrentUserInterface {
  id: number;
  email: string;
  createAt: string;
  updateAt: string;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}
