const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'var.env' });

const getUser = async (obj, token, ctx) => {
  const userId = await jwt.verify(token, process.env.SECRET_WORD);
  return userId;
};

module.exports = {
  getUser,
};
