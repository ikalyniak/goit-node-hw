const fs = require('fs/promises');

const contactsPath = require('./contactsPath');

const updateContacts = async newContacts => {
  const contactsToString = JSON.stringify(newContacts);
  await fs.writeFile(contactsPath, contactsToString);
};

module.exports = updateContacts;
