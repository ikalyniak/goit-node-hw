const Joi = require('joi');

const joiSchemaContacts = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

module.exports = joiSchemaContacts;
