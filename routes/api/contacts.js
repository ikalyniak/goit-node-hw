const express = require('express');
// const createError = require('http-errors');
const { NotFound, BadRequest, Conflict } = require('http-errors');
const Joi = require('joi');

const contactsOperations = require('../../model/index');
const successfulResponse = require('./successfulResponse');

const router = express.Router();
const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

router.get('/', async (req, res, next) => {
  try {
    const result = await contactsOperations.listContacts();
    successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    // console.log(req.params); //в req.params хранятся все динамические части наприм. /:id/:status
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById(contactId);

    if (!result) {
      throw new NotFound(`Contact with id=${contactId} not found`);

      // const error = createError(404, 'Not found');
      // throw error;

      // const error = new Error('Not found');
      // error.status = 404;
      // throw error;

      // res.status(404).json({
      //   status: 'error',
      //   code: 404,
      //   message: 'Not found',
      // });
      // return;
    }
    successfulResponse(res, result);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const { error } = joiSchema.validate(req.body);
    if (error) {
      throw new BadRequest(error.message);
    }

    const { name, email, phone } = req.body;
    const list = await contactsOperations.listContacts();

    // console.log(list.map(item => item.name));
    list.map(item => {
      if (item.name === name) {
        throw new Conflict(`Contact with name:${name} already exist`);
      }
      if (item.email === email) {
        throw new Conflict(`Contact with email:${email} already exist`);
      }
      if (item.phone === phone) {
        throw new Conflict(`Contact with phone:${phone} already exist`);
      }
    });

    const result = await contactsOperations.addContact(req.body);
    successfulResponse(res, result, 201);
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
