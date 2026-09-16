import { userValidationErrors, type ErrorMessage } from '../constant.ts';
import type { CreateUserDTO } from '../dtos/user.ts';

export function validateUsername({ username }: CreateUserDTO): ErrorMessage | void {
  if (typeof username !== 'string' || username.trim().length === 0) {
    return { message: userValidationErrors.invalidUsername };
  }
}
