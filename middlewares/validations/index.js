const validation = require('./schemaWrapper');
const joiSchemaContacts = require('./joiSchemaContacts');
const mongooseSchemaContacts = require('./mongooseSchemaContacts');
const joiSchemaUsers = require('./joiSchemaUsers');
const mongooseSchemaUsers = require('./mongooseSchemaUsers');

module.exports = {
  validation,
  joiSchemaContacts,
  mongooseSchemaContacts,
  joiSchemaUsers,
  mongooseSchemaUsers,
};
