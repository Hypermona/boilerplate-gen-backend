import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">LOGO</h1>
      <nav className="navs">
        <div>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </div>
        <div>
          <Link to="about" style={{ color: "white" }}>
            About
          </Link>
        </div>
        <div>
          <Link to="contact" style={{ color: "white" }}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
