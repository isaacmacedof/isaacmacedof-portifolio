import { useState } from 'react';
import { skills } from '../services/Skills';
import bgSkills from '../images/black-bg-skills.png';
import '../styles/components/SkillsBlack.css';

const SkillsBlack = () => {
  const [hoveredElement, setHoveredElement] = useState({ id: skills[0].id, alt: skills[0].name, description: skills[0].description });

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
  return (
    <section id='skills' className='section-skills'>
      <div className='bg-skills'>
        <img src={bgSkills} alt='bg-skills' className='img-bg-skills' />
      </div>
      <main className='article-skills'>
        <div className='skills-title'>
          <div className='skills-bg-line-left' />
            <p className='about-title'>Skills</p>
          <div className='skills-bg-line-right' />
        </div>
        <article className='skills-list'>
          <div className='container-description-skill'>
            <p className='description-skill-text gloucester'>
              *Passe o cursor do mouse para ler*
            </p>
            <div className='description-skill'>
            {
              hoveredElement.id && (
                <div className='description-skill-countainer'>
                  <p className='description-skill-text gloucester'>
                    {hoveredElement.alt} <br /> <br />
                  </p>
                   <p className='description-skill-text gloucester'>
                      {hoveredElement.description}
                   </p>
                </div>
              )
            }
            </div>
            <button className="button-contact-skill">
              <div className="art-button">
                <p className="text-button-contact britannic">
                  Contato
                </p>
              </div>
            </button>
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