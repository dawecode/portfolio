import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="contact child">
      <h1> Contact me </h1>
      <section className="contact__social-media-icons">
        <a href="https://www.linkedin.com/in/dawecm/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon
            className="footer__social-media-icon"
            icon={faLinkedin}
          />
        </a>
        
        <a href="https://github.com/dawecode" rel="noreferrer" target="_blank">
          
          <FontAwesomeIcon
            className="footer__social-media-icon"
            icon={faGithubSquare}
          />
        </a>
        <a class="mailto" href="mailto:dawe.cm@gmail.com">
          <FontAwesomeIcon
            className="footer__social-media-icon"
            icon={faEnvelope}
          />
        </a>
      </section>
    </div>
  );
}
