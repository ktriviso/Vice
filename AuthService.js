const bcrypt = require('bcrypt');
const user = require('../models/User')

module.exports = {
  async login(req, res, next) {

    try {
      const {
        username,
        password
      } = req.body;
      const user = await User.findOne(username);
      const valid = await bcrypt.compare(password, user.password_digset);

      if (!valid) {
        throw {
          message: 'wrong password'
        }
      }

      rec.session.user = user;
      next();
    } catch (err) {
      next(err);
    }

  },

  logout(req, res, next) {
    req.session.destroy(err => next(err));
  },

  loginRequired: [
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ],
};
