// const fs = require('fs/promises')

const listContacts = require('../model/contacts/listContacts');
const getContactById = require('../model/contacts/getContactById');
const removeContact = require('../model/contacts/removeContact');
const addContact = require('../model/contacts/addContact');
const updateContact = require('../model/contacts/updateContact');
// const contacts = require('./contacts.json')

// const listContacts = async () => {};
// const getContactById = async contactId => {};
// const removeContact = async contactId => {};
// const addContact = async body => {};
// const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
