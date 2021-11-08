const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const getContactByIdApi = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  errorsHelper.notFound(result, contactId);
  successHelper.successfulResponse(res, result);
};

module.exports = getContactByIdApi;
