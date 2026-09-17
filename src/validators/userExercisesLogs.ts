import { userValidationErrors, type ErrorMessage } from '../constant.ts';

export function validateUserExercisesLogsLimit(limit: number | null): ErrorMessage | void {
  if (typeof limit === 'number' && limit <= 0) {
    return { message: userValidationErrors.limitInvalid };
  } else if (typeof limit !== null) {
    return { message: userValidationErrors.limitInvalidFormat };
  }
}
