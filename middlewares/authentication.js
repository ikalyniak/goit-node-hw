const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

const { SECRET_KEY } = process.env;

const { User } = require('../models');

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    next(new Unauthorized());
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      throw new Unauthorized();
    }
    req.user = user;
    next();
  } catch (e) {
    await User.findOneAndUpdate({ token }, { token: null });
    next(e);
  }
};

module.exports = auth;
