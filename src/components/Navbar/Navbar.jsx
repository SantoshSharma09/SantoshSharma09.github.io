import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import ResumePDF from "./fw20_1313-Santosh-Sharma-Resume.pdf";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const onButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/15fuNksfAmaKVIU0r-AF2sgBcbBQpo5I4/view?usp=share_link"
    );
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h4 className="name-tag">Santosh Sharma</h4>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "Projects", "contact", "resume"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              {item === "resume" ? (
                <a
                  style={{ color: "white" }}
                  href={ResumePDF}
                  download
                  onClick={onButtonClick}
                >
                  {item}
                </a>
              ) : (
                <a
                  style={{ color: "white" }}
                  href={`#${item}`}
                  onClick={() => setToggle(false)}
                >
                  {item}
                </a>
              )}
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "skills", "Projects", "contact", "resume"].map(
                (item) => (
                  <li key={item}>
                    {item === "resume" ? (
                      <a
                        style={{ color: "black" }}
                        href={ResumePDF}
                        download
                        onClick={onButtonClick}
                      >
                        {item}
                      </a>
                    ) : (
                      <a
                        style={{ color: "black" }}
                        href={`#${item}`}
                        onClick={() => setToggle(false)}
                      >
                        {item}
                      </a>
                    )}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
