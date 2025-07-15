import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="wildsouls-container text-center">
      <p className="text-center bg-black text-white p-2">
        Free shipping in Greece for Wild orders over 50 euros!
      </p>
      <nav className="navbar navbar-expand navbar-light bg-transparent px-5 pt-3">
        <div className="container">
          <div className="collapse d-lg-flex flex-wrap align-items-center navbar-collapse justify-content-between">
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WHO WE ARE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONCEPT STORE
                </a>
              </li>
            </ul>
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RECIPES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LOG IN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CART (0)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <img src="./img/logo.png" alt="" className="img-fluid" />
      </div>

      <div className="hero-section mt-4">
        <h1 className="display-4 fw-bold">Taste the Wild.</h1>
        <h1 className="display-4 fw-bold">Find your Soul.</h1>
      </div>
    </div>
  );
};
export default Navbar;
