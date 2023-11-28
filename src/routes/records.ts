import { Router } from 'express';

import { recordsController } from '../controllers';

export function createRecordsRoutes() {
  const router = Router();

  router.get('/', recordsController);

  return router;
}
