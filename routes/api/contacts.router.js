const express = require('express');
const router = express.Router();

const { contacts: controllers } = require('../../controllers');
const controllerWrapper = require('../../middlewares/controllerWrapper');
const {
  validation,
  joiSchemaContacts,
} = require('../../middlewares/validations');

router.get('/', controllerWrapper(controllers.getListContacts));
router.get('/:contactId', controllerWrapper(controllers.getContactById));
router.post(
  '/',
  validation(joiSchemaContacts),
  controllerWrapper(controllers.addContact),
);
router.delete('/:contactId', controllerWrapper(controllers.removeContact));
router.put(
  '/:contactId',
  validation(joiSchemaContacts),
  controllerWrapper(controllers.updateContact),
);
router.patch(
  '/:contactId/favorite',
  controllerWrapper(controllers.updateStatusContact),
);

module.exports = router;
