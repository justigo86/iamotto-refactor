import React, { ReactElement } from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from "react-icons/fa";
import resume from "../../photos/Justin_Otto_Resume.pdf";
import "./hero.scss";

const intros = [
  "am committed to improving every day.",
  "hope you like it here.",
  "think dogs are the best.",
  "eat more tacos than I should.",
  "know what you did last summer.",
  "am not convinced I know how to read. I've just memorized a lot of words.",
];

// const cycleIntros = () => {
//     let key = Object.keys(intros);
//     let rand = key[Math.floor(Math.random() * key.length)];
//     return intros[rand].text;
// }

const Hero = (): ReactElement => {
  return (
    <div id="home" className="hero-container">
      <div className="hero-background-img" />
      <div className="intro-container">
        <h1>J. Otto</h1>
        <p>Web Developer</p>
        <p className="hero-descriptions">
          and I&nbsp;
          <Typed
            className="typed"
            strings={intros}
            typeSpeed={12}
            backSpeed={10}
            backDelay={2500}
            loop
          />
        </p>
        <div className="hero-links">
          <Link
            className="hero-link"
            to="projects"
            smooth={true}
            duration={1000}
          >
            <a className="hero-link-atag" href="#projects">
              Projects
            </a>
          </Link>
          <span>/</span>
          <Link className="hero-link" to="about" smooth={true} duration={1000}>
            <a className="hero-link-atag" href="#about">
              About
            </a>
          </Link>
          <span>/</span>
          <Link
            className="hero-link"
            to="connect"
            smooth={true}
            duration={1000}
          >
            <a className="hero-link-atag" href="#connect">
              Connect
            </a>
          </Link>
        </div>
      </div>
      <ul className="hero-icons-container">
        <li className="hero-icons">
          <a
            id="git"
            href="https://github.com/justigo86"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </a>
        </li>
        <li className="hero-icons">
          <a
            id="mail"
            href="mailto: justigo86@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaEnvelope />
          </a>
        </li>
        <li className="hero-icons">
          <a
            id="linked"
            href="https://www.linkedin.com/in/justin-otto-m-s-ed-s-60b449100"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="hero-icons">
          <a
            id="resume"
            href={resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaRegFileAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
