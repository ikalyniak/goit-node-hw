const express = require('express');
const router = express.Router();

const { auth: controllers } = require('../../controllers');
const { authentication, controllerWrapper } = require('../../middlewares');
const { validation, joiSchemaUsers } = require('../../middlewares/validations');

router.post(
  '/signup',
  validation(joiSchemaUsers),
  controllerWrapper(controllers.signUp),
);
router.post(
  '/signin',
  validation(joiSchemaUsers),
  controllerWrapper(controllers.signIn),
);
router.post('/signout', authentication, controllerWrapper(controllers.signOut));

module.exports = router;
