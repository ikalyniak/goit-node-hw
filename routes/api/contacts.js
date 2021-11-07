const express = require('express');
const router = express.Router();

const controllers = require('../../controllers/contacts');

router.get('/', controllers.getListContactsApi());
router.get('/:contactId', controllers.getContactByIdApi());
router.post('/', controllers.addContactApi());
router.delete('/:contactId', controllers.removeContactApi());
router.put('/:contactId', controllers.updateContactApi());

module.exports = router;
