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
            <div className='mini-container-ico'>
              <img src={ gitHubIcon } alt='git hub icon' className='icons-contact correction' />
            </div>
            <div className='mini-container-ico'>
              <img src={ discordIcon } alt='discord icon' className='icons-contact' />
            </div>
            <div className='mini-container-ico'>
              <img src={ linkedinIcon } alt='linkedin icon' className='icons-contact' /> 
            </div>
            <div className='mini-container-ico'>
              <img src={ instaIcon } alt='instagram icon' className='icons-contact correction' />
            </div>
            <div className='mini-container-ico'>
              <img src={ emailIcon } alt='email icon' className='icons-contact' />
            </div>
          </div>
          <div className='line-yellow-above' />
        </article>
        <aside>
          <div className='contact-img-container'>
            <img src={ programerPng } alt='programer' className='contact-img' />
          </div>
        </aside>
      </main>
    </section>
  )
}

export default ContactBlack;