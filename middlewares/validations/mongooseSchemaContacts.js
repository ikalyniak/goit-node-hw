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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongooseSchemaContacts;
