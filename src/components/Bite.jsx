import "./Bite.css";

const Bite = () => {
  return (
    <div className="bite">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-3 col-10">
            <h2 className="store">The Five Treasures</h2>
            <p>
              We invite you to explore it, live it, and take photographs of it.
              But be careful, it is very addictive!
            </p>
            <button className="btn btn-dark rounded-5 mt-5 px-5 p-0">
              DISCOVER MORE!
            </button>
          </div>
          <div className="col-md-6 col-10">
            <img className="img-fluid" src="./img/zero.png" alt="" />
            <img className="img-fluid" src="./img/kaktus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bite;
