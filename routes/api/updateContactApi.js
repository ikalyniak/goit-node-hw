const joiSchema = require('../helpers/addValidation');
const contactsOperations = require('../../models/index');
const successHelper = require('../helpers/success');
const errorsHelper = require('../helpers/errors');

const updateContactApi = () => async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    errorsHelper.badRequest(error);

    const { contactId } = req.params;
    const result = await contactsOperations.updateContact(contactId, req.body);
    errorsHelper.notFound(result, contactId);
    successHelper.successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactApi;
