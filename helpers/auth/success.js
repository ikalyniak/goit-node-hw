const successfulSignUp = (response, { email }) => {
  response.status(201).json({
    status: 'success',
    code: 201,
    message: `Registration User with email ${email} completed successfully`,
    subscription: 'starter',
  });
};

const successfulSignIn = (response, token, { email }) => {
  response.json({
    status: 'success',
    code: 200,
    data: {
      token,
    },
    email,
    subscription: 'starter',
  });
};

const successfulSignOut = response => response.status(204).json();

const successfulAvatarUpdate = (response, src) => {
  response.status(201).json({
    status: 'success',
    code: 201,
    data: {
      newAvatar: src,
    },
  });
};

module.exports = {
  successfulSignUp,
  successfulSignIn,
  successfulSignOut,
  successfulAvatarUpdate,
};
