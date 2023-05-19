import React, { ReactElement } from "react";
import image1 from "../../photos/DSC4721v2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.scss";

const About = (): ReactElement => {
  AOS.init();
  return (
    <div className="about-container" id="about">
      <div className="about-info-container" data-aos="fade-right">
        <h1 className="about-title">About</h1>
        <p className="about-paragraph">
          After years spent in post-secondary administration, I&#39;ve decided
          to take the leap into web development. What started years ago as a
          hobby in my free time has become a passion and something I&#39;m
          committed to pursuing professionally.
        </p>
        <h2 className="about-title subheading">Competencies</h2>
        <p className="about-paragraph">
          HTML5 / CSS3 / JavaScript / React / JSX / NPM / JSON / Git / Bash
        </p>
        <h2 className="about-title subheading">Used in the Past</h2>
        <p className="about-paragraph">
          SQL / Node.js / Express.js / Java / PHP
        </p>
      </div>
      <div className="about-image-container" data-aos="fade-left">
        <p className="pup-title banzai-title">BANZAI</p>
        <img className="about-image" src={image1} alt="" />
        <p className="pup-title penny-title">
          PENNY <p>(sans snot)</p>
        </p>
      </div>
    </div>
  );
};

export default About;
