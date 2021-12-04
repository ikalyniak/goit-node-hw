const { Unauthorized, Conflict, NotFound } = require('http-errors');

const conflict = (user, email) => {
  if (user) {
    throw new Conflict(`User with email=${email} already exists`);
  }
};

const unauthorized = (user, password) => {
  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized('Wrong credentials');
  }
};

const notFound = user => {
  if (!user) {
    throw new NotFound();
  }
};

module.exports = {
  conflict,
  unauthorized,
  notFound,
};
