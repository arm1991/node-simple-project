import { ExerciseDto } from '../dtos/exercise.ts';
import { ApiError } from '../exceptions/apiError.ts';
import { exerciseService } from '../services/exercise.ts';
import { validateExercise } from '../validators/exercise.ts';

import type { NextFunction, Request, Response } from 'express';

class ExerciseController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userIdFromParams = Number(req.params.id);
      const { description, duration, date } = req.body;
      const userId = userIdFromParams;
      const exerciseValidationError = validateExercise({ description, userId, duration, date });

      if (exerciseValidationError) {
        console.log('Invalid params for creating exercise');
        return next(ApiError.badRequest(exerciseValidationError.message));
      }

      // creating exercise
      const exercise = new ExerciseDto({ description, userId, duration, date });
      const exerciseData = await exerciseService.create(exercise);

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
