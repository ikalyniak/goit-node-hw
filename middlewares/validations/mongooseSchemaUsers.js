const { Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

const mongooseSchemaUsers = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true },
);

mongooseSchemaUsers.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

module.exports = mongooseSchemaUsers;
