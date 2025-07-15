import React from "react";
import "./Recipes.css";
const products = [
  {
    name: "Coleslaw with High Fibre Tahini",
    price: "Salty",
    image: "./img/salty1.png",
    bgClass: "bg-green",
    btnClass: "Buy Now",
  },
  {
    name: "Wild Hummus",
    price: "Salty",
    image: "./img/salty2.png",
    bgClass: "bg-brown",
    btnClass: "Buy Now",
  },
  {
    name: "Wild 6 Ingredient Granola",
    price: "Sweet",
    image: "./img/sweety.png",
    bgClass: "bg-purple",
    btnClass: "Buy Now",
  },
];

const Recipes = () => {
  return (
    <div className="recipes">
      <div className="container">
        <h2 className="text-center">Wild Recipes</h2>
        <p className="text-center">
          Take a look at the keyhole of our Wild kitchen! Get ideas on how to
          turn your own kitchen into a Wild.
        </p>
        <div className="mt-5 row justify-content-center gy-5">
          {products.map((product) => (
            <div className="col-lg-4 col-sm-6 col-12 d-flex flex-column align-items-start justify-content-center flex-wrap">
              <img className="img-fluid" src={product.image} alt="" />
              <span>{product.price}</span>
              <h4 className="">{product.name}</h4>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
