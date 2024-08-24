// import { useEffect } from "react";
// import TypeIt from "typeit";
import '../styles/components/HomeComponentBlack.css';

const HomeComponentBlack = () => {
  /* const animation = () => {
    new TypeIt("#home-my-name", {
      speed: 100,
      waitUntilVisible: true,
      loop: false,
    })
    .type('Isaac Macêdo')
    .go();
  };
  
  useEffect(() => {
    animation();
  }, []); */

  return (
    <section className='section-apresentation'>
      <article className='article-containt-apresentation'>
        <p id='apresentation-basic' className='gloucester'>Olá eu sou</p>
        <p id='home-my-name' className='britannic'>Isaac Macêdo</p>
        <p id='home-title' className='gloucester'>Desenvolvedor <br /> Full-stack</p>
        <button className="button-contact">
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

export default HomeComponentBlack;