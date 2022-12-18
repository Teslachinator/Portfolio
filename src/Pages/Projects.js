import React from "react";

import Project from "../Components/project/Project";

import { projects } from "../Components/helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Проекты</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                title={project.title}
                img={project.img}
                key={index}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
