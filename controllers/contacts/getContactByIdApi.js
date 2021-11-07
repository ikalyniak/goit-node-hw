const contactsOperations = require('../../models/contacts/index');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const getContactByIdApi = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getContactById(contactId);
  errorsHelper.notFound(result, contactId);
  successHelper.successfulResponse(res, result);
};

module.exports = getContactByIdApi;
