import { Router } from 'express';

import { teamsController } from '../controllers';

export function createTeamsRoutes() {
  const router = Router();

  router.get('/', teamsController);

  return router;
}
