import type { IUser } from '../Interfaces/index.ts';

export type CreateUserDTO = Omit<IUser, 'id'>;

export class UserDto implements CreateUserDTO {
  username: string;

  constructor(model: { username: string }) {
    this.username = model.username.trim();
  }
}
