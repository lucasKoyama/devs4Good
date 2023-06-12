import Heading3 from "../components/htmlElements/Heading3";
import ProjetoCard from "../components/cards/ProjetoCard";
import projectImg from "../images/em-breve-glitch.gif";
import "../styles/cards/ProjetoCard.css";
import "../styles/sections/Projetos.css";

function Projetos() {
  return (
    <section className="projetos" id="portfolio">
      <Heading3 title="Conheça nossos projetos"/>
      <section className="cards">
        <ProjetoCard className="photo" photo={projectImg} />
        <ProjetoCard className="photo" photo={projectImg} />
        <ProjetoCard className="photo" photo={projectImg} />
      </section>
    </section>
  );
}

export default Projetos;

// <div id="portfolio-area">
//       <!-- <hr> -->
//       <div class="container">
//           <div class="row">
//             <div class="col-md-12">
//               <h3 class="main-title">Conheça nossos projetos</h3>
//             </div>
//             <div class="col-md-4 project-box dev">
//               <img src="img/em-breve-glitch.gif" class="img-fluid" alt="Projeto 1">
//             </div>
//             <div class="col-md-4 project-box dsg">
//               <img src="img/em-breve-glitch.gif" class="img-fluid" alt="Projeto 2">
//             </div>
//             <div class="col-md-4 project-box seo">
//               <img src="img/em-breve-glitch.gif" class="img-fluid" alt="Projeto 3">
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </main>