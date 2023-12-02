import { Request, Response } from 'express';

import { getRecords } from '../../services/records';

export async function recordsController(req: Request, res: Response) {
  const { limit = 150, page = 0, offset = 0, teamId } = req.query;

  const records = await getRecords({
    limit: Number(limit),
    offset: Number(offset),
    page: Number(page),
    teamId: Number(teamId),
  });

  res.status(200).json(records);

  return res;
}
