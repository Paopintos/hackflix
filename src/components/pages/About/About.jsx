import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="container-about">
        <h1 className="h1-about">Hi there,</h1>
        <div className="h2-img-about">
          <h2 className="h2-about">Let's talk about </h2>
          <img
            className="img-about"
            src="../../../hackflix-logo.png"
            alt="Hackflix"
          />
        </div>
        <p className="p-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis
          soluta suscipit nobis, dolores architecto eaque sunt fugiat voluptatem
          laboriosam impedit possimus nesciunt consequatur dolorem quas
          voluptatum commodi incidunt harum. Praesentium nulla veritatis
          assumenda porro minima adipisci. Doloremque accusamus, nobis saepe sed
          ullam rerum aliquid beatae praesentium neque nesciunt! Et amet eos id
          harum accusamus cumque expedita provident veritatis. Enim. Vel sequi
          magni totam labore hic ab sit nisi quam possimus, iste eos magnam
          facere nemo nostrum!
        </p>
        <Link to="/contact">
          <button className="btn-about">Contact us</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
