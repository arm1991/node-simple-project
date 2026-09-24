import { userValidationErrors, type ErrorMessage } from '../constant.ts';

export function validateUsername(username: string): ErrorMessage | void {
  if (typeof username !== 'string' || username.trim().length === 0) {
    return { message: userValidationErrors.invalidUsername };
  }
}
