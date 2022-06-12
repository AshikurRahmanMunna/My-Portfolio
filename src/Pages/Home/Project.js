import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div class="bg-secondary">
        <h2 class="text-4xl">{name}</h2>
      </div>
    </div>
  );
};

export default Project;
