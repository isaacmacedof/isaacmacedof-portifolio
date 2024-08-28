import { useState } from 'react';
import { projectsData } from '../services/ProjectsData.js'
import bgProjetos from '../images/black-bg-projetos.png';
import ProjectModal from '../services/ProjectModal.jsx';
import '../styles/components/ProjectsBlack.css';

const ProjectsBlack = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id='projects' className="section-projects-black">
      <div className='bg-projects-black'>
        <img src={bgProjetos} alt='bg-projects' className='img-bg-projects' />
      </div>
      <main className='article-skills'>
        <div className='project-title-container'>
          <div className='projects-bg-line-left' />
          <p className='project-title-all'>Projects</p>
          <div className='projects-bg-line-right' />
        </div>
        <article className='project-list'>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className='project-card'
              onClick={() => openModal(project)} // Open modal on click
            >
              <div className='projects-img-container'>
                <img className='projects-img' src={project.imgSrc} alt={project.title} />
              </div>
              <div className='project-card-title'>
                <p className='project-title'>{project.title}</p>
              </div>
            </div>
          ))}
        </article>
      </main>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  )
}

export default ProjectsBlack;