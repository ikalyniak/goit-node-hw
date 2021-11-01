const contactsOperations = require('../../model/index');
const successHelper = require('../helpers/success');
const errorsHelper = require('../helpers/errors');

const getContactByIdApi = () => async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById(contactId);
    errorsHelper.notFound(result, contactId);
    successHelper.successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
};

module.exports = getContactByIdApi;
