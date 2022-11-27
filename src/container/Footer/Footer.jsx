import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  AOS.init();

  return (
    <>
      <h2 className="head-text" data-aos="fade-right">
        Take a coffee & chat with me
      </h2>

      <div className="app__footer-cards" data-aos="fade-right">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a
            target="_blank"
            href="mailto:san.kr.sharma090@gmail.com"
            className="p-text"
          >
            san.kr.sharma090@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a target="_blank" href="tel:+91 7531093977" className="p-text">
            +91 7531093977
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h2 className="head-text" data-aos="fade-right">
          Get In Touch
        </h2>
        <br />
        <br />
        <br />
        <div className="app__social_2" data-aos="fade-right">
          <div data-aos="fade-right">
            <a
              className="soc-1-icon"
              target="_blank"
              href="https://github.com/SantoshSharma09"
            >
              <GoMarkGithub />
            </a>
          </div>

          <div data-aos="fade-right">
            <a
              className="soc-4-icon"
              target="_blank"
              href="www.linkedin.com/in/santosh-sharma-b802341b9"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <h3
        class="footer-love"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        Santosh Sharma
      </h3>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
