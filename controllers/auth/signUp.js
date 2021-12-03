const gravatar = require('gravatar');
const { v4 } = require('uuid');

const { User } = require('../../models');
const errorsHelper = require('../../helpers/auth/errors');
const successHelper = require('../../helpers/auth/success');

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email, { s: '100' });

  const user = await User.findOne({ email });
  errorsHelper.conflict(user, email);

  const verificationToken = v4();
  const newUser = new User({ email, verificationToken, avatarURL });
  newUser.setPassword(password);
  await newUser.save();
  successHelper.successfulSignUp(res, newUser);
};

module.exports = signUp;
