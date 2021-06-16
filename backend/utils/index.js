const jwt = require('jsonwebtoken');

/**
 *
 * @param {*} user data user
 * @param {*} secretWord: secret word to generate token
 * @param {*} exp: Expiration time token
 */

const createToken = (user, secretWord, expiresIn) => {
  const { id, email, name, lastName } = user;

  return jwt.sign({ id, email, name, lastName }, secretWord, { expiresIn });
};

module.exports = {
  createToken,
};
