const Product = require('../models/Product');

/**
 *
 * @param {*} _ : object results resolver parent [nested queries]
 * @param {*} input: input data user --> email, password
 * @param {*} ctx : general object data from index.js, available in all resolvers
 * @returns: data token user auth on graphQL
 * @desc: login user
 */

const newProduct = async (obj, input, ctx) => {
  try {
    const newProduct = new Product(input);

    const result = await newProduct.save();
    return result;
  } catch (error) {
    console.error('ERROR -->', error);
  }
};

module.exports = {
  newProduct,
};
