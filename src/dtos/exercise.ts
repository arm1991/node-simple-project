import { formatToYYYYMMDD } from '../utils/formatToYYYYMMDD.ts';

import type { IExercise } from '../Interfaces/index.ts';

export type CreateExerciseDTO = Omit<IExercise, 'id'>;

export class ExerciseDto implements CreateExerciseDTO {
  description: string;
  userId: number;
  duration: number;
  date: string;

  constructor(model: CreateExerciseDTO) {
    this.description = model.description;
    this.userId = model.userId;
    this.duration = model.duration;

    const date = model.date || formatToYYYYMMDD();
    this.date = date;
  }
}
