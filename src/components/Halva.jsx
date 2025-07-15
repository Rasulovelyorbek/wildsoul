import React from "react";
import "./Halva.css";

const Halva = () => {
  return (
    <div className="halva">
      <div className="container-fluid">
        <div className="row align-items-center ">
          <div className="col-6 wild">
            <div className="row align-items-center">
              <div className="col-md-6 col-10">
                <h2 className="fs-1 fw-bold">Wild Halva</h2>
                <h4>A magical seed..</h4>
                <p>
                  It is neither a dessert nor a snack nor a proper meal. It is,
                  though, all these simultaneously. It is what you want it to
                  be.
                </p>
                <span className="fw-bold">500G | FROM 8,90€</span>
                <button className="btn btn-dark rounded-5 mt-5">DISCOVER THEM NOW!</button>
              </div>
              <div className="col-md-6 col-10">
                <img className="img-fluid" src="./img/halva.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-10 hand d-flex flex-column align-items-center mx-3">
            <img className="img-fluid" src="./img/hand.png" alt="" />
            <h2 className="text-center">Spread your Love with a Wild Gift!</h2>
            <button className="btn btn-dark rounded-5 p-3">DISCOVER THEM NOW!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halva;
