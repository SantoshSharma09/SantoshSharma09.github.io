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
import { fabbag, flower, mailchimp, nayaka } from "./Images/image";

const Projects = () => {
  AOS.init();
  return (
    <>
      <div className="section">
        <h2
          style={{ textAlign: "center" }}
          className="section__title different"
          data-aos="fade-right"
        >
          Projects
        </h2>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={nayaka} alt="nykaa" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Nykaa.com - Clone</h2>
              <p>
                Nykaa is India's biggest lifestyle and fashion portal with a
                collection of cosmetics, skincare, haircare, fragrances, bath
                and body, personal care, and wellness ...
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://panachebeauty.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AdityaBr11/Nykaa-Clone"
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
                <img src={flower} alt="flower" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>1800flower.com - Clone</h2>
              <p>
                1-800-Flowers.com, Inc. is a floral and foods gift retailer and
                distribution company in the United States. This is a
                collaborative project build in 4 days.{" "}
              </p>
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
                  href="https://flower18.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SantoshSharma09/1800flowers-clone"
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
                <img src={mailchimp} alt="mailchimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Mailchimp.com - Clone </h2>
              <p>
                Mailchimp, also known as Intuit Mailchimp, is a marketing
                automation platform and email marketing service. Solo project
                completed in 4 days.
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
                  href="https://skillfull-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SantoshSharma09/Mailchimp-clone"
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
