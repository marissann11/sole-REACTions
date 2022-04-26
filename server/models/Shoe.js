const mongoose = require("mongoose");

const { Schema } = mongoose;

const shoeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  our_price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
