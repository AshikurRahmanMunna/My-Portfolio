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
    description,
    technologies,
    clientCode,
    serverCode,
    liveSite,
  } = project;
  const navigate = useNavigate();
  return (
    <div class="card rounded-lg bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div class="bg-secondary p-6 pl-8">
        <h2 class="card-title pb-2">{name}</h2>
        <div className="flex items-center justify-between w-2/4">
          {clientCode && (
            <div class="tooltip tooltip-bottom" data-tip="Client Code">
              <button className="w-10 h-10 rounded-full bg-primary">
                <FontAwesomeIcon icon={faCode} />
              </button>
            </div>
          )}
          {serverCode && (
            <div class="tooltip tooltip-bottom" data-tip="Server Code">
              <button className="w-10 h-10 rounded-full bg-primary">
                <FontAwesomeIcon icon={faServer} />
              </button>
            </div>
          )}
          {liveSite && (
            <div class="tooltip tooltip-bottom" data-tip="Live Site">
              <button className="w-10 h-10 rounded-full bg-primary">
                <FontAwesomeIcon icon={faGlobe} />
              </button>
            </div>
          )}
          <div class="tooltip tooltip-bottom" data-tip="Details">
            <button onClick={() => navigate(`/project/${id}`)} className="w-10 h-10 rounded-full bg-primary">
              <FontAwesomeIcon icon={faInfo} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
