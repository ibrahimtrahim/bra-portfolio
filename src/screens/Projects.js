import React from 'react';
import ProjectCard from '../component/ProjectCard';
import INFO from '../data/datauser';

const Projects = () => {
  return (
    <section className="flex flex-wrap justify-center items-center lg:scrollbar-w-1.5 lg:scrollbar-h-1.5 lg:scrollbar-track-bg-transparent lg:scrollbar-thumb-bg-slate-500/50 lg:scrollbar-rounded bg-white dark:bg-dark-primary lg:rounded-lg lg:overflow-y-auto lg:w-[35rem] lg:max-h-[35rem] p-4">
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