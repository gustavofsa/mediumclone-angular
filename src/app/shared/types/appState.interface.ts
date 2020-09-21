import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from './../modules/popularTags/types/popularTagsState.interface';
import { ArticleStateInterface } from './../../article/types/articleState.interface';
import { CreateArticleStateInterface } from './../../createArticle/types/createArticleState.interface';
import { EditArticleStateInterface } from 'src/app/editArticle/types/editArticleState.interface';
import { SettingsStateInterface } from './../../settings/types/settingsState.interface';
import { UserProfileStateInterface } from 'src/app/userProfile/types/userProfileState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
  userProfile: UserProfileStateInterface;
}
