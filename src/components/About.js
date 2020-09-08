import React from "react";
import imgTwo from "../img/image02.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="work">
      <div className="row">
        <div className="col-md-6 content">
          <h2 id="text08">About</h2>
          <p id="text09">
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam sed facilisis ante interdum congue. Integer mollis, nisl
            amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna
            finibus nisi nec lacinia ipsum maximus ac varius enim lorem dolore.
          </p>
          <Link className="button" to="/">
            Back
          </Link>
        </div>
        <div className="col-md-6 banner">
          <img className="img-fluid" src={imgTwo} alt />
        </div>
      </div>
    </div>
  );
};

export default About;
