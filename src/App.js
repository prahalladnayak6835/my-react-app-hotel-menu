// src/App.js
import React, { useState } from 'react';
import './App.css';

const hotelLogo = 'https://marketplace.canva.com/EAE0d_FW6ZA/1/0/1600w/canva-retro-vector-gold-frames-luxury-decorative-logo-template-uDFt-cAE2ug.jpg'; // Replace with your actual logo path

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const menu = {
    veg: [
      { name: 'Veg Biriyani', price: 200 },
      { name: 'Mushroom Biriyani', price: 250 },
      { name: 'Veg chilly', price: 200 },
      { name: 'Mushroom chilly', price: 250 },
      { name: 'Paneer chilly', price: 200 },
      { name: 'Baby Corn chilly', price: 180 },
    ],
    nonVeg: [
      { name: 'Chicken Biriyani', price: 20 },
      { name: 'Egg Biriyani', price: 250 },
      { name: 'Chicken chilly', price: 200 },
      { name: 'Egg chilly', price: 250 },
      { name: 'Prawn chilly', price: 200 },
      { name: 'Chicken Masala', price: 180 },
    ],
    dessert: [
      { name: 'Ice cream', price: 8 },
      { name: 'Gulab jamun', price: 12 },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  
  const handleItemSelect = (item) => {
    const existingItemIndex = selectedItems.findIndex((i) => i.name === item.name);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity += 1;
      setSelectedItems(updatedItems);
    } else {
      // If the item is not in the cart, add it as a new item with quantity 1
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="app">
      <header>
        <img src={hotelLogo} alt="Hotel Logo" />
        <h1>Hotel Menu</h1>
      </header>

      <div className="menu">
        <div className="categories">
          <button onClick={() => handleCategoryChange('veg')}>Veg</button>
          <button onClick={() => handleCategoryChange('nonVeg')}>Non Veg</button>
          <button onClick={() => handleCategoryChange('dessert')}>Dessert</button>
        </div>

        <div className="items">
          {selectedCategory &&
            menu[selectedCategory].map((item, index) => (
              <div key={index} className="item">
                <p>{item.name}</p>
                <p>Price: ₹{item.price}</p>
                <button onClick={() => handleItemSelect(item, 1)}>Add to Cart</button>
              </div>
            ))}
        </div>
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Total: ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
