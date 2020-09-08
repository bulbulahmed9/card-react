import React from "react";
import imgThree from '../img/image03.jpg'
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work">
      <div className="row">
        <div className="col-md-6 banner">
          <img className="img-fluid" src={imgThree} alt="img" />
        </div>
        <div className="col-md-6 content">
          <h2 id="text06">Work</h2>
          <p id="text07">
            <span>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
              per conubia nostra, per inceptos himenaeos. Etiam tristique libero
              eu nibh porttitor. Nullam venenatis erat id vehicula ultrices sed
              ultricies condimentum. Magna sed etiam consequat, et lorem
              adipiscing sed nulla.
            </span>
            <br /> <br />{" "}
            <span>
              Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
              etiam consequat, et lorem adipiscing sed dolor sit amet,
              consectetur amet do eiusmod tempor incididunt ipsum suspendisse
              ultrices gravida.
            </span>
            <br /> <br />{" "}
            <span>
              Etiam tristique libero eu nibh porttitor amet fermentum. Nullam
              venenatis erat id vehicula ultrices.
            </span>
          </p>
          <Link className="button" to="/">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
