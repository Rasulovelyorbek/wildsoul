import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <h1>Stay Wild!</h1>
            <p>Write your email</p>
            <hr />
            <div className="">
              <p className="fs-3">Follow Us</p>
              <i class="fa-brands fa-instagram mx-2 fs-3"></i>
              <i class="fa-brands fa-facebook fs-3"></i>
            </div>
            <div className="mt-5">
              <img className="img-fluid mb-3" src="./img/vis.png" alt="" />
              <h6>Copyright 2021 Wild Souls</h6>
              <h6>Website by Big Horror + No Matter</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <ul className="navbar-nav">
              <a class="navbar-brand fs-3 fw-bold" href="#">
                Products
              </a>
              <li>
                <a href="" className="nav-link">
                  Sesame Βutter / Tahini
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Nut Butters
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Honey
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Marmalades
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Halva
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Dry Nuts
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Open Sesame
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Gift Card
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mt-5">
              <a class="navbar-brand fs-3 fw-bold" href="#">
                Contact
              </a>
              <li>
                <a href="" className="nav-link">
                  info@wildsouls.gr
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  +30 210 3231 438
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <ul className="navbar-nav">
              <a class="navbar-brand fs-3 fw-bold" href="#">
                Company
              </a>
              <li>
                <a href="" className="nav-link">
                  Sesame ΒutteWho we are
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  NOur Wild Way
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Concept Store
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  The Five Treasures
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Recipes
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mt-5">
              <a class="navbar-brand fs-3 fw-bold" href="#">
                Help
              </a>
              <li>
                <a href="" className="nav-link">
                  iTerms & Conditions
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Cookies
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img className="mt-5 img-fluid mb-5"  src="./img/footr.png" alt="" />
    </div>
  );
};

export default Footer;
