import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
// import { Timeline } from "../timeline/timeline";
import { abouts } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();

  return (
    <>
      <h1>About Me</h1>
      <p
        className="about"
        // data-aos="fade-right"
      >
        Hello! 👋, My name is Santosh Sharma, currently living in Delhi. I am
        passionate about building digital products that improve everyday
        experience for people. I am Quick learner and an aspiring full-stack web
        developer with core knowledge of MERN stack technology. Looking forward
        to apply and enhance my skills and knowledge as a developer.
      </p>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
