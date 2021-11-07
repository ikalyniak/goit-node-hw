const listContacts = require('./listContacts');
const updateAllContacts = require('./updateAllContacts');

const updateContact = async (id, data) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(item => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...data, id };
  await updateAllContacts(contacts);
  return contacts[idx];
};

module.exports = updateContact;
