import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import resume from "../../assets/files/Resume Munna.pdf";
import photo from "../../assets/photos/munna.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  faFacebook,
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  const animation = (
    <TypeWriterEffect
      multiText={[
        "Full Stack Web Developer",
        "MERN Stack Developer",
        "React JS Developer",
        "Web Developer",
      ]}
      cursorColor="#F97415"
      typeSpeed={100}
      hideCursorAfterText={true}
    />
  );

  return (
    <div>
      <div className="hero min-h-screen lg:px-56 mx-auto text-white">
        <div className="flex items-center w-full justify-between flex-col lg:flex-row-reverse">
          <img
            src={photo}
            style={{ width: "17rem" }}
            className="rounded-lg shadow-2xl z-40 lg:w-full lg:mt-0 mt-20"
            alt="img"
          />
          <div className="lg:mt-0 mt-5">
            <h1 className="lg:text-5xl text-2xl font-raleway font-bold">
              Ashikur Rahman <span className="text-primary">Munna</span>
            </h1>
            <h4 className="lg:py-3 py-1 lg:text-2xl text-xl flex items-center font-semibold">
            I'm <span className="text-primary pl-2">{animation}</span>
            </h4>
            <div className="flex justify-between items-center lg:w-2/6 w-3/6">
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
            <a
              href={resume}
              className="btn btn-primary mt-3 text-white hover:bg-transparent"
              download
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
