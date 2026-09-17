import { ExerciseDto } from '../dtos/exercise.ts';
import { ApiError } from '../exceptions/apiError.ts';
import { exerciseService } from '../services/exercise.ts';
import { validateExercise } from '../validators/exercise.ts';

import type { NextFunction, Request, Response } from 'express';

class ExerciseController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      const { description, duration, limit } = req.body;

      const exerciseData = await exerciseService.create({ description, userId, duration, limit });

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
