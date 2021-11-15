const successfulSignUp = response => {
  response.status(201).json({
    status: 'success',
    code: 201,
    message: 'Registration completed successfully',
  });
};

module.exports = {
  successfulSignUp,
};
