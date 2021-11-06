const express = require('express');
const router = express.Router();

const getListContactsApi = require('./getListContactsApi');
const getContactByIdApi = require('./getContactByIdApi');
const addContactApi = require('./addContactApi');
const removeContactApi = require('./removeContactApi');
const updateContactApi = require('./updateContactApi');

router.get('/', getListContactsApi());
router.get('/:contactId', getContactByIdApi());
router.post('/', addContactApi());
router.delete('/:contactId', removeContactApi());
router.put('/:contactId', updateContactApi());

module.exports = router;

// const joiSchema = require('../helpers/addValidation');
// const contactsOperations = require('../../models/index');
// const successHelper = require('../helpers/success');
// const errorsHelper = require('../helpers/errors');

// router.get('/', async (_, res, next) => {
//   try {
//     const result = await contactsOperations.listContacts();
//     successHelper.successfulResponse(res, result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contactsOperations.getContactById(contactId);
//     errorsHelper.notFound(result, contactId);
//     successHelper.successfulResponse(res, result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/', async (req, res, next) => {
//   try {
//     const { error } = joiSchema.validate(req.body);
//     errorsHelper.badRequest(error);

//     const list = await contactsOperations.listContacts();
//     errorsHelper.conflict(req, list);

//     const result = await contactsOperations.addContact(req.body);
//     successHelper.successfulResponse(res, result, 201);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contactsOperations.removeContact(contactId);
//     errorsHelper.notFound(result, contactId);
//     successHelper.successfulDeletion(res);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put('/:contactId', async (req, res, next) => {
//   try {
//     const { error } = joiSchema.validate(req.body);
//     errorsHelper.badRequest(error);

//     const { contactId } = req.params;
//     const result = await contactsOperations.updateContact(contactId, req.body);
//     errorsHelper.notFound(result, contactId);
//     successHelper.successfulResponse(res, result);
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
