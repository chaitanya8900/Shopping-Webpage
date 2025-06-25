const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./Product');
const User = require('./User'); // ✅ New: User model
const Order = require('./Order');

const app = express();
app.use(cors());
app.use(express.json());
const wishlistRoutes = require('./wishlistRoutes');
app.use(wishlistRoutes);

// ✅ MongoDB connection
mongoose.connect('mongodb+srv://chaitanyadasari3478:7jjIbyPiJC9Wx9Jc@shopeasy.fcnv3my.mongodb.net/shopeasy?retryWrites=true&w=majority&appName=shopeasy')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// ✅ Test route
app.get('/', (req, res) => {
  res.send('✅ Backend API is running');
});

// ✅ Products API
app.get('/products', async (req, res) => {
  const { search = '', category = '', page = 1, limit = 10 } = req.query;

  const query = {
    name: { $regex: search, $options: 'i' },
    ...(category && { category }) // optional filter
  };

  try {
    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(query);

    res.json({ products, total });
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});
app.post('/products', async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const newProduct = new Product({ name, price, image });
    await newProduct.save();
    res.send('Product added');
  } catch (err) {
    res.status(400).send('Error adding product');
  }
});

// ✅ Auth API: Signup
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).send("User already exists");

  const user = new User({ email, password });
  await user.save();
  res.send("Signup successful");
});

// ✅ Auth API: Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).send("Invalid credentials");

  res.json(user);
});

// ✅ Start server
const PORT = 5000;
// ✅ POST /orders → save an order
app.post('/orders', async (req, res) => {
  try {
    const { userEmail, items, totalAmount, address, paymentMethod } = req.body;
    const order = new Order({ userEmail, items, totalAmount, address, paymentMethod });
    await order.save();
    res.send("Order placed successfully!");
  } catch (err) {
    res.status(500).send("Error placing order");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
