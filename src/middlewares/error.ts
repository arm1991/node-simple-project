import type { Request, Response, NextFunction } from 'express';
import { ApiError } from '../exceptions/apiError.ts';

export function errorMiddleware(err: unknown, req: Request, res: Response, next: NextFunction) {
  console.log(err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }

  const status = (err as { status?: number })?.status;
  if (status && status >= 400 && status < 500) {
    return res.status(status).json({ message: (err as Error).message });
  }

  return res.status(500).json({ message: 'Server Error' });
}
