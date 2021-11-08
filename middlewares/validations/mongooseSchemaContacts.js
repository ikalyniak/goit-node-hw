const { Schema } = require('mongoose');

const mongooseSchemaContacts = Schema(
  {
    favorite: {
      type: Boolean,
      required: true,
      enum: [true, false],
      default: false,
      // minlengh: example
      // maxlength: example
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
    // -----example-----
    // "sale", "stock", "promocode"
    // status: {
    //     type: String,
    //     enum: ["sale", "stock", "promocode"],
    //     default: "sale"
    // },
    // code: {
    //     type: String,
    //     required: true,
    //     match: codeRegexp //const codeRegexp = /^[0-9]{10}$/
    // }
    // -----END example-----
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongooseSchemaContacts;
