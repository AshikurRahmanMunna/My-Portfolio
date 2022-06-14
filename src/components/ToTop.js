import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ToTop = () => {
  const [show, setShow] = useState(false);
  const handleToTop = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener('scroll', handleToTop);
  return (
    <div className={`${!show && 'hidden'}`}>
      <a
        href="/#"
        className="fixed flex items-center justify-center bottom-4 right-4 lg:bottom-10 lg:right-10 bg-secondary rounded-full w-12 h-12 lg:w-16 lg:h-16 z-50"
      >
        <FontAwesomeIcon
          icon={faAnglesUp}
          className="text-2xl lg:text-4xl text-primary"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default ToTop;
