// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/cart">Cart</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, Store, MoreHorizontal } from 'lucide-react';
import "./Header.css"
const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">shoppyGloble</Link> 
      </div>
      <div className="search-bar">
        <Search size={20} color="#999" />
        <input type="text" placeholder="Search for Products, Brands and more" />
      </div>
      <div className="nav-icons">
        <Link to="/profile">
          <User size={24} color="#333" />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={24} color="#333" />
        </Link>
        <Link to="/store">
          <Store size={24} color="#333" />
        </Link>
        <MoreHorizontal size={24} color="#333" />
      </div>
    </nav>
  );
};

export default Header;

