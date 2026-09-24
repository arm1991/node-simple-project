export interface IUser {
  id: number;
  username: string;
}

export interface IExercise {
  id: number;
  userId: number;
  description: string;
  duration: number;
  date?: string;
}

export interface IUserExerciseLog extends IUser {
  logs: IExercise[];
  count: number;
}

export interface IUserExercisesLogsQueryParams {
  limit: number | null;
  from: string | null;
  to: string | null;
}
