const gravatar = require('gravatar');
const { v4 } = require('uuid');

const { User } = require('../../models');
const { sendMail } = require('../../helpers/sendMail');
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

  // const text = `<a href="DOMAIN_NAME/api/auth/verify/${verificationToken}">Please confirm your email ${email}</a>`;
  const text = `<a href="http://localhost:3000/api/auth/verify/${verificationToken}">Please confirm your email ${email}</a>`;

  const verificationEmail = {
    to: email,
    subject: 'email verification',
    html: text,
  };

  await sendMail(verificationEmail);
  successHelper.successfulSignUp(res, newUser);
};

module.exports = signUp;
