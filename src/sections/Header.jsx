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


// <header>
//     <div class="container" id="nav-container">
//       <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
//         <a class="navbar-brand" href="#about-area">
//           <img id="logo" src="img/astronauta2.jpg" alt="hDC Agency"><h5 class="he">Devs<span class=" forgood at">4Good</span></h5>
//         </a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse justify-content-end" id="navbar-links">
//           <div class="navbar-nav">
//             <a class="nav-item nav-link" id="home-menu" href="#">Home</span></a>
//             <a class="nav-item nav-link" id="about-menu" href="#about-area">A empresa</a>
//             <a class="nav-item nav-link" id="services-menu" href="#services-area">Serviços</a>
//             <a class="nav-item nav-link" id="team-menu" href="#team-area">Time</a>
//             <a class="nav-item nav-link" id="portfolio-menu" href="#portfolio-area">Projetos</a>
//             <a class="nav-item nav-link" id="contact-menu" href="#contact-area">Contato</a>
//           </div>
//         </div>
//       </nav>
//     </div>
//   </header>