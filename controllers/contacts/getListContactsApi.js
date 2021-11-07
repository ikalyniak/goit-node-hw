const contactsOperations = require('../../models/contacts');
const successHelper = require('../../helpers/success');

const getListContactsApi = () => async (_, res) => {
  const result = await contactsOperations.listContacts();
  successHelper.successfulResponse(res, result);
};

module.exports = getListContactsApi;
