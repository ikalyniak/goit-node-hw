const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'ikalyniak@meta.ua',
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendMail = async data => {
  const newEmail = {
    ...data,
    from: 'ikalyniak@meta.ua',
  };
  await transporter.sendMail(newEmail);
};

module.exports = sendMail;
