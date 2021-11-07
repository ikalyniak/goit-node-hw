// const { joiSchemaContacts } = require('../../middlewares/validations/index');
const contactsOperations = require('../../models/contacts/index');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const updateContactApi = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateContact(contactId, req.body);
  errorsHelper.notFound(result, contactId);
  successHelper.successfulResponse(res, result);
};

module.exports = updateContactApi;
