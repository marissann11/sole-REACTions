const { AuthenticationError } = require("apollo-server-express");
const { User, Shoe, Order } = require("../models");
const { populate } = require("../models/Order");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// need to update shoe queries with new filters
const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("User is not logged in");
      } else if (!context.user.isAdmin) {
        throw new AuthenticationError("User is not admin!");
      } else {
        const userData = await User.find().select("-__v -password");
        console.log(JSON.stringify(userData));
        let orderData = userData.map(({ orders }) => orders);
        console.log(orderData);
        return userData;
      }
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders",
          populate: "orders.shoes",
        });
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
      throw new AuthenticationError("Not logged in");
    },
    order: async (_parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders",
          populate: "orders.shoes",
        });

        return user.orders.id(_id);
      }
      throw new AuthenticationError("Not logged in");
    },
    orders: async () => {
      const orderData = await Order.find();
      const { shoes } = await orderData
        .populate({ path: "orders", populate: "order.shoes" })
        .execPopulate();
      // console.log(orderData, `hi im order data i hope`, shoes);
      return orderData;
    },
    shoe: async (parent, { _id }) => {
      return await Shoe.findById(_id);
    },
    shoes: async () => {
      return await Shoe.find();
    },
    // shoes: async (parent, args, context, info) => {
    //   const { brand, price, color, model, sku, collab, sport } = args;

    //   let result;
    //   if (args) {
    //     result = await Shoe.find({ brand, price, color, model, sku, collab, sport });
    //     return result;
    //   } else if (brand) {
    //     result = await Shoe.find({ brand });
    //     return result;
    //   } else if (price) {
    //     result = await Shoe.find({ price });
    //     return result;
    //   } else if (color) {
    //     result = await Shoe.find({ color });
    //     return result;
    //   } else if (model) {
    //     result = await Shoe.find({ model });
    //     return result;
    //   } else if (sku) {
    //     result = await Shoe.find({ sku });
    //     return result;
    //   } else if (collab) {
    //     result = await Shoe.find({ collab });
    //     return result;
    //   } else if (sport) {
    //     result = await Shoe.find({ sport });
    //     return result;
    //   } else {
    //     result = await Shoe.find();
    //     return result;
    //   }
    // },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ shoes: args.shoes });
      const line_items = [];

      const { shoes } = await order.populate("shoes").execPopulate();

      for (let i = 0; i < shoes.length; i++) {
        const product = await stripe.products.create({
          name: shoes[i].name,
          images: [`${url}/images/${shoes[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: shoes[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url:
          "https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "https://example.com/cancel",
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
      console.log(context);
      if (context.user) {
        const order = new Order({ shoes });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
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
      throw new AuthenticationError("You need to be logged in!");
    },
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      // this is a console log!! delete me later please
      console.log(user);
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
