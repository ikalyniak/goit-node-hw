const contactsOperations = require('./contacts/contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      await contactsOperations.listContacts();
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction({ action: 'list' });
