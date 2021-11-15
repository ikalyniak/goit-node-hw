const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const { User } = require('../../models');
const errorsHelper = require('../../helpers/auth/errors');
const successHelper = require('../../helpers/auth/success');

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  errorsHelper.unauthorized(user, password);

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  successHelper.successfulSignIn(res, token, user);
};

module.exports = signIn;
