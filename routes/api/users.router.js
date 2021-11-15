const express = require('express');
const router = express.Router();

const { auth: controllers } = require('../../controllers');
const controllerWrapper = require('../../middlewares/controllerWrapper');
const { validation, joiSchemaUsers } = require('../../middlewares/validations');

router.post(
  '/signup',
  validation(joiSchemaUsers),
  controllerWrapper(controllers.signUp),
);
router.post('/signin', controllerWrapper(controllers.signIn));
router.post('/signout', controllerWrapper(controllers.signOut));

module.exports = router;
