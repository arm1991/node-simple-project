import { ApiError } from '../exceptions/apiError.ts';
import { UserModel } from '../models/user.ts';
import { userValidationErrors } from '../constant.ts';
import { ExerciseModel } from '../models/exercise.ts';
import { UserExerciseLogResponseDto } from '../dtos/userExerciseLog.ts';
import { UserDto } from '../dtos/user.ts';
import { validateUsername } from '../validators/user.ts';
import { validateUserExercisesLogsLimit } from '../validators/userExercisesLogs.ts';

import type { IUser } from '../Interfaces/index.ts';

class UserService {
  async getAll() {
    return await UserModel.getAll();
  }

  async getUserExercisesLogs(
    userId: number,
    limit: number | null,
  ): Promise<UserExerciseLogResponseDto> {
    const limitValidationError = validateUserExercisesLogsLimit(limit);

    if (limitValidationError) {
      console.log('User validation error :', limitValidationError.message);
      throw ApiError.badRequest(limitValidationError.message);
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      console.log('User validation error :', userValidationErrors.userNotFound);
      throw ApiError.badRequest(userValidationErrors.userNotFound);
    }

    const exerciseData = await ExerciseModel.getUserExercisesLogs(userId);

    const userExercisesLogs = new UserExerciseLogResponseDto(user, exerciseData, limit);
    return userExercisesLogs;
  }

  async create(username: string): Promise<IUser> {
    const userValidationError = validateUsername({ username });

    if (userValidationError) {
      console.log('User validation error :', userValidationError.message);
      throw ApiError.badRequest(userValidationError.message);
    }

    const user = new UserDto({ username });
    const candidate = await UserModel.findByUsername(user.username);

    if (candidate) {
      console.log('User validation error :', `User with ${user.username} username already exists`);
      throw ApiError.badRequest(`User with ${user.username} username already exists`);
    }

    const userData = await UserModel.create(user);

    return userData;
  }
}

export const userService = new UserService();
