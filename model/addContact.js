const { v4 } = require('uuid');

const listContacts = require('./listContacts');
const updateAllContacts = require('./updateAllContacts');

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { name, email, phone, id: v4() };
  contacts.push(newContact);

  await updateAllContacts(contacts);
  return newContact;
};

module.exports = addContact;
