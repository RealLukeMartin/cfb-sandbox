import { Router } from 'express';

import { createHealthRoutes } from './health';
import { createRecordsRoutes } from './records';
import { createTeamsRoutes } from './teams';

export function createRestRoutes() {
  const router = Router();

  router.use('/health', createHealthRoutes());
  router.use('/records', createRecordsRoutes());
  router.use('/teams', createTeamsRoutes());

  return router;
}
