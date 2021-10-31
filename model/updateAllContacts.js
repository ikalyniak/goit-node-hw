const fs = require('fs/promises');

const contactsPath = require('./contacts.json');

const updateAllContacts = async newContacts => {
  const contactsToString = JSON.stringify(newContacts);
  await fs.writeFile(contactsPath, contactsToString);
};

module.exports = updateAllContacts;
