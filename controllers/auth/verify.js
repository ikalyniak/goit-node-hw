const { User } = require('../../models');
const errorsHelper = require('../../helpers/auth/errors');
const successHelper = require('../../helpers/auth/success');

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  errorsHelper.notFound(user);

  await User.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  });
  successHelper.successfulVerification(res);
};

module.exports = verify;
