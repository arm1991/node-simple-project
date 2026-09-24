import type { IExercise, IUser, IUserExerciseLog } from '../Interfaces/index.ts';

export class UserExerciseLogResponseDto implements IUserExerciseLog {
  username: string;
  id: number;
  logs: IUserExerciseLog['logs'];
  count: IUserExerciseLog['count'];

  constructor(userModel: IUser, exercises: IExercise[] | undefined) {
    this.username = userModel.username;
    this.id = userModel.id;
    this.logs = exercises ?? [];
    this.count = exercises?.length ?? 0;
  }
}
