const fs = require('fs/promises');

const contactsPath = require('./contactsPath');

const updateAllContacts = async newContacts => {
  const contactsToString = JSON.stringify(newContacts);
  await fs.writeFile(contactsPath, contactsToString);
};

module.exports = updateAllContacts;
