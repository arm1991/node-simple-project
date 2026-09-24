import { userValidationErrors, type ErrorMessage } from '../constant.ts';

import type { IUserExercisesLogsQueryParams } from '../Interfaces/index.ts';
import { isValidDateString } from '../utils/isValidDateString.ts';

export function validateUserExercisesLogsQueryParams({
  limit,
  from,
  to,
}: IUserExercisesLogsQueryParams): ErrorMessage | void {
  if (typeof limit === 'number' && limit <= 0) {
    return { message: userValidationErrors.limitInvalid };
  } else if (Number.isNaN(limit)) {
    return { message: userValidationErrors.limitInvalidFormat };
  }

  if (from && !isValidDateString(from)) {
    return { message: userValidationErrors.fromInvalid };
  }

  if (to && !isValidDateString(to)) {
    return { message: userValidationErrors.toInvalid };
  }

  if (from && to && from > to) {
    return { message: userValidationErrors.fromAfterTo };
  }
}
