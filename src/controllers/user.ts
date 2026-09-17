import { userService } from '../services/user.ts';

import type { NextFunction, Request, Response } from 'express';

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.body;
      const userData = await userService.create(username);

      res.json(userData);
      console.log('user created', username);
    } catch (e) {
      next(e);
    }
  }

  async getUserExercisesLogs(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      const userExercisesLogs = await userService.getUserExercisesLogs(userId);

      res.json(userExercisesLogs);
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
