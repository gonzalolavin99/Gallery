import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <div>
      {" "}
      <Navbar bg="success" variant="success" data-bs-theme="dark" className="navbar">
        <Container>
        <div >
                <Link
                  to="/"
                  className="text-white ms-3 text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to="/favoritos"
                  className="text-white ms-3 text-decoration-none"
                >
                  Favoritos
                </Link>
              </div>
        </Container>{" "}
      </Navbar>
    </div>
  );
};

export default NavBar;
