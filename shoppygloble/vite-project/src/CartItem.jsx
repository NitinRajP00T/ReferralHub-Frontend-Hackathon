// import React from 'react';

// const CartItem = ({ item }) => {
//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>Price: ${item.price.toFixed(2)} / lb</p>
//       <p>Quantity: {item.quantity} lb</p>
//       <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//       <button>Remove</button>
//     </div>
//   );
// };

// export default CartItem;

// import React from 'react';

// const CartItem = ({ item, onIncrease }) => {
//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>Price: ${item.price.toFixed(2)} / lb</p>
//       <p>Quantity: {item.quantity} lb</p>
//       <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//       <button onClick={onIncrease}>Increase Quantity</button>
//       <button>Remove</button>
//     </div>
//   );
// };

// export default CartItem;

// import React from 'react';
// import './CartItem.css';

// const CartItem = ({ item, onIncrease }) => {
//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>Price: ${item.price.toFixed(2)} / lb</p>
//       <p>Quantity: {item.quantity} lb</p>
//       <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//       <button onClick={onIncrease}>Increase Quantity</button>
//       <button onClick={onRemove}>Remove</button>
//     </div>
//   );
// };

// export default CartItem;

import React from 'react';
import './CartItem.css';
import { Plus, Trash } from 'lucide-react';

const CartItem = ({ item, onIncrease, onRemove }) => {
  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <p>Price: ${item.price.toFixed(2)} / lb</p>
      <p>Quantity: {item.quantity} lb</p>
      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={onIncrease} title="Increase Quantity">
        <Plus size={16} /> Increase Quantity
      </button>
      <button onClick={onRemove} title="Remove Item">
        <Trash size={16} /> Remove
      </button>
    </div>
  );
};

export default CartItem;


