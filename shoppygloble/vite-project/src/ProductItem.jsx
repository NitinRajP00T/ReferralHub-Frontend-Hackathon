

// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <h2 className="item-name">{product.title}</h2>
      <p className="item-price">${product.price.toFixed(2)} / lb</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

// PropTypes for prop validation
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductItem;

