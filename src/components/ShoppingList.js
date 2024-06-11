import React, { useState } from 'react';
import Item from './Item';

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [items, setItems] = useState([
    { id: 1, name: 'Apples', category: 'fruits', inCart: false },
    { id: 2, name: 'Milk', category: 'dairy', inCart: false },
    { id: 3, name: 'Bread', category: 'bakery', inCart: false },
    // Add more items as needed
  ]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCart = (itemId) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, inCart: !item.inCart } : item
    );
    setItems(updatedItems);
  };

  const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        {/* Add more categories as needed */}
      </select>
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
