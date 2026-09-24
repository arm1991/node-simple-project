import { isValidDateString } from '../utils/isValidDateString.ts';
import { exerciseValidationErrors, type ErrorMessage } from '../constant.ts';
import type { CreateExerciseDTO } from '../dtos/exercise.ts';

export function validateExercise({
  description,
  userId,
  duration,
  date,
}: CreateExerciseDTO): ErrorMessage | void {
  if (typeof description !== 'string' || description.trim().length === 0) {
    return { message: exerciseValidationErrors.invalidDescription };
  }

  if (typeof userId !== 'number' || userId <= 0) {
    return { message: exerciseValidationErrors.invalidUserId };
  }

  if (!Number.isInteger(duration) || duration <= 0) {
    return { message: exerciseValidationErrors.invalidDuration };
  }

  if (date && !isValidDateString(date)) {
    return { message: exerciseValidationErrors.invalidDateForamt };
  }
}
