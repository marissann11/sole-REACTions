const mongoose = require('mongoose');

const { Schema } = mongoose;

const shoeSchema = new Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  brand: {
    type: String,
    require: false,
  },
  year: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: false,
  },
  sku: {
    type: String,
    required: false
  },
  collab: {
    type: String,
    required: false
  },
  sport: {
    type: String,
    required: false
  }
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
