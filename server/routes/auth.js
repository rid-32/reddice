import { Router } from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user';

let router = Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  User.findOne().or([{ username: username }, { email: username }]).exec().then(user => {
    if (user) {
      if (user.validPassword(password, user.password_digest)) {
        const token = jwt.sign({
          id: user.id,
          username: user.username,
        }, 'somesecretstringforjsonwebtoken');
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});

export default router;
