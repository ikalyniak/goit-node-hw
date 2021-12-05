const gravatar = require('gravatar');
const { v4 } = require('uuid');

const { User } = require('../../models');
const sendMail = require('../../helpers/auth/sendMail');
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
  const text = `<p>Please confirm your email ${email}</p><a href="http://localhost:3000/api/auth/verify/${verificationToken}">Click here</a>`;

  const verificationEmail = {
    to: email,
    subject: 'email verification',
    html: text,
  };

  await sendMail(verificationEmail);
  successHelper.successfulSignUp(res, newUser);
};

module.exports = signUp;

/* ---NOTE--------
  subject: Mail delivery failed: returning message to sender
  from: "Mail Delivery System" <Mailer-Daemon@meta.ua>

  This message was created automatically by mail delivery software.

  A message that you sent could not be delivered to one or more of its
  recipients. This is a permanent error. The following address(es) failed:

  ik.kiev.ua@gmail.com
    host 192.168.1.4 [192.168.1.4]
    SMTP error from remote mail server after end of data:
    550 Message body: SPAM URL FOUND
   */
