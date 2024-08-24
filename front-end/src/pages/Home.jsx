import HomeComponentBlack from '../components/HomeComponentBlack';
import HeaderBlack from '../components/HeaderBlack';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <main className='home'>
      <HeaderBlack />
      <div className="line-Yellow-aside"></div>
      <HomeComponentBlack />
    </main>
  )
}

export default Home;