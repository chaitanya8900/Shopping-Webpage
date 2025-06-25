const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userEmail: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],
  totalAmount: Number,
  address: Object,
  paymentMethod: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
