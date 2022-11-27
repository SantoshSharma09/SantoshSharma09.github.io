import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import { fabbag, youtube, hotstar, sd, mailchimp } from "./Images/image";

const Projects = () => {
  AOS.init();
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={mailchimp} alt="mailchimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Mailchimp - Clone</h2>
              <p>Website where user cna email services.</p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                {/* <SiRedux /> */}
                <SiChakraui />
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://skillfull-react.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SantoshSharma09/Skillfull-React"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={fabbag} alt="bagbag" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>FabBag - Clone</h2>
              <p>
                FabBag is a e-commerce website where female can buy
                skincare-products.
              </p>
              <div>
                {/* <FaReact /> */}
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                {/* <SiChakraui /> */}
              </div>
              <div>
                <a
                  href="https://dazzling-croissant-c795aa.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SantoshSharma09/cold-throat-6863"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={youtube} alt="youtube" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Youtube - Demo</h2>
              <p>Website with HTML, CSS, JavaScript, Api call, Debouncing</p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://resilient-donut-88fc43.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/masai-course/santosh_sharma_fw20_1313/tree/master/unit-3/sprint-3/day-3/assignments/Question1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={hotstar} alt="hotstar" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Hotstar - Demo </h2>
              <p>
                Website built with HTML, CSS, JavaScript and other CSS
                Libraries.
                <br />
                Functionality : Api Call, Debouncing
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://elaborate-zabaione-40cb11.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/masai-course/santosh_sharma_fw20_1313/tree/master/unit-3/sprint-2/day-4/assignments/Question2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={sd} alt="studentDashboard" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Student Dashboard App</h2>
              <p>
                Responsive project to enter the data of the client to the
                specific section.
                <br />
                Tech Stack : Javascript, localStorage, CSS, HTML
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3 />
                {/* <FaReact /> */}
                {/* <SiChakraui /> */}
              </div>
              <div>
                <a
                  href="https://stalwart-melba-705f99.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/masai-course/santosh_sharma_fw20_1313/tree/master/unit-2/sprint-4/day-4/assignments/u2c4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__Projects"),
  "Projects",
  "app__primarybg"
);
