import "./Almond.css";
const Almond = () => {
  return (
    <div className="almond">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className=" col-sm-6 col-10 like p-5 ">
            <div className="row align-items-center  justify-content-center">
              <div className="col-lg-6 col-10 d-flex flex-column align-items-start">
                <h2 className="nut">Wild like a Nut??</h2>
                <h5 className="fs-1 fw-bold mt-4 mb-4">
                  Roasted <br /> Almond
                </h5>
                <p className="">
                  All the treasures are hidden in a chest. Respectively, our
                  treasures are enclosed in their Wild shell.
                </p>
                <span className="fw-bold mt-3 mb-4">250G | 5,00€</span>
                <button className="btn btn-dark rounded-5 px-5">
                  TASTE IT!
                </button>
              </div>
              <div className="col-lg-6 col-d-flex-5  align-items-center">
                <img className="offset-5 img-fluid" src="./img/qol.png" alt="" />
                <img className="img-fluid" src="./img/bodom.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-10 mx-5 align-items-center justify-content-center d-flex flex-column">
            <p className="fs-5  text-center">
              DISCOVER OUR PRODUCTS THROUGH THE 5 TREASURES OF NATURE!
            </p>
            <h4>Sesame</h4>
            <p>_____________</p>
            <h4>Peanut</h4>
            <p>_____________</p>
            <h4>Almond</h4>
            <p>_____________</p>
            <h4>Hazelunt</h4>
            <p>_____________</p>
            <h4>Cashew</h4>
            <p>_____________</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Almond;
