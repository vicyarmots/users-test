export interface IUser {
   id: number | string;
   name: string;
   email: string;
   phone: string;
}

export interface UserState {
   users: IUser[];
   filterType: string;
   isLoading: boolean;
   error: string;
}
