import { Router } from 'express';

import { createHealthRoutes } from './health';
import { createRecordsRoutes } from './records';

export function createRestRoutes() {
  const router = Router();

  router.use('/health', createHealthRoutes());
  router.use('/records', createRecordsRoutes());

  return router;
}
