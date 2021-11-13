const validation = require('./schemaWrapper');
const joiSchemaContacts = require('./joiSchemaContacts');
const mongooseSchemaContacts = require('./mongooseSchemaContacts');

module.exports = {
  validation,
  joiSchemaContacts,
  mongooseSchemaContacts,
};
