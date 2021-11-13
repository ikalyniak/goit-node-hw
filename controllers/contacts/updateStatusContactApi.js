const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');
const errorsHelper = require('../../helpers/errors');

const updateStatusContactApi = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    },
  );
  errorsHelper.badRequest(result);
  successHelper.successfulResponse(res, result);
};

module.exports = updateStatusContactApi;
