const { NotFound, Conflict, BadRequest } = require('http-errors');

const notFound = (result, contactId) => {
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
};

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

const badRequest = result => {
  if (!result.favorite) {
    throw new BadRequest('Missing field favorite');
  }
};

module.exports = {
  notFound,
  conflict,
  badRequest,
};
