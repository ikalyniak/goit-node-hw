const express = require('express');
const router = express.Router();

const { contacts: controllers } = require('../../controllers');
const controllerWrapper = require('../../middlewares/controllerWrapper');
const {
  validation,
  joiSchemaContacts,
} = require('../../middlewares/validations');

router.get('/', controllerWrapper(controllers.getListContactsApi));
router.get('/:contactId', controllerWrapper(controllers.getContactByIdApi));
router.post(
  '/',
  validation(joiSchemaContacts),
  controllerWrapper(controllers.addContactApi),
);
router.delete('/:contactId', controllerWrapper(controllers.removeContactApi));
router.put(
  '/:contactId',
  validation(joiSchemaContacts),
  controllerWrapper(controllers.updateContactApi),
);

module.exports = router;
