import "./Way.css";
const Way = () => {
  return (
    <div className="way">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center gy-5">
          <div className="col-lg-4 col-7 d-flex align-items-start flex-column  ">
            <p className="our">Our <br /> Wild Way</p>
            <p className="fs-5 ">
              Our philosophy is present in every stage of our production. We are
              endeavoring to contribute to the creation of a better world.
            </p>
            <button className="btn btn-dark px-5">DISCOVER MORE!</button>
          </div>
          <div className="col-lg-8 col-7 ">
            <img className="img-fluid" src="./img/way.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Way;
