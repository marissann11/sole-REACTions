const { AuthenticationError } = require('apollo-server-express');
const { User, Shoe, Order } = require('../models');
const AdminSale = require('../models/AdminSale');
const { populate } = require('../models/Order');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('User is not logged in');
      } else if (!context.user.isAdmin) {
        throw new AuthenticationError('User is not admin!');
      } else {
        const userData = await User.find().select('-__v -password');
        return userData;
      }
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders',
          populate: 'orders.shoes',
        });
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.shoes',
          path: 'shoes',
        });
        return user.orders.id(_id);
      }
      throw new AuthenticationError('Not logged in');
    },
    shoe: async (parent, { _id }) => {
      return await Shoe.findById(_id);
    },
    shoes: async (_parent, { filters, sortBy=null }, context) => {
      
      let result = {};

      for (let key in filters) {
        if (filters[key]) {
          result[key] = filters[key];
        }
      }

      return await Shoe.find(filters).sort(sortBy);
    },
    adminSales: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('User is not logged in');
      } else if (!context.user.isAdmin) {
        throw new AuthenticationError('User is not admin!');
      } else {
        return await AdminSale.find();
      }
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ shoes: args.shoes });
      const { shoes } = await order.populate('shoes');

      const line_items = [];

      for (let i = 0; i < shoes.length; i++) {
        const product = await stripe.products.create({
          name: shoes[i].name,
          images: [`${url}/assets/images/${shoes[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: shoes[i].price * 100,
          currency: 'usd',
        });
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url:
          'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'https://example.com/cancel',
        // success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        // cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (_parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (_parent, { shoes }, context) => {
      if (context.user) {
        const order = new Order({ shoes });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    saveShoe: async (parent, { shoeData }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedShoes: shoeData } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // this is a console log!! delete me later please
      console.log(user);
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addAdminSale: async (parent, { shoes }, context) => {
      if (context.user) {
        const adminSale = new AdminSale({ shoes });

        return adminSale;
      }

      throw new AuthenticationError('Not logged in');
    },
    addShoe: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('User is not logged in');
      } else if (!context.user.isAdmin) {
        throw new AuthenticationError('User is not admin!');
      } else {
        const shoe = await Shoe.create(args);
        return shoe;
      }
    },
    removeShoe: async (parent, { _id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('User is not logged in');
      } else if (!context.user.isAdmin) {
        throw new AuthenticationError('User is not admin!');
      } else {
        const shoe = await Shoe.deleteOne({ _id });
        return shoe;
      }
    },
  },
};

module.exports = resolvers;
