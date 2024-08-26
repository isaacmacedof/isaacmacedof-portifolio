// import { useEffect } from "react";
// import TypeIt from "typeit";
import '../styles/components/HomeComponentBlack.css';

const HomeComponentBlack = () => {
  /* const animation = () => {
    const name = ['Isaac Macêdo']
    new TypeIt("#home-my-name", {
      speed: 200,
      waitUntilVisible: true,
      loop: true,
    })
    .pause(500)
    .type(name[0])
    .pause(2000)
    .delete(name[0].length)
    .go()
  };
  
  useEffect(() => {
    animation();
  }, []); */

  return (
    <section className='section-apresentation'>
      <article className='article-containt-apresentation'>
        <div className="home-text-apresentation">
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
        </div>
        <div className="home-bg-purple"></div>
        <div className='home-bg-quadrados' />
      </article>
    </section>
  );
}

export default HomeComponentBlack;