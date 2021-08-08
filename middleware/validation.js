const {body, validationResult} = require('express-validator')

const validationRules = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const errorsObj = {
      login: errors.errors.find(i => i.param === 'login') ? 'Login must not be an empty string' : null,
      password: errors.errors.find(i => i.param === 'password') ? 'Password must be at least 6 characters' : null,
      email: errors.errors.find(i => i.param === 'email') ? 'Don`t valid  email' : null,
      phone: errors.errors.find(i => i.param === 'phone') ? 'Phone must existed' : null
    };

    for (let propName in errorsObj) {
      if (errorsObj[propName] === null) {
        delete errorsObj[propName];
      }
    }

    res.status(400).json({ 
      errors: errorsObj
    });
  };
}

module.exports = validationRules;