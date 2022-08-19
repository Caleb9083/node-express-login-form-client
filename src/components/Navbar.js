import "./styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>TopMovies</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
