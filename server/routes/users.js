import { Router } from 'express';

import validateInput from '../shared/validations/signup';
import User from '../models/user';

let router = Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  const { username, email, password, timezone } = req.body;

  if (isValid) {
    let newUser = new User();

    newUser.username = username;
    newUser.email = email;
    newUser.timezone = timezone;
    newUser.password_digest = newUser.encryptPassword(password);

    newUser.save((err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      }

      res.json({ success: true });
    });
  } else {
    res.status(400).json(errors);
  }
});

export default router;
