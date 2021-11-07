const contactsOperations = require('../../models/contacts/index');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const removeContactApi = () => async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.removeContact(contactId);
    errorsHelper.notFound(result, contactId);
    successHelper.successfulDeletion(res);
  } catch (error) {
    next(error);
  }
};

module.exports = removeContactApi;
