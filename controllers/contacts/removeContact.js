const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  errorsHelper.notFound(result, contactId);
  successHelper.successfulDeletion(res);
};

module.exports = removeContact;
