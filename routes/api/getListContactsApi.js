const contactsOperations = require('../../models/index');
const successHelper = require('../helpers/success');

const getListContactsApi = () => async (_, res, next) => {
  try {
    const result = await contactsOperations.listContacts();
    successHelper.successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
};

module.exports = getListContactsApi;
