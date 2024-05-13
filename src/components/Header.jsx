import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-4 bg-dark text-white">
      <div className="container">
        <h1 className="display-4">
          <strong>Shopie</strong>
        </h1>
        <ul className="nav pt-3">
          <li className="nav-items">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-items">
            <Link to="about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
