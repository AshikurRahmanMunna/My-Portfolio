import {
  faFacebook,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary py-16 font-bold text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center container mx-auto lg:px-12">
        <h6 className="text-xl"><span className="text-primary">&copy;</span> 2022 All Rights Reserved</h6>
        <h6 className="text-xl mt-2 lg:mt-0">
          Ashikur Rahman <span className="text-primary">Munna</span>
        </h6>
        <div className="flex justify-between items-center w-3/6 lg:w-2/6 mt-4 lg:mt-0">
          <a
            rel="noreferrer noopener"
            target={"_blank"}
            href="https://www.facebook.com/ashikurrahman.munna.90"
          >
            <FontAwesomeIcon
              className="text-2xl text-primary social-links"
              icon={faFacebook}
            />
          </a>
          <a
            rel="noreferrer noopener"
            target={"_blank"}
            href="https://www.linkedin.com/in/ashikur-rahman-munna-543917229/"
          >
            <FontAwesomeIcon
              className="text-2xl text-primary social-links"
              icon={faLinkedin}
            />
          </a>
          <a
            rel="noreferrer noopener"
            target={"_blank"}
            href="https://github.com/AshikurRahmanMunna"
          >
            <FontAwesomeIcon
              className="text-2xl text-primary social-links"
              icon={faGithubSquare}
            />
          </a>
          <a
            rel="noreferrer noopener"
            target={"_blank"}
            href="https://www.instagram.com/ashikurrahmanmunna3/"
          >
            <FontAwesomeIcon
              className="text-2xl text-primary social-links"
              icon={faInstagramSquare}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
