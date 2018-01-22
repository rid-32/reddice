import { Router } from 'express';

import authenticate from '../middlewares/authenticate';

let router = Router();

router.post('/', authenticate, (req, res) => {
  res.status(201).json({ success: true });
});

export default router;
