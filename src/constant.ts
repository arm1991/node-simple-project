export const userValidationErrors = {
  invalidUsername: 'Invalid username',
  userExercisesLogsNotFound: 'No exercise logs found for the user with the provided ID',
  limitInvalid: 'Limit is invalid',
  fromInvalid: 'From is invalid',
  toInvalid: 'To is invalid',
  limitInvalidFormat: 'Limit is not in a valid format',
  fromAfterTo: 'From date must be before or equal to To date',
  userNotFound: 'User with the provided ID does not exist',
} as const;

export const exerciseValidationErrors = {
  invalidDescription: 'Invalid description',
  invalidUserId: 'Invalid user ID',
  invalidDuration: 'Invalid duration',
  invalidDateForamt: 'Invalid date format',
} as const;

export type ErrorMessage = { message: string };
