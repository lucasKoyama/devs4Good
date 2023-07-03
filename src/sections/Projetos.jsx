import Heading3 from "../components/htmlElements/Heading3";
import ProjetoCard from "../components/cards/ProjetoCard";
import projectImg from "../images/em-breve-glitch.gif";
import python4good from '../images/pythonProject.png'
import "../styles/cards/ProjetoCard.css";
import "../styles/sections/Projetos.css";

function Projetos() {
  return (
    <section className="projetos" id="portfolio">
      <Heading3 title="Conheça nossos projetos"/>
      <section className="cards">
        
        <a href="https://github.com/Devs4GoodOficial/python4Good" target="blank_"><ProjetoCard className="photo" photo={python4good} animation={"animate__fadeInRight"} title='Python Exercises'/></a>

        <ProjetoCard className="photo" photo={projectImg} animation={"animate__fadeInRight"}/>

        <ProjetoCard className="photo" photo={projectImg} animation={"animate__fadeInRight"}/>
      </section>
    </section>
  );
}

export default Projetos;
