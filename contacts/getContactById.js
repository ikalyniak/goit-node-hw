const listContacts = require('./listContacts');

const getContactById = async contactId => {
  const contacts = await listContacts();
  const result = contacts.find(item => String(item.id) === contactId);
  if (!result) return null;
  return result;
};

module.exports = getContactById;
