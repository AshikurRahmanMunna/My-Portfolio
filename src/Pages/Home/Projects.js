import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold font-raleway text-white text-center mb-4 border-b-secondary">Top <span className="text-primary">Projects</span></h2>
      <div className="grid container mx-auto text-white grid-cols-3 gap-x-4">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
