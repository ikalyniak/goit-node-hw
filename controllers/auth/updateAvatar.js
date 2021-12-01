const fs = require('fs/promises');
const path = require('path');
const moment = require('moment');

const { User } = require('../../models');
const successHelper = require('../../helpers/auth/success');

const avatarsDir = path.join(__dirname, '..', '..', 'public/avatars');

const updateAvatars = async (req, res) => {
  const { _id } = req.user;
  const { path: tempPath, originalname } = req.file;
  const date = moment().format('DD-MM-YYYY_hh-mm-ss');
  const filename = `${date}_${originalname}`;
  const uploadPath = path.join(avatarsDir, filename);
  try {
    await fs.rename(tempPath, uploadPath);
    const src = `/avatars/${filename}`;
    await User.findByIdAndUpdate(_id, { avatarURL: src });
    successHelper.successfulAvatarUpdate(res, src);
  } catch (error) {
    await fs.unlink(tempPath);
    throw error;
  }
};

module.exports = updateAvatars;
