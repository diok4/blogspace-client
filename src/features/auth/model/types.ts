export interface IAuthSlice {
  isLoggedIn: boolean;
  token: string | null;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  userId: string;
}
