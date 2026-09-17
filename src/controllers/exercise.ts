import { exerciseService } from '../services/exercise.ts';

import type { NextFunction, Request, Response } from 'express';

class ExerciseController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      const { description, duration, date } = req.body;

      const exerciseData = await exerciseService.create({ description, userId, duration, date });

      res.json(exerciseData);
      console.log('exercise created', exerciseData);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const exercises = await exerciseService.getAll();
      console.table(exercises);
      res.json(exercises);
    } catch (e) {
      next(e);
    }
  }
}

export const exerciseController = new ExerciseController();
