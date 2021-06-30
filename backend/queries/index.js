const Product = require('../models/Product');

const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'var.env' });

/**
 *
 * @param {*} _ : object results resolver parent [nested queries]
 * @param {*} token: user token
 * @param {*} ctx : general object data from index.js, available in all resolvers
 * @returns: validate user by token
 * @desc: check the user's token
 */

const getUser = async (obj, token, ctx) => {
  const userId = await jwt.verify(token, process.env.SECRET_WORD);
  return userId;
};

/**
 *
 * @returns:  All coffees on graphQL
 * @desc: return all coffees
 */

const getAllCoffees = async () => {
  try {
    const coffees = await Product.find({});
    return coffees;
  } catch (error) {
    console.log(error);
  }
};

const getCoffee = async (obj, id, ctx) => {
  const coffee = await Product.findById(id);

  if (!coffee) {
    throw new Error('Product not found!');
  }

  return coffee;
};

module.exports = {
  getUser,
  getCoffee,
  getAllCoffees,
};
