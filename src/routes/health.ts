import { Router } from 'express';

import { healthController } from '../controllers';

export function createHealthRoutes() {
  const router = Router();

  // Health Check
  router.get('/', healthController);

  return router;
}
