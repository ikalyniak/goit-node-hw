const { Contact } = require('../../models');
const successHelper = require('../../helpers/success');

const getListContacts = async (req, res) => {
  const { _id } = req.user;
  const { page, limit } = req.query;
  // console.log(Number(page));// query has a type String!!!
  // "Приведение к числу, унарный +" https://learn.javascript.ru/operators#privedenie-k-chislu-unarnyy
  const skip = page * limit - limit;
  const result = await Contact.find(
    { owner: _id },
    '_id name email phone favorite owner',
    { skip, limit: +limit },
  ).populate('owner', '_id email');
  successHelper.successfulResponse(res, result);
};

module.exports = getListContacts;
