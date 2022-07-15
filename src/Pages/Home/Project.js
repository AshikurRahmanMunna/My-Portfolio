import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faInfo,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const {
    img,
    name,
    id,
    clientCode,
    serverCode,
    liveSite,
  } = project;
  const navigate = useNavigate();
  return (
    <div id="projects" className="card rounded-lg bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="bg-secondary p-6 pl-8">
        <h2 className="card-title pb-2">{name}</h2>
        <div className="flex items-center">
          {clientCode && (
            <div className="tooltip tooltip-bottom" data-tip="Client Code">
              <a rel="noopener noreferrer" target={"_blank"} href={clientCode}>
                <button className="w-10 h-10 mr-2 rounded-full bg-primary">
                  <FontAwesomeIcon className="text-black" icon={faCode} />
                </button>
              </a>
            </div>
          )}
          {serverCode && (
            <div className="tooltip tooltip-bottom" data-tip="Server Code">
              <a rel="noopener noreferrer" target={"_blank"} href={serverCode}>
                <button className="w-10 h-10 mr-2 rounded-full bg-primary">
                  <FontAwesomeIcon className="text-black" icon={faServer} />
                </button>
              </a>
            </div>
          )}
          {liveSite && (
            <div className="tooltip tooltip-bottom" data-tip="Live Site">
              <a rel="noopener noreferrer" target={"_blank"} href={liveSite}>
                <button className="w-10 h-10 mr-2 rounded-full bg-primary">
                  <FontAwesomeIcon className="text-black" icon={faGlobe} />
                </button>
              </a>
            </div>
          )}
          <div className="tooltip tooltip-bottom" data-tip="Details">
            <button onClick={() => navigate(`/project/${id}`)} className="w-10 h-10 rounded-full mr-2 bg-primary">
              <FontAwesomeIcon className="text-black" icon={faInfo} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
