
// ProductDetail.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         console.log("Response:", response); // Yahaan `response` ko log karenge
        
//         const data = await response.json();
//         setProduct(data);
//       } catch (err) {
//         console.error("Failed to fetch product details:", err);
//         setError("Product details not available. Please try again.");
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (error) return <p>{error}</p>;
//   if (!product) return <p>Loading product details...</p>;

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>${product.price.toFixed(2)} / lb</p>
//       <p>{product.description}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetail;

// import React, { useEffect, useState } from 'react';
// import ProductItem from './ProductItem';

// const ProductList = ({ url }) => {
//   const [productItems, setProductItems] = useState([]);
//   const [showSpinner, setShowSpinner] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setShowSpinner(true);
//       setError(null);

//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const output = await response.json();
//         setProductItems(output.products || []); // Ensure it's always an array
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to load products. Please try again later.");
//       } finally {
//         setShowSpinner(false);
//       }
//     };

//     fetchProducts();
//   }, [url]);

//   if (showSpinner) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (productItems.length === 0) return <p>No products available.</p>; // Handle no products case

//   return (
//     <div>
//       {productItems.map((product) => (
//         <ProductItem key={product.id} product={product} onAddToCart={() => alert(`Added ${product.title} to cart`)} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product details:", err);
        setError("Product details not available. Please try again.");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading product details...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>${product.price.toFixed(2)} / lb</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
