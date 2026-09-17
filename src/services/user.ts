import { ApiError } from '../exceptions/apiError.ts';
import { UserModel } from '../models/user.ts';

import type { IUser } from '../Interfaces/index.ts';
import { UserDto } from '../dtos/user.ts';
import { validateUsername } from '../validators/user.ts';

class UserService {
  async getAll() {
    return await UserModel.getAll();
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
