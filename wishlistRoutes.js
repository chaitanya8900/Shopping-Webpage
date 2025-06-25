const express = require('express');
const router = express.Router();
const Wishlist = require('./Wishlist');

// Add product to wishlist
router.post('/wishlist', async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const item = new Wishlist({ userId, productId });
    await item.save();
    res.status(201).json({ message: "Added to wishlist", item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user's wishlist
router.get('/wishlist/:userId', async (req, res) => {
  try {
    const items = await Wishlist.find({ userId: req.params.userId }).populate('productId');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Remove from wishlist
router.delete('/wishlist', async (req, res) => {
  try {
    const { userId, productId } = req.body;
    await Wishlist.deleteOne({ userId, productId });
    res.json({ message: "Removed from wishlist" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
