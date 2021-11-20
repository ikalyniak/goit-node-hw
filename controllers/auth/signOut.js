const { User } = require('../../models');
const successHelper = require('../../helpers/auth/success');

const signOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  successHelper.successfulSignOut(res);
};

module.exports = signOut;
