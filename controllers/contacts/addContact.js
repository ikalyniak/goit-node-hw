const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const addContact = async (req, res) => {
  const list = await Contact.find({});
  errorsHelper.conflict(req, list);

  const result = await Contact.create(req.body);
  successHelper.successfulResponse(res, result, 201);
};

module.exports = addContact;
