import { db } from '../db/index.ts';

import type { CreateExerciseDTO } from '../dtos/exercise.ts';
import type { IExercise, IUser, IUserExercisesLogsQueryParams } from '../Interfaces/index.ts';

export class ExerciseModel {
  private static buildLogsFilter(
    id: IUser['id'],
    { from, to }: Pick<IUserExercisesLogsQueryParams, 'from' | 'to'>,
  ) {
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

    return { where: conditions.join(' AND '), params };
  }

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
    { limit, ...queryParams }: IUserExercisesLogsQueryParams,
  ): Promise<IExercise[]> {
    const { where, params } = this.buildLogsFilter(id, queryParams);

    return await db.all<IExercise>(
      `SELECT * FROM exercises WHERE ${where} ORDER BY date DESC, id DESC LIMIT ?`,
      [...params, limit ?? -1],
    );
  }

  static async countUserExercisesLogs(
    id: IUser['id'],
    queryParams: IUserExercisesLogsQueryParams,
  ): Promise<number> {
    const { where, params } = this.buildLogsFilter(id, queryParams);

    const { total } = await db.get<{ total: number }>(
      `SELECT COUNT(*) AS total FROM exercises WHERE ${where}`,
      params,
    );
    return total;
  }

  static async getAll(): Promise<IExercise[]> {
    return await db.all<IExercise>('SELECT * FROM exercises');
  }
}
