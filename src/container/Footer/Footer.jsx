import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../styles/Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  AOS.init();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x5knajj",
        "template_1caqvnp",
        form.current,
        "K7cd1CmIkydX1cHhF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message send");
        },
        (error) => {
          console.log(error.text);
          alert("somethings wrong");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <h2 className="head-text" data-aos="fade-right">
        Contact Details
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

        <div className={styles.contactcontainer}>
          <div className={styles.wrapper}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                style={{ height: "40px" }}
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className={styles.inpboxx}
              />
              <input
                style={{ height: "40px" }}
                type="email"
                placeholder="Email"
                name="user_email"
                required
                className={styles.inpboxx}
              />
              <input
                style={{ height: "40px" }}
                type="text"
                placeholder="Subject"
                name="subject"
                required
                className={styles.inpboxx}
              />
              <textarea
                style={{ height: "100px", width: "400px", marginTop: "10px" }}
                cols="42"
                rows="4"
                placeholder="write your message"
              ></textarea>
              <button
                style={{ display: "flex", marginTop: "10px", margin: "auto" }}
                type="submit"
                className={styles.button73}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
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

      <h3
        class="footer-love"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        By : Santosh Sharma
      </h3>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
