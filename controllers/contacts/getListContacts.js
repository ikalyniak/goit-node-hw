const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');

const getListContacts = async (req, res) => {
  const { _id } = req.user;
  const { page, limit } = req.query;
  const skip = page * limit - limit;
  const result = await Contact.find(
    { owner: _id },
    '_id name email phone favorite owner',
    { skip, limit: +limit },
  ).populate('owner', '_id email');
  successHelper.successfulResponse(res, result);
};

module.exports = getListContacts;
