const listContacts = require('./listContacts');
const updateAllContacts = require('./updateAllContacts');

const removeContact = async contactId => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => String(item.id) === contactId);
  if (index === -1) return null;
  const removeContact = contacts.splice(index, 1);
  await updateAllContacts(contacts);
  return removeContact;
};

module.exports = removeContact;