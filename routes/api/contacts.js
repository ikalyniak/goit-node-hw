const express = require('express');
const Joi = require('joi');

const contactsOperations = require('../../model/index');
const successHelper = require('../helpers/success');
const errorsHelper = require('../helpers/errors');

const router = express.Router();
const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

router.get('/', async (req, res, next) => {
  try {
    const result = await contactsOperations.listContacts();
    successHelper.successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById(contactId);
    errorsHelper.notFound(result, contactId);
    successHelper.successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    errorsHelper.badRequest(error);

    const list = await contactsOperations.listContacts();
    errorsHelper.conflict(req, list);

    const result = await contactsOperations.addContact(req.body);
    successHelper.successfulResponse(res, result, 201);
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.removeContact(contactId);
    errorsHelper.notFound(result, contactId);
    successHelper.successfulDeletion(res);
  } catch (error) {
    next(error);
  }
});

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    errorsHelper.badRequest(error);

    const { contactId } = req.params;
    const result = await contactsOperations.updateContact(contactId, req.body);
    errorsHelper.notFound(result, contactId);
    successHelper.successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
