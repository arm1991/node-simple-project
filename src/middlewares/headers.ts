import type { Request, Response, NextFunction } from 'express';

export function headerMiddleware(req: Request, res: Response, next: NextFunction) {
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "script-src 'self' 'unsafe-inline'",
      "img-src 'self' https:",
      "connect-src 'self' http://localhost:* ws://localhost:* https:",
    ].join('; '),
  );
  next();
}
