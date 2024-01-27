import React from 'react';
import ProjectCard from '../component/ProjectCard';
import INFO from '../data/datauser';

const Projects = () => {
  return (
    <section className="flex flex-wrap items-center scrollbar-w-1.5 scrollbar-h-1.5 scrollbar-track-bg-transparent scrollbar-thumb-bg-slate-500/50 scrollbar-rounded bg-dark-primary rounded-lg overflow-y-auto w-[35rem] max-h-[35rem] p-4">
      {INFO.projects.map((project, index) => (
        <div key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
            img={project.img}
          />
        </div>
      ))}
    </section>
  );
};

export default Projects;