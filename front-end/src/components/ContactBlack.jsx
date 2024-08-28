import bgContact from '../images/black-bg-contact-mini.png';
import instaIcon from '../images/black-contact-instagram.png';
import gitHubIcon from '../images/black-contact-gitHub.png';
import discordIcon from '../images/black-contact-discord.png';
import linkedinIcon from '../images/black-contact-linkedin.png'
import emailIcon from '../images/black-contact-email.png';
import programerPng from '../images/black-pictureMe-contact.png';
import '../styles/components/ContactBlack.css';

const ContactBlack = () => {
  return (
    <section id='contact' className='section-contact'>
      <main className='main-contact'>
        <article className='article-contact'>
          <div>
            <div className='contact-title'>
              <p className='contact-title-text gloucester'>Contato</p>
            </div>
            <div className='img-bg-contact-container'>
              <img src={ bgContact } alt='bg-contact' className='img-bg-contact' />
            </div>
          </div>
          <div className='icons-contact-container'>
            <a target='_blank' href='https://github.com/isaacmacedof' className='mini-container-ico'>
              <img src={ gitHubIcon } alt='git hub icon' className='icons-contact correction' />
            </a>
            <div className='mini-container-ico'>
              <img src={ discordIcon } alt='discord icon' className='icons-contact' />
            </div>
            <a href='https://www.linkedin.com/in/isaac-macedo-dev/' target='_blank' className='mini-container-ico'>
              <img src={ linkedinIcon } alt='linkedin icon' className='icons-contact' /> 
            </a>
            <a target='_blank' href='https://www.instagram.com/isaac.macedotr/' className='mini-container-ico'>
              <img src={ instaIcon } alt='instagram icon' className='icons-contact correction' />
            </a>
            <a target='_blank' href='mailto:isaacmacedof@gmail.com' className='mini-container-ico'>
              <img src={ emailIcon } alt='email icon' className='icons-contact' />
            </a>
          </div>
        </article>
        <aside>
          <div className='contact-img-container'>
            <img src={ programerPng } alt='programer' className='contact-img' />
          </div>
        </aside>
      </main>
      <div className='line-yellow-above' />
    </section>
  )
}

export default ContactBlack;