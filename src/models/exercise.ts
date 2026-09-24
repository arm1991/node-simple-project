import { db } from '../db/index.ts';

import type { CreateExerciseDTO } from '../dtos/exercise.ts';
import type { IExercise, IUser, IUserExercisesLogsQueryParams } from '../Interfaces/index.ts';

export class ExerciseModel {
  static async create(exercise: CreateExerciseDTO): Promise<IExercise> {
    const { description, duration, date, userId } = exercise;
    const result = await db.run(
      'INSERT INTO exercises (description, duration, date, userId) VALUES (?, ?, ?, ?)',
      [description, duration, date, userId],
    );
    return await db.get<IExercise>('SELECT * FROM exercises WHERE id = ?', [result.lastID]);
  }

  static async getUserExercisesLogs(
    id: IUser['id'],
    queryParams: IUserExercisesLogsQueryParams,
  ): Promise<IExercise[] | undefined> {
    const { limit, from, to } = queryParams;

    const conditions = ['userId = ?'];
    const params: Array<string | number> = [id];

    if (from) {
      conditions.push('date >= ?');
      params.push(from);
    }

    if (to) {
      conditions.push('date <= ?');
      params.push(to);
    }

    params.push(limit ?? -1);

    return await db.all<IExercise>(
      `SELECT * FROM exercises WHERE ${conditions.join(' AND ')} ORDER BY date DESC LIMIT ?`,
      params,
    );
  }

  static async getAll(): Promise<IExercise[]> {
    return await db.all<IExercise>('SELECT * FROM exercises');
  }
}
