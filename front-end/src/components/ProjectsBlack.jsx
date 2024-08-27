import { projectsData } from '../services/ProjectsData.js'
import bgProjetos from '../images/black-bg-projetos.png';
import '../styles/components/ProjectsBlack.css';

const ProjectsBlack = () => {
  const projects = projectsData;
  
  return (
    <section id='projects' className="section-projects-black">
      <div className='bg-projects-black'>
        <img src={bgProjetos} alt='bg-projects' className='img-bg-projects' />
      </div>
      <main className='article-skills'>
        <div className='skills-title'>
          <div className='projects-bg-line-left' />
            <p className='about-title'>Projects</p>
          <div className='projects-bg-line-right' />
        </div>
        <article className='project-list'>
          {
            projects.map((project) => (
              <div key={project.id} className='project-card'>
                <div className='projects-img-container'>
                  <img className='projects-img' src={project.imgSrc} alt={project.title} />
                </div>
                <div className='project-card-title'>
                  <p className='project-title'>{project.title}</p>
                </div>
              </div>
            ))
          }
        </article>
      </main>
    </section>
  )
}

export default ProjectsBlack;