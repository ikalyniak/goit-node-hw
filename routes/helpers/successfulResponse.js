const successfulResponse = (response, result, code = 200) => {
  response.status(code).json({
    status: 'success',
    code,
    data: {
      result,
    },
  });
};

module.exports = successfulResponse;
