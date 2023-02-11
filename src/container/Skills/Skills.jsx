import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import Githubcalendar from "react-github-calendar";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMaterialui,
  SiChakraui,
  SiExpress,
  SiNetlify,
  SiVercel,
  SiPostman,
  // SiPostman,
} from "react-icons/si";
import { DiMongodb, DiHeroku } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
const Skills = () => {
  AOS.init();
  return (
    <>
      <h2 className="head-text" data-aos="fade-right">
        My Skills
      </h2>

      <div className="app__skills-container" data-aos="fade-right">
        <motion.div className="app__skills-list">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiJavascript />
            </div>
            <p className="p-text">JavaScript</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiHtml5 />
            </div>
            <p className="p-text">HTML</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiCss3 />
            </div>
            <p className="p-text">CSS</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <FaReact />
            </div>
            <p className="p-text">React</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiRedux />
            </div>
            <p className="p-text">Redux</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiExpress />
            </div>
            <p className="p-text">Express</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <FaNodeJs />
            </div>
            <p className="p-text">Nodejs</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <DiMongodb />
            </div>
            <p className="p-text">MongoDB</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiChakraui />
            </div>
            <p className="p-text">Chakra UI</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiMaterialui />
            </div>
            <p className="p-text">Material UI</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <BsBootstrap />
            </div>
            <p className="p-text">Bootstrap</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiPostman />
            </div>
            <p className="p-text">Postman</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <VscGithub />
            </div>
            <p className="p-text">GitHub</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiNetlify />
            </div>
            <p className="p-text">Netlify</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiVercel />
            </div>
            <p className="p-text">Vercel</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <DiHeroku />
            </div>
            <p className="p-text">Heroku</p>
          </motion.div>
        </motion.div>
      </div>
      <br />
      <br />
      <div>
        <h2 className="head-text" data-aos="fade-right">
          Days I <span>Code</span>
        </h2>
        <br />
        <br />
        <div data-aos="fade-right">
          <Githubcalendar
            username="SantoshSharma09 "
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div>
        <h2 className="head-text" data-aos="fade-right">
          GitHub Stats
        </h2>
        <br />
        <div>
          <img
            src="https://camo.githubusercontent.com/92e4bffab3d5536d6950781e7656d7b8871f84987e9fcbc5dab4905cb3ece45f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73616e746f7368736861726d6130392673686f775f69636f6e733d74727565266c6f63616c653d656e"
            style={{ marginRight: "10px" }}
          />
          <img src="https://camo.githubusercontent.com/bf49846a4b5ca6d44c6b6e12e6a2f1973309410426484d7d07f6a8ca0cc1583a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d73616e746f7368736861726d6130392673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" />
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
