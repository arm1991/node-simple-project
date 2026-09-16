import { db } from '../db/index.ts';
import type { CreateUserDTO } from '../dtos/user.ts';

import type { IUser } from '../Interfaces/index.ts';

export class UserModel {
  static async findByUsername(username: IUser['username']): Promise<IUser | undefined> {
    return await db.get<IUser>('SELECT * FROM users WHERE username = ?', [username]);
  }

  static async findById(id: IUser['id']): Promise<IUser | undefined> {
    return await db.get<IUser>('SELECT * FROM users WHERE id = ?', [id]);
  }

  static async create(user: CreateUserDTO): Promise<IUser> {
    const result = await db.run('INSERT INTO users (username) VALUES (?)', [user.username]);
    return await db.get<IUser>('SELECT * FROM users WHERE id = ?', [result.lastID]);
  }

  static async getAll(): Promise<IUser[]> {
    return await db.all<IUser>('SELECT * FROM users');
  }
}
