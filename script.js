// Load cart from localStorage or start with empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ✅ Make addToCart globally accessible
window.addToCart = function (product) {
  let index = cart.findIndex(item => item.name === product.name);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart`);
};

// ✅ Make updateCartCount globally accessible
window.updateCartCount = function () {
  let count = 0;
  cart.forEach(item => {
    count += item.quantity;
  });
  const countSpan = document.getElementById("cart-count");
  if (countSpan) {
    countSpan.innerText = count;
  }
};

// Load and display all cart items (for cart.html)
window.loadCartItems = function () {
  const container = document.getElementById("cart-items");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" width="100">
      <div class="cart-details">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <div>
          <button onclick="decreaseQty(${index})">−</button>
          <span style="margin: 0 10px;">${item.quantity}</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>
        <button onclick="removeFromCart(${index})" style="margin-top:10px;">Remove</button>
      </div>
    `;
    total += item.price * item.quantity;
    container.appendChild(div);
  });

  const totalElem = document.getElementById("cart-total");
  if (totalElem) {
    totalElem.innerText = `Total: ₹${total}`;
  }
};

// Increase quantity of a product
window.increaseQty = function (index) {
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartItems();
  updateCartCount();
};

// Decrease quantity or remove if it’s 1
window.decreaseQty = function (index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartItems();
  updateCartCount();
};

// Remove a product from the cart
window.removeFromCart = function (index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartItems();
  updateCartCount();
};

// Logout handler
window.logout = function () {
  localStorage.removeItem("currentUser");
  alert("Logged out!");
  window.location.href = "login.html";
};

// Search product filter (on index.html)
window.filterProducts = function () {
  const query = document.getElementById("search-box").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.getAttribute("data-name");
    if (name && name.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};
