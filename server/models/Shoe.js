const mongoose = require('mongoose');

const { Schema } = mongoose;

const shoeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
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
    required: false,
  },
  brand: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: false,
  }
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
