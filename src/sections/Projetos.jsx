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
