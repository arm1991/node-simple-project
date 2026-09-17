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
