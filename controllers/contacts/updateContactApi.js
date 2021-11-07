// const { joiSchemaContacts } = require('../../middlewares/validations/index');
const contactsOperations = require('../../models/contacts/index');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const updateContactApi = () => async (req, res, next) => {
  try {
    // const { error } = joiSchemaContacts.validate(req.body);
    // errorsHelper.badRequest(error);

    const { contactId } = req.params;
    const result = await contactsOperations.updateContact(contactId, req.body);
    errorsHelper.notFound(result, contactId);
    successHelper.successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactApi;
