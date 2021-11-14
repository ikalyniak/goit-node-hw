const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');

const getListContacts = async (_, res) => {
  const result = await Contact.find({});
  successHelper.successfulResponse(res, result);
};

module.exports = getListContacts;
