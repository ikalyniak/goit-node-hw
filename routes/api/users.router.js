const express = require('express');
const router = express.Router();

const { auth: controllers } = require('../../controllers');
const controllerWrapper = require('../../middlewares/controllerWrapper');
const { validation, joiSchemaUsers } = require('../../middlewares/validations');

router.post(
  '/signUp',
  validation(joiSchemaUsers),
  controllerWrapper(controllers.signUp),
);
router.post('/signIn', controllerWrapper(controllers.signIn));
router.post('/signOut', controllerWrapper(controllers.signOut));

module.exports = router;
