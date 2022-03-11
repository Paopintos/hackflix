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
          Hackflix is a movie catalogue using React and{" "}
          <a
            className="links-about"
            href="https://developers.themoviedb.org/3/getting-started/introduction"
          >
            themoviedb API
          </a>
          , made by Paola Pintos. The main objective was to show the movies from
          the API and filter them by rating and title, the rest of the views are
          for stethic only. For example, the contact page doesn't really send
          any email, but maybe later i will implement that functionality. If you
          liked this project and want to know more about me, you can reach out
          to me at
          <a
            className="links-about"
            href="https://www.linkedin.com/in/paolapintos/"
          >
            Linkedin
          </a>{" "}
          or
          <a className="links-about" href="mailto: paopintos2000@gmail.com">
            Email
          </a>
          , and check out my{" "}
          <a className="links-about" href="https://github.com/Paopintos">
            Github!
          </a>{" "}
          Thanks for reading this far :)
        </p>
        <Link to="/contact">
          <button className="btn-about">Contact me</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
