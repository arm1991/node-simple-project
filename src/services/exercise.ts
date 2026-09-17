import { ApiError } from '../exceptions/apiError.ts';
import { ExerciseModel } from '../models/exercise.ts';
import { UserModel } from '../models/user.ts';
import { userValidationErrors } from '../constant.ts';
import { validateExercise } from '../validators/exercise.ts';
import { ExerciseDto, type CreateExerciseDTO } from '../dtos/exercise.ts';

import type { IExercise } from '../Interfaces/index.ts';

class ExerciseService {
  async create(exercise: CreateExerciseDTO): Promise<IExercise> {
    const exerciseValidationError = validateExercise(exercise);

    if (exerciseValidationError) {
      console.log('Exercise validation error :', 'Invalid params for creating exercise');
      throw ApiError.badRequest(exerciseValidationError.message);
    }

    const exerciseDto = new ExerciseDto(exercise);
    const user = await UserModel.findById(exerciseDto.userId);

    if (!user) {
      console.log('Exercise validation error :', userValidationErrors.userNotFound);
      throw ApiError.badRequest(userValidationErrors.userNotFound);
    }

    const ExerciseData = await ExerciseModel.create(exerciseDto);
    return ExerciseData;
  }

  async getAll() {
    return await ExerciseModel.getAll();
  }
}

export const exerciseService = new ExerciseService();
