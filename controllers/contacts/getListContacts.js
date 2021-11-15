const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');

const getListContacts = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.find({ owner: _id });
  successHelper.successfulResponse(res, result);
};

module.exports = getListContacts;
