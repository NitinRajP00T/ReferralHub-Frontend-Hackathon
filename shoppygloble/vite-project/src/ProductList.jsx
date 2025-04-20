
// ProductList.js
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ url }) => {
  const [productItems, setProductItems] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setShowSpinner(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const output = await response.json();
        setProductItems(output.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setShowSpinner(false);
      }
    };

    fetchProducts();
  }, [url]);

  if (showSpinner) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {productItems.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={() => alert(`Added ${product.title} to cart`)} />
      ))}
    </div>
  );
};

export default ProductList;


// import React, { useEffect, useState } from 'react';
// import dummyTomatoImg from './dummyGingerImg.png'; // Image ko import karo
// //import dummyGingerImg from '/path/to/dummy-ginger.jpg'; // Image ko import karo

// const ProductList = ({ url }) => {
//   const [productItems, setProductItems] = useState([]);
//   const [showSpinner, setShowSpinner] = useState(true);
//   const [error, setError] = useState(null);

//   // Dummy data for fallback with imported images
//   const fallbackData = [
//     {
//       id: 1,
//       name: 'Dummy Tomato',
//       price: 5.99,
//       description: 'Fallback heirloom tomatoes.',
//       img: dummyTomatoImg  // Imported image ka path
//     },
//     {
//       id: 2,
//       name: 'Dummy Ginger',
//       price: 12.99,
//       description: 'Fallback organic ginger.',
//       img: dummyGingerImg  // Imported image ka path
//     }
//   ];

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
//         setProductItems(output.products);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to load products. Showing fallback data.");
//         setProductItems(fallbackData); // Use fallback data with images
//       } finally {
//         setShowSpinner(false);
//       }
//     };

//     fetchProducts();
//   }, [url]);

//   if (showSpinner) return <p>Loading...</p>;
//   if (error) console.warn(error);

//   return (
//     <div>
//       {productItems.map((product) => (
//         <div key={product.id} style={{ border: '1px solid #ccc', padding: '1em', margin: '1em' }}>
//           <h2>{product.name}</h2>
//           {product.img && <img src={product.img} alt={product.name} style={{ width: '100px', height: '100px' }} />}
//           <p>{product.description}</p>
//           <p>${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
