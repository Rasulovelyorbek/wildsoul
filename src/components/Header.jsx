import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="container-lg">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3 col-7  img-fluid ">
            <img src="./img/header_logo.png" alt="" />
          </div>
          <div className="col-md-5 col-7 d-flex flex-column align-items-center">
            <h2 className="wil">Wildly Loved</h2>
            <p className="lorem">
              You will find our wild products in their simplest form. No
              additives or anything else can spoil their nature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
