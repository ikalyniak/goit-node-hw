const express = require('express');
const router = express.Router();

const { auth: controllers } = require('../../controllers');
const {
  authentication,
  controllerWrapper,
  upload,
} = require('../../middlewares');
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
router.get('/current', authentication, controllerWrapper(controllers.current));
router.patch(
  '/avatars',
  authentication,
  upload.single('avatar'),
  controllerWrapper(controllers.updateAvatar),
);
router.get('/verify/:verificationToken', controllerWrapper(controllers.verify));

module.exports = router;
