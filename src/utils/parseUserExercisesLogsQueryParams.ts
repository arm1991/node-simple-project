import type { IUserExercisesLogsQueryParams } from '../Interfaces/index.ts';
import type { Request } from 'express';

export function parseUserExercisesLogsQueryParams(
  query: Request['query'],
): IUserExercisesLogsQueryParams {
  const limit = query.limit ? Number(query.limit.toString()) : null;
  const from = query.from?.toString() ?? null;
  const to = query.to?.toString() ?? null;

  return { limit, from, to };
}
