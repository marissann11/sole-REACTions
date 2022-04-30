const mongoose = require('mongoose');
const Shoe = require('./Shoe');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  shoes: [Shoe.schema],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
