import { userValidationErrors } from '../constant.ts';
import { UserDto } from '../dtos/user.ts';
import { ApiError } from '../exceptions/apiError.ts';
import { userService } from '../services/user.ts';
import { validateUsername } from '../validators/user.ts';

import type { NextFunction, Request, Response } from 'express';

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.body;
      const userValidationError = validateUsername({ username });

      if (userValidationError) {
        console.log('Invalid params for creating user :', username);
        return next(ApiError.badRequest(userValidationError.message));
      }

      // creating user
      const user = new UserDto({ username });
      const userData = await userService.create(user);

      res.json(userData);
      console.log('user created', username);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAll();
      console.table(users);
      res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
