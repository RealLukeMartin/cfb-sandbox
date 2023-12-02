import { Request, Response } from 'express';

import { getTeamById } from '../../services/teams';

export async function getTeamController(req: Request, res: Response) {
  const { id } = req.params;

  const team = await getTeamById(Number(id));

  res.status(200).json(team);

  return res;
}
