import { ApiError } from '../exceptions/apiError.ts';
import { UserModel } from '../models/user.ts';

import type { IUser } from '../Interfaces/index.ts';
import type { CreateUserDTO } from '../dtos/user.ts';

class UserService {
  async getAll() {
    return await UserModel.getAll();
  }

  async create(user: CreateUserDTO): Promise<IUser> {
    // check if candidate exists
    const candidate = await UserModel.findByUsername(user.username);
    if (candidate) {
      throw ApiError.badRequest(`User with ${user.username} username already exists`);
    }

    const userData = await UserModel.create(user);

    return userData;
  }
}

export const userService = new UserService();
