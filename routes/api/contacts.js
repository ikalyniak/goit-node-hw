const express = require('express');
// const createError = require('http-errors');
const { NotFound, BadRequest } = require('http-errors');

const contactsOperations = require('../../model/index');
const successfulResponse = require('./successfulResponse');

const router = express.Router();

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
    // console.log(req.body);
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
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
