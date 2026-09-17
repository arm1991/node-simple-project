import { db } from '../db/index.ts';

import type { CreateExerciseDTO } from '../dtos/exercise.ts';
import type { IExercise, IUser } from '../Interfaces/index.ts';

export class ExerciseModel {
  static async create(exercise: CreateExerciseDTO): Promise<IExercise> {
    const { description, duration, date, userId } = exercise;
    const result = await db.run(
      'INSERT INTO exercises (description, duration, date, userId) VALUES (?, ?, ?, ?)',
      [description, duration, date, userId],
    );
    return await db.get<IExercise>('SELECT * FROM exercises WHERE id = ?', [result.lastID]);
  }

  static async getUserExercisesLogs(id: IUser['id']): Promise<IExercise[] | undefined> {
    return await db.all<IExercise>('SELECT * FROM exercises WHERE userId = ?', [id]);
  }

  static async getAll(): Promise<IExercise[]> {
    return await db.all<IExercise>('SELECT * FROM exercises');
  }
}
