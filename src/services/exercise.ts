import { ApiError } from '../exceptions/apiError.ts';
import { ExerciseModel } from '../models/exercise.ts';

import type { IExercise, IUser } from '../Interfaces/index.ts';
import type { CreateExerciseDTO } from '../dtos/exercise.ts';
import { UserModel } from '../models/user.ts';
import { exerciseValidationErrors } from '../constant.ts';

class ExerciseService {
  async create(exercise: CreateExerciseDTO): Promise<IExercise> {
    const user = await UserModel.findById(exercise.userId);
    if (!user) {
      throw ApiError.badRequest(exerciseValidationErrors.userNotFound);
    }

    const ExerciseData = await ExerciseModel.create(exercise);

    return ExerciseData;
  }

  async getAll() {
    return await ExerciseModel.getAll();
  }
}

export const exerciseService = new ExerciseService();
