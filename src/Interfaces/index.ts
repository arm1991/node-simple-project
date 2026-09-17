export interface IUser {
  id: number;
  username: string;
}

export interface IExercise {
  id: number;
  userId: number;
  description: string;
  duration: number;
  limit?: string;
}

export interface IUserExerciseLog extends IUser {
  logs: IExercise[];
  count: number;
}
