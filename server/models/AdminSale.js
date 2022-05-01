const mongoose = require('mongoose');
const { Schema } = mongoose;

const Shoe = require('./Shoe');

const adminSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  shoes: [Shoe.schema],
});

const AdminSale = mongoose.model('AdminSale', adminSchema);

module.exports = AdminSale;
