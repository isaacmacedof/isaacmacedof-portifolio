import HomeComponentBlack from '../components/HomeComponentBlack';
import HeaderBlack from '../components/HeaderBlack';
import AboutMeBlack from '../components/AboutMeBlack';
import SkillsBlack from '../components/SkillsBlack';
import ProjectsBlack from '../components/ProjectsBlack';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <main className='home'>
      <HeaderBlack />
      <div className="line-Yellow-aside"></div>
      <HomeComponentBlack />
      <div className="line-Yellow-aside2"></div>
      <AboutMeBlack />
      <div className="line-Yellow-aside3"></div>
      <SkillsBlack />
      <div className="line-Yellow-aside4"></div>
      <ProjectsBlack />
    </main>
  )
}

export default Home;