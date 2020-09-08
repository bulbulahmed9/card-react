import React from "react";
import imgOne from "../img/image01.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      {/* heading */}
      <div className="row">
        <div className="header row">
          <div className="content col-md-6">
            <h1 id="text04">Cayce Pollard</h1>
            <h3 id="text01">Multiverse Analyst</h3>
            <p id="text05">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
              torquent per nostra inceptos.
            </p>
            <div className="btn-grp">
              <Link className="button" to="/work">
                Work
              </Link>
              <Link className="button" to="/about">
                about
              </Link>
              <Link className="button" to="/contact">
                contact
              </Link>
            </div>
          </div>
          <div className="banner col-md-6">
            <img className="img-fluid" src={imgOne} alt="img" />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fas fa-envelope-square" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </div>
          <div>
            <p id="text03">© Cayce Pollard. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
