import programer from '../images/programer-about-me.png'
import '../styles/components/AboutMeBlack.css';

const AboutMeBlack = () => {
  return (
    <section id='about' className='section-about-me'>
      <article className='article-about-me-title'>
        <h1 className='about-title'>Sobre mim</h1>
      </article>
      
      <article className="article-about">
        <div className='lines-about'>
          <div className='line-yellow-about-left-line'></div>
        </div>
        <aside className='aside-programer-about-me'>
          <img src={programer} alt='Programador' className='img-programer-about-me' />
        </aside>
        <div className='div-right-side'>
          <div className='line-yellow-about-right-line'></div>
          <article className='article-about-me-text'>
            <p className='about-des01 gloucester'>
              Olá, meu nome é Isaac e sou um apaixonado por tecnologia em transição de carreira. Anteriormente, trabalhei como técnico administrativo, onde desenvolvi habilidades valiosas em comunicação, organização, proatividade e outras soft skills essenciais. Recentemente, tive a oportunidade de seguir meu sonho de ingressar na área de tecnologia através da Trybe, onde estou aprendendo a programar e a desenvolver projetos incríveis.
              Iniciei uma faculdade na área de TI, mas tive que trancar por motivos pessoais. No entanto, isso não me impediu de continuar estudando e me aprimorando. Atualmente, estou estudando Desenvolvimento Web Full Stack
            </p>
          </article>
          <a href='#contact' className="button-contact-about">
            <div className="art-button-about">
              <p className="text-button-contact-about britannic">
                Contato
              </p>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
}

export default AboutMeBlack;