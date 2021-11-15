const express = require('express');
const router = express.Router();

const { contacts: controllers } = require('../../controllers');
const { authentication, controllerWrapper } = require('../../middlewares');
const {
  validation,
  joiSchemaContacts,
} = require('../../middlewares/validations');

router.get('/', authentication, controllerWrapper(controllers.getListContacts));
router.get(
  '/:contactId',
  authentication,
  controllerWrapper(controllers.getContactById),
);
router.post(
  '/',
  authentication,
  validation(joiSchemaContacts),
  controllerWrapper(controllers.addContact),
);
router.delete('/:contactId', controllerWrapper(controllers.removeContact));
router.put(
  '/:contactId',
  authentication,
  validation(joiSchemaContacts),
  controllerWrapper(controllers.updateContact),
);
router.patch(
  '/:contactId/favorite',
  authentication,
  controllerWrapper(controllers.updateStatusContact),
);

module.exports = router;
