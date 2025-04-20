import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Heirloom Tomato', price: 5.99, quantity: 1 },
    { id: 2, name: 'Organic Ginger', price: 12.99, quantity: 0.5 }
  ]);

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => 
      prevItems
        .map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity - 0.5 } 
            : item
        )
        .filter(item => item.quantity > 0) // Filter out items with zero quantity
    );
  };

  return (
    <div>
      {cartItems.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onIncrease={() => increaseQuantity(item.id)} 
          onRemove={() => removeItem(item.id)} 
        />
      ))}
    </div>
  );
};

export default Cart;
