import { Request, Response } from 'express';

import { getTeams } from '../../services/cfbApi';

export async function teamsController(req: Request, res: Response) {
  const teams = await getTeams();

  res.status(200).json(teams);

  return res;
}
