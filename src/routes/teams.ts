import { Router } from 'express';

import { getTeamController, teamsController } from '../controllers';

export function createTeamsRoutes() {
  const router = Router();

  router.get('/', teamsController);
  router.get('/:id', getTeamController);

  return router;
}
