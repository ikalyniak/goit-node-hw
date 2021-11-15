const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const addContact = async (req, res) => {
  const list = await Contact.find({});
  errorsHelper.conflict(req, list);

  const newContact = { ...req.body, owner: req.user._id };
  const result = await Contact.create(newContact);
  successHelper.successfulResponse(res, result, 201);
};

module.exports = addContact;
