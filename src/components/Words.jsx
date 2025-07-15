import "./Words.css";
const Words = () => {
  return (
    <div className="words p-5">
      <div className="container">
        <div className="row p-5 align-items-center justify-content-center g-5 mt-0">
          <div className="col-lg-4 col-7 align-items-center d-flex flex-column">
            <img className="img-fluid" src="./img/popangada.png" alt="" />
            <h5 className="text-center">POPANGADA</h5>
            <p className="text-center">
              A different shop in the center of Athens grinds fruit, offers
              butter made from just one ingredient, and halva flavors that
              confirm that healthy can be delicious.
            </p>
          </div>
          <div className="col-lg-4 col-7 align-items-center d-flex flex-column">
            <p className="text-center from">Words from the soul!</p>
          </div>
          <div className="col-lg-4 col-7 align-items-center d-flex flex-column">
            <img className="img-fluid" src="./img/popangada.png" alt="" />
            <h5 className="text-center">ATHENS VOICE</h5>
            <p className="text-center">
              Wild Souls works mainly with sesame and nut products (pistachio,
              hazelnut, almond, cashews), creating hellish spreads that you want
              to swallow with the jar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Words;
