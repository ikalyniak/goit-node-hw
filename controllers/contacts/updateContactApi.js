const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const updateContactApi = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  errorsHelper.notFound(result, contactId);
  successHelper.successfulResponse(res, result);
};

module.exports = updateContactApi;
