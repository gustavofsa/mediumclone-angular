export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  GET_CURRENT_USER = '[Auth] Get current user',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get current user failure',

  UPDATE_CURRENT_USER = '[Auth] Update current user',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update current user success',
  UPDATE_CURRENT_USER_FAILURE = '[Auth] Update current user failure',

  LOGOUT = '[Auth] Logout',
}
