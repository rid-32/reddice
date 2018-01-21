import { Router } from 'express';

let router = Router();

router.post('/', (req, res) => {
  res.json({ result: 'success', receivedData: req.body });
});

export default router;
