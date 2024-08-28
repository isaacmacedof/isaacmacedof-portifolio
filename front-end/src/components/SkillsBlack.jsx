import { useState } from 'react';
import { skills } from '../services/Skills';
import bgSkills from '../images/black-bg-skills.png';
import '../styles/components/SkillsBlack.css';

const SkillsBlack = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseOver = (event) => {
    const element = event.target;
    const id = Number(element.id);
    
    const skill = skills.find((sk) => sk.id === id);
    console.log(skill);

    if (element.tagName === 'IMG') {
      setHoveredElement({
        id: skill.id,
        alt: skill.name,
        description: skill.description,
      });
    }
    console.log(hoveredElement);
  };

  const exibion = hoveredElement !== null ? 'exibition' : 'outExibition';
  return (
    <section id='skills' className='section-skills'>
      <div className='bg-skills'>
        <img src={bgSkills} alt='bg-skills' className='img-bg-skills' />
      </div>
      <main className='article-skills'>
        <div className='skills-title-container'>
          <div className='skills-bg-line-left' />
            <p className='skills-title'>Skills</p>
          <div className='skills-bg-line-right' />
        </div>
        <article className='skills-list'>
          <div className='container-description-skill'>
            {
              hoveredElement ? (
                <div className='description-skill-countainer'>
                  <p className='description-skill-text-title gloucester'>
                    {hoveredElement.alt}
                  </p>
                   <p className='description-skill-text gloucester'>
                      {hoveredElement.description}
                   </p>
                </div>
              ) : (<p className='description-skill-text gloucester'>
                *Passe o cursor do mouse para ler*
              </p>)
            }
            <a href='#contact' className={ `button-contact-skill ${ exibion }` }>
              <div className="art-button">
                <p className="text-button-contact britannic">
                  Contato
                </p>
              </div>
            </a>
          </div>
          <div className='container-images-skills' onMouseOver={handleMouseOver}>
            {skills.map((skill) => (
              <div key={skill.id} className='skill'>
                <div className='skill-image'>
                  <img id={skill.id} src={skill.image} alt={skill.name} className='img-skill' />
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
    </section>
  )
}

export default SkillsBlack;