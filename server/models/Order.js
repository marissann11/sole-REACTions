const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  shoes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Shoe',
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
