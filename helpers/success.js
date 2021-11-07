const successfulResponse = (response, result, code = 200, message) => {
  response.status(code).json({
    status: 'success',
    code,
    data: {
      result,
    },
    message,
  });
};

const successfulDeletion = response => {
  response.json({
    status: 'success',
    code: 200,
    message: 'Contact deleted',
  });
};

module.exports = {
  successfulResponse,
  successfulDeletion,
};
