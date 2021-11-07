// const { joiSchemaContacts } = require('../../middlewares/validations/index');
const contactsOperations = require('../../models/contacts/index');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const addContactApi = () => async (req, res, next) => {
  try {
    // const { error } = joiSchemaContacts.validate(req.body);
    // errorsHelper.badRequest(error);

    const list = await contactsOperations.listContacts();
    errorsHelper.conflict(req, list);

    const result = await contactsOperations.addContact(req.body);
    successHelper.successfulResponse(res, result, 201);
  } catch (error) {
    next(error);
  }
};

module.exports = addContactApi;
