const { model } = require('mongoose');

const { mongooseSchemaUsers } = require('../middlewares/validations');

const User = model('user', mongooseSchemaUsers);

module.exports = User;
