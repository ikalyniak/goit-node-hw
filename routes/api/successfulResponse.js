const successfulResponse = (response, result) => {
  response.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = successfulResponse;
