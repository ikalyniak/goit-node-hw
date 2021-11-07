// const { NotFound, BadRequest, Conflict } = require('http-errors');
const { NotFound, Conflict } = require('http-errors');

const notFound = (result, contactId) => {
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
};

// const badRequest = error => {
//   if (error) {
//     throw new BadRequest(error.message);
//   }
// };

const conflict = (req, list) => {
  const { name, email, phone } = req.body;
  list.map(item => {
    if (item.name === name) {
      throw new Conflict(`Contact with name:${name} already exist`);
    }
    if (item.email === email) {
      throw new Conflict(`Contact with email:${email} already exist`);
    }
    if (item.phone === phone) {
      throw new Conflict(`Contact with phone:${phone} already exist`);
    }
  });
};

module.exports = {
  notFound,
  // badRequest,
  conflict,
};
