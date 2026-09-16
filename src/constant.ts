export const userValidationErrors = { invalidUsername: 'Invalid username' } as const;

export const exerciseValidationErrors = {
  invalidDescription: 'Invalid description',
  invalidUserId: 'Invalid user ID',
  invalidDuration: 'Invalid duration',
  invalidDateForamt: 'Invalid date format',
  userNotFound: 'User with the provided ID does not exist',
} as const;

export type ErrorMessage = { message: string } | '';
