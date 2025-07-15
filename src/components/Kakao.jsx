import React from "react";
import "./Kakao.css";

const products = [
  {
    name: "The Wild Peanut Butter",
    price: "€4,90",
    image: "./img/img1.png",
    bgClass: "bg-green",
    btnClass: "Buy Now",
  },
  {
    name: "Tahini with Cocoa & Honey",
    price: "€5,90",
    image: "./img/img2.png",
    bgClass: "bg-brown",
    btnClass: "Buy Now",

  },
  {
    name: "The Wild Hazelnut Butter",
    price: "€6,90",
    image: "./img/img3.png",
    bgClass: "bg-purple",
    btnClass: "Buy Now",
  },
];

const Kakao = () => {
  return (
    <div className="kakao">
      <div className="container">
        <div className="row justify-content-center gy-5">
          {products.map((product) => (
            <div className="col-lg-4 col-sm-6 col-12 d-flex flex-column align-items-start justify-content-center flex-wrap">
              <img className="img-fluid" src={product.image} alt="" />
              <h4 className="">{product.name}</h4>
              <span>{product.price}</span>
              <div>
                <button className="butn">{product.btnClass}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kakao;
