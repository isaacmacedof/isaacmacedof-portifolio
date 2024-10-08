import { useEffect } from "react";
import TypeIt from "typeit";
import '../styles/components/HomeComponentBlack.css';

const HomeComponentBlack = () => {
  const animation = () => {
    const name = 'Isaac Macêdo'
    new TypeIt("#home-my-name", {
      speed: 200,
      waitUntilVisible: true,
      loop: true,
    })
    .type(name)
    .pause(4000)
    .delete(name)
    .go()
  };
  
  useEffect(() => {
    animation();
  }, [])

  return (
    <section className='section-apresentation'>
      <div className='home-bg-yellow-left' />
      <article className='article-containt-apresentation'>
        <div className="home-text-apresentation">
          <p id='apresentation-basic' className='gloucester'>Olá eu sou</p>
          <p id='home-my-name' className='britannic'></p>
          <p id='home-title' className='gloucester'>Desenvolvedor <br /> Full-stack</p>
          <a className="button-contact" href="#contact">
            <div className="art-button">
              <p className="text-button-contact britannic">
                Contato
              </p>
            </div>
          </a>
        </div>
        <div className="home-bg-purple"></div>
        <div className='home-bg-quadrados' />
      </article>
    </section>
  );
}

export default HomeComponentBlack;