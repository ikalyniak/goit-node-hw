const { Schema } = require('mongoose');

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

module.exports = mongooseSchemaUsers;
