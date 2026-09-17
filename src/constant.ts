export const userValidationErrors = {
  invalidUsername: 'Invalid username',
  userExercisesLogsNotFound: 'No exercise logs found for the user with the provided ID',
  limitInvalid: 'Limit is invalid',
  limitInvalidFormat: 'Limit is not in a valid format',
  userNotFound: 'User with the provided ID does not exist',
} as const;

export const exerciseValidationErrors = {
  invalidDescription: 'Invalid description',
  invalidUserId: 'Invalid user ID',
  invalidDuration: 'Invalid duration',
  invalidDateForamt: 'Invalid date format',
} as const;

export type ErrorMessage = { message: string } | '';
