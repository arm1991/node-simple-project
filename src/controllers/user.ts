import { userService } from '../services/user.ts';

import type { NextFunction, Request, Response } from 'express';
import { parseUserExercisesLogsQueryParams } from '../utils/parseUserExercisesLogsQueryParams.ts';

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.body ?? {};
      const userData = await userService.create(username);

      res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUserExercisesLogs(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      const params = parseUserExercisesLogsQueryParams(req.query);
      const userExercisesLogs = await userService.getUserExercisesLogs(userId, params);

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
