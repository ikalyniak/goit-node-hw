const contactsOperations = require('../../models/contacts/index');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const addContactApi = async (req, res) => {
  const list = await contactsOperations.listContacts();
  errorsHelper.conflict(req, list);

  const result = await contactsOperations.addContact(req.body);
  successHelper.successfulResponse(res, result, 201);
};

module.exports = addContactApi;
