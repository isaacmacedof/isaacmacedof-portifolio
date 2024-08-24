import HomeComponentBlack from '../components/HomeComponentBlack';
import HeaderBlack from '../components/HeaderBlack';
import AboutMeBlack from '../components/AboutMeBlack';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <main className='home'>
      <HeaderBlack />
      <div className="line-Yellow-aside"></div>
      <HomeComponentBlack />
      <AboutMeBlack />
    </main>
  )
}

export default Home;