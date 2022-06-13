export as namespace reducers;

export interface AuthState {
  authenticated: {
    accessToken: string | null;
  };
  logged: boolean;
}

export interface UserState {
  me: models.User | null;
  userList: models.User[];
}

export interface TypeState {
  typeList: models.TypesProps[];
}

export interface ReportsState {
  reportsList: models.ReportProps[];
}

export interface ReduxState {
  loading: number;
  auth: AuthState;
  user: UserState;
  type: TypeState;
  report: ReportsState;
}
