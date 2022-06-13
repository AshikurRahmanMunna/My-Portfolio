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
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const particlesAnimation = (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
  return (
    <div>
      <div class="hero min-h-screen lg:px-56 mx-auto text-white">
        {particlesAnimation}
        <div class="flex items-center w-full justify-between flex-col lg:flex-row-reverse">
          <img
            src={photo}
            style={{ width: "17rem" }}
            class="rounded-lg shadow-2xl z-40"
            alt="img"
          />
          <div>
            <h1 class="text-5xl font-raleway font-bold">Ashikur Rahman Munna</h1>
            <h4 class="py-3 text-2xl flex items-center font-semibold">
              I'm <span className="text-primary pl-2">{animation}</span>
            </h4>
            <div className="flex justify-between items-center w-2/6">
              <a
                rel="noreferrer noopener"
                target={"_blank"}
                href="https://www.facebook.com/ashikurrahman.munna.90"
              >
                <FontAwesomeIcon
                  className="text-2xl text-primary"
                  icon={faFacebook}
                />
              </a>
              <a
                rel="noreferrer noopener"
                target={"_blank"}
                href="https://www.linkedin.com/in/ashikur-rahman-munna-543917229/"
              >
                <FontAwesomeIcon
                  className="text-2xl text-primary"
                  icon={faLinkedin}
                />
              </a>
              <a
                rel="noreferrer noopener"
                target={"_blank"}
                href="https://github.com/AshikurRahmanMunna"
              >
                <FontAwesomeIcon
                  className="text-2xl text-primary"
                  icon={faGithubSquare}
                />
              </a>
              <a
                rel="noreferrer noopener"
                target={"_blank"}
                href="https://www.instagram.com/ashikurrahmanmunna3/"
              >
                <FontAwesomeIcon
                  className="text-2xl text-primary"
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
