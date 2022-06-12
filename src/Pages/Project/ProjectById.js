import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectById = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, [id]);

  useEffect(() => {
    setProject(projects.find(p => p.id === id));
  }, [projects, id])
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <img src={project.img} alt={project.name} />
      </div>
      <div>
        <h3 className="text-4xl">{project.name}</h3>
        <p>{project.name}</p>
      </div>
    </div>
  );
};

export default ProjectById;
