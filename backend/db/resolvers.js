const bcrypt = require('bcryptjs');
const User = require('../models/Users');
require('dotenv').config({ path: 'var.env' });

const utils = require('../utils/index');

const queries = require('../queries');
const mutations = require('../mutations');

const coffees = [
  {
    name: 'Cappuccino',
    price: 10,
  },
  {
    name: 'Mokaccino',
    price: 20,
  },
  {
    name: 'Cappuccino express',
    price: 55,
  },
];

const users = [
  {
    name: 'Ismael',
    age: 34,
    email: 'ismael_br7@hotmail.com',
  },
  {
    name: 'Marisol',
    age: 38,
    email: 'niss_cohen@msn.com',
  },
];

const resolvers = {
  Query: {
    getCoffee: (_, { input }, ctx) => {
      const result = coffees.filter(
        item => item.name === input.coffee
      );
      return result;
    },
    getUsers: () => users,
    getUser: (_, { token }, ctx) => queries.getUser(_, token, ctx),
  },
  Mutation: {
    /**
     *
     * @param {*} _ : object results resolver parent [nested queries]
     * @param {*} input: input data user
     * @param {*} ctx : general object data from index.js, available in all resolvers
     * @returns: data user on graphQL
     * @desc: register user
     */

    newUser: async (_, { input }, ctx) => {
      const { email, password } = input;

      const existUser = await User.findOne({ email });

      if (existUser) {
        throw new Error('User is already exist');
      }

      const salt = await bcrypt.genSalt(10);
      input.password = await bcrypt.hash(password, salt);

      try {
        const user = new User(input);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     *
     * @param {*} _ : object results resolver parent [nested queries]
     * @param {*} input: input data user --> email, password
     * @param {*} ctx : general object data from index.js, available in all resolvers
     * @returns: data token user auth on graphQL
     * @desc: login user
     */

    authUser: async (_, { input }, ctx) => {
      console.log(_);

      const { email, password } = input;

      const existUser = await User.findOne({ email });

      if (!existUser) {
        throw new Error('User doesnt exist');
      }

      const correctPass = await bcrypt.compare(
        password,
        existUser.password
      );
      if (!correctPass) {
        throw new Error('Password is incorrect');
      }

      return {
        token: utils.createToken(
          existUser,
          process.env.SECRET_WORD,
          '24h'
        ),
      };
    },
    newProduct: (_, { input }, ctx) =>
      mutations.newProduct(_, input, ctx),
  },
};

module.exports = resolvers;
