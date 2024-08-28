import HomeComponentBlack from '../components/HomeComponentBlack';
import HeaderBlack from '../components/HeaderBlack';
import AboutMeBlack from '../components/AboutMeBlack';
import SkillsBlack from '../components/SkillsBlack';
import ProjectsBlack from '../components/ProjectsBlack';
import ContactBlack from '../components/ContactBlack';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <main className='home'>
      <div className='line-Yellow-aside'></div>
      <HeaderBlack />
      <HomeComponentBlack />
      <AboutMeBlack />
      <SkillsBlack />
      <ProjectsBlack />
      <ContactBlack />
    </main>
  )
}

export default Home;