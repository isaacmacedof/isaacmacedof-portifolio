import '../styles/components/AboutMeBlack.css';

const AboutMeBlack = () => {
  return (
    <section id='about' className='section-about-me'>
      <article className='article-about-me-title'>
        <h1 className='about-title'>Sobre mim</h1>
      </article>
      <div className='lines-about'>
        <div className='line-yellow-about-left-line'></div>
        <div className='line-yellow-about'></div>
      </div>
      <article className='article-about-me-text'>
        <p className='about-des01 gloucester'>
        Olá, meu nome é Isaac e sou um apaixonado por tecnologia em transição de carreira. Anteriormente, trabalhei como técnico administrativo, onde desenvolvi habilidades valiosas em comunicação, organização, proatividade e outras soft skills essenciais. Recentemente, tive a oportunidade de seguir meu sonho de ingressar na área de tecnologia através da Trybe.<br /> <br />

        Durante meu período de aprendizado, adquiri conhecimentos sólidos em HTML, JavaScript, CSS, Git, testes unitários com RTL, API Rest e React JS. Estou sempre aberto a aprender novas tecnologias e métodos para me aprimorar continuamente.<br /><br />

        Estou em busca de oportunidades onde possa não apenas aplicar e expandir meus conhecimentos, mas também contribuir de forma significativa para o crescimento da empresa. Estou ansioso para colaborar com uma equipe dinâmica e enfrentar novos desafios no campo da tecnologia.<br /><br />

        Se você está procurando um profissional dedicado, com uma base sólida em desenvolvimento web e um forte desejo de crescimento, estou à disposição para conversarmos!<br /><br />
        </p>
        <button className="button-contact-about">
          <div className="art-button">
            <p className="text-button-contact britannic">
              Contato
            </p>
          </div>
        </button>
      </article>
    </section>
  );
}

export default AboutMeBlack;