const { v4 } = require('uuid');

const listContacts = require('./listContacts');
const updateAllContacts = require('./updateAllContacts');

const addContact = async data => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);

  await updateAllContacts(contacts);
  return newContact;
};

module.exports = addContact;
