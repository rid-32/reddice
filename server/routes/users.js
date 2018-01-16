import { Router } from 'express';
import validateInput from '../shared/validations/signup';

let router = Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  } else {
    res.send('All were received!');
  }
});

export default router;
