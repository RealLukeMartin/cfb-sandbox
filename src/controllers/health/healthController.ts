import { Request, Response } from 'express';

export function healthController(req: Request, res: Response) {
  res.status(200);

  res.send('Server is healthy!');

  return res;
}
