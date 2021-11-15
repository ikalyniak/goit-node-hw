const { Conflict } = require('http-errors');

const conflict = (user, email) => {
  if (user) {
    throw new Conflict(`User with email=${email} already exists`);
  }
};

module.exports = {
  conflict,
};
