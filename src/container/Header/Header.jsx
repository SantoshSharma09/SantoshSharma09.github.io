import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import ResumePDF from "./Santosh_Sharma_Resume.pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const onButtonClick = () => {
  window.open(
    "https://drive.google.com/file/d/1ah7a1cotcmOdPCiiUR-GtJnQJWep75HT/view?usp=share_link"
  );
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div style={{ marginLeft: "0px" }} className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ paddingRight: "5px" }}>
            <p className="p-text">Hello, I am</p>
            <p
              className="head-text"
              style={{ color: "#6b7688", fontSize: "26px" }}
            >
              Santosh Sharma
            </p>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p
            style={{
              color: "#6b7688",
              fontSize: "18px",
              padding: "8px 10px 8px 10px",
            }}
            className="p-text"
          >
            Full-Stack Developer
          </p>
          <p className="p-text"></p>
        </div>
        <a
          style={{ display: "flex", marginTop: "30px", gap: "10px" }}
          href={ResumePDF}
          download
          onClick={onButtonClick}
        >
          <AiOutlineCloudDownload
            className="resume-download-icon"
            fontSize="30px"
          />
          <p style={{ color: "white" }} className="p-text-resume">
            Resume
          </p>
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img
        src="https://avatars.githubusercontent.com/u/109049556?v=4"
        alt="profile_bg"
        style={{
          width: "60%",
          background: "transparent",
          backgroundImage: "none",
          borderRadius: "50% 50% 50% 50%",
        }}
      />
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
