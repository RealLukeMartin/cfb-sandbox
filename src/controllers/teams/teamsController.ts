import { Request, Response } from 'express';

import { getTeams } from '../../services/teams';

export async function teamsController(req: Request, res: Response) {
  const { limit = 20, page = 0, offset = 0, team } = req.query;

  const { teams, count } = await getTeams({
    limit: Number(limit),
    offset: Number(offset),
    page: Number(page),
    team: team as string,
  });

  res.status(200).json({
    teams,
    count,
  });

  return res;
}
