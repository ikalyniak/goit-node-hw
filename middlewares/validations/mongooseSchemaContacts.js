const { Schema } = require('mongoose');

const mongooseSchemaContacts = Schema(
  {
    favorite: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongooseSchemaContacts;
