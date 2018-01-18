import { Router } from 'express';
import isEmpty from 'lodash/isEmpty';

import commonValidation from '../shared/validations/signup';
import User from '../models/user';

let router = Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return User.findOne().or([{ username: data.username }, { email: data.email }]).exec().then(user => {
    if (user) {
      if (user.username === data.username) {
        errors.username = 'There is user with such username';
      }

      if (user.email === data.email) {
        errors.email = 'There is user with such email';
      }
    }

    return {
      errors,
      isValid: isEmpty(errors),
    };
  });
}

router.post('/', (req, res) => {
  validateInput(req.body, commonValidation).then(({ errors, isValid }) => {
    if (isValid) {
      const { username, email, password, timezone } = req.body;

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
});

export default router;
