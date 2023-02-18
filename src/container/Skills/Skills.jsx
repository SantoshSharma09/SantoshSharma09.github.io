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
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiJavascript />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              JavaScript
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiHtml5 />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              HTML
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiCss3 />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              CSS
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <FaReact />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              React
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiRedux />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Redux
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiExpress />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Express
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <FaNodeJs />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Nodejs
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <DiMongodb />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              MongoDB
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiChakraui />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Chakra UI
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiMaterialui />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Material UI
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <BsBootstrap />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Bootstrap
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiPostman />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Postman
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <VscGithub />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              GitHub
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiNetlify />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Netlify
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <SiVercel />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Vercel
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            style={{ backgroundColor: "black" }}
          >
            <div className="app__flex" style={{ backgroundColor: "none" }}>
              <DiHeroku />
            </div>
            <p style={{ color: "white", fontSize: "18px" }} className="p-text">
              Heroku
            </p>
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
      <div className="github">
        <h2 className="head-text" data-aos="fade-right">
          GitHub Stats
        </h2>
        <br />
        <div
          style={{
            textAlign: "center",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <p>
            &nbsp;
            <img
              width="100%"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=santoshsharma09&show_icons=true&locale=en&layout=compact"
              alt="santoshsharma09"
            />
          </p>

          <p>
            &nbsp;
            <img
              align="center"
              width="100%"
              src="https://github-readme-stats.vercel.app/api?username=santoshsharma09&show_icons=true&locale=en"
              alt="santoshsharma09"
            />
          </p>

          <p>
            &nbsp;
            <img
              width="100%"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=santoshsharma09&"
              alt="santoshsharma09"
            />
          </p>
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
