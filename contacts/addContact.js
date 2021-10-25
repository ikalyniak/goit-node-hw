// const fs = require('fs/promises');
const { v4 } = require('uuid');

const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');
// const contactsPath = require('./contactsPath');
const numberId = Number.parseInt(v4());

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { name, email, phone, numberId };
  contacts.push(newContact);
  // const contactsToString = JSON.stringify(contacts);
  // await fs.writeFile(contactsPath, contactsToString);
  await updateContacts(contacts);
  return newContact;
};

module.exports = addContact;
