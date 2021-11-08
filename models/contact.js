const { model } = require('mongoose');

const { mongooseSchemaContacts } = require('../middlewares/validations');

const Contact = model('contact', mongooseSchemaContacts);

module.exports = Contact;
