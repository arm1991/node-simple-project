import type { IExercise, IUser, IUserExerciseLog } from '../Interfaces/index.ts';

export class UserExerciseLogResponseDto implements IUserExerciseLog {
  username: string;
  id: number;
  logs: IUserExerciseLog['logs'];
  count: IUserExerciseLog['count'];

  constructor(userModel: IUser, exercises: IExercise[] | undefined, limit: number | null) {
    this.username = userModel.username;
    this.id = userModel.id;
    this.logs = exercises ? exercises.slice(0, limit ?? exercises.length) : [];
    this.count = exercises ? exercises.length : 0;
  }
}
