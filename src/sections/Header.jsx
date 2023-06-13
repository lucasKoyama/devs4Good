import Headroom from 'react-headroom';
import '../styles/sections/Header.css';
import logo from '../images/header-astronaut.webp'


function Header() {
  return (
    <Headroom>
      <header className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" href="#"/>
          <h5 className="logo-title">Devs<span>4Good</span></h5>
        </div>
        <nav>
          <ul className="nav-list">
            <li><a className="nav-link" href="#">Home</a></li>
            <li><a className="nav-link" href="#about">A empresa</a></li>
            <li><a className="nav-link" href="#services">Serviços</a></li>
            <li><a className="nav-link" href="#team">Time</a></li>
            <li><a className="nav-link" href="#portfolio">Projetos</a></li>
            <li><a className="nav-link" href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}

export default Header;
