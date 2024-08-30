import { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {

  useEffect(() => {
    // Desativa a rolagem ao abrir o modal
    document.body.style.overflow = 'hidden';

    // Restaura a rolagem ao fechar o modal
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className='modal-container-title'>
          <h2 className='modal-project-title'>{project.title}</h2>
        </div>
        <div className='modal-container-image'>
          <img src={project.imgSrc} alt={project.title} className="modal-image" />
          <p className='modal-project-tags'>Tecnologias utilizadas: {project.tagsExibition.join(" - ")}</p>
        </div>
        <div className='modal-project-description-container'>
          <div className='modal-project-description-container-title'>
            <h3 className='modal-project-description-title'>Descrição</h3>
          </div>
          <p className='modal-project-description-text'>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    tagsExibition: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;