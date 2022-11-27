import React from "react";
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target="_blank" href="https://github.com/SantoshSharma09">
        <GoMarkGithub />
      </a>
    </div>
    
    <div>
      <a target="_blank" href="www.linkedin.com/in/santosh-sharma-b802341b9">
        <SiLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
