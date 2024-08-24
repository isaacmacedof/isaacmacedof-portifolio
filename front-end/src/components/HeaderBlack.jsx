import '../styles/components/HeaderBlack.css'

const Header = () => {
  return (
    <header className='header'>
      <section className='mid-header'>
        <nav className='nav-header'>
            <a className='header-link' href="#about">About me</a>
            <a className='header-link' href="#skills">Skills</a>
            <a className='header-link' href="#projects">Projects</a>
            <a className='header-link' href="#contact">Contact</a>
        </nav>
      </section>
      <div className='line-yellow'></div>
    </header>
  )
}

export default Header;