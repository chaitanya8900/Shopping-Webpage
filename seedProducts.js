const mongoose = require('mongoose');
const Product = require('./Product');

mongoose.connect('mongodb+srv://chaitanyadasari3478:7jjIbyPiJC9Wx9Jc@shopeasy.fcnv3my.mongodb.net/shopeasy?retryWrites=true&w=majority&appName=shopeasy')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error(err));

const products = [
  { name: "Men's T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Women's Dress", price: 899, image: "https://plus.unsplash.com/premium_photo-1676236306466-25ba882070b3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "women" },
  { name: "Running Shoes", price: 1999, image: "https://images.unsplash.com/photo-1597892657493-6847b9640bac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "shoes" },
  { name: "Hoodie", price: 1099, image: "https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Jeans", price: 1299, image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Sneakers", price: 2499, image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "shoes" },
  { name: "Formal Shirt", price: 799, image: "https://images.unsplash.com/photo-1611619668823-13e82692eddc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Kurta Set", price: 1499, image: "https://images.unsplash.com/photo-1727835523550-18478cacefa2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Watch", price: 1999, image: "https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_1280.jpg", category: "accessories" },
  { name: "Sports Shorts", price: 699, image: "https://images.unsplash.com/photo-1576259190811-d071de018494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Sandals", price: 999, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "shoes" },
  { name: "Chinos", price: 1399, image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Backpack", price: 1199, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Jumpsuit", price: 1299, image: "https://images.unsplash.com/photo-1651047454187-a7a066e5ad8d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "women" },
  { name: "Denim Jacket", price: 1899, image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Track Pants", price: 1099, image: "https://plus.unsplash.com/premium_photo-1663127418625-c0e830951709?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Crop Top", price: 699, image: "https://images.unsplash.com/photo-1525550133628-43e58e551e6f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "women" },
  { name: "Sunglasses", price: 899, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Cap", price: 499, image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Handbag", price: 1699, image: "https://plus.unsplash.com/premium_photo-1723826753083-2309f7203ab1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Men's Suit", price: 3499, image: "https://images.unsplash.com/photo-1555097074-b16ec85d6b3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Leather Belt", price: 599, image: "https://images.unsplash.com/photo-1705493655920-20c572928501?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Women's Heels", price: 1499, image: "https://images.unsplash.com/photo-1605733513549-de9b150bd70d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "women" },
  { name: "Leggings", price: 799, image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "women" },
  { name: "Wallet", price: 999, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Ankle Boots", price: 2299, image: "https://plus.unsplash.com/premium_photo-1729285270693-3131f27a56c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "shoes" },
  { name: "Saree", price: 1999, image: "https://images.unsplash.com/photo-1610189025857-f42fe6e8dd91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "women" },
  { name: "Sweatshirt", price: 999, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Men's Kurta", price: 899, image: "https://images.unsplash.com/photo-1727835523545-70ee992b5763?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Scarf", price: 399, image: "https://plus.unsplash.com/premium_photo-1695604461122-d26e0abae78d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Earrings", price: 299, image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Formal Trousers", price: 1199, image: "https://images.unsplash.com/photo-1741915313755-208c59c21165?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Flip Flops", price: 499, image: "https://images.unsplash.com/photo-1659963970293-b12cfeb286c5?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "shoes" },
  { name: "Joggers", price: 999, image: "https://images.unsplash.com/photo-1580906853305-5702e648164e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Leather Shoes", price: 2699, image: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "shoes" },
  { name: "Polo T-Shirt", price: 799, image: "https://images.unsplash.com/photo-1625910513399-c9fcba54338c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Beanie", price: 299, image: "https://plus.unsplash.com/premium_photo-1695603437311-fec2f916a0f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories" },
  { name: "Rain Jacket", price: 1599, image: "https://images.unsplash.com/photo-1655972670403-243839675e06?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men" },
  { name: "Tank Top", price: 599, image: "https://images.unsplash.com/flagged/photo-1559500717-44611046e95f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "women" }
];

async function seed() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('✅ Products seeded!');
  mongoose.disconnect();
}

seed();
