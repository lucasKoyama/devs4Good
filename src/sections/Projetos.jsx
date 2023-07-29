import Heading3 from "../components/htmlElements/Heading3";
import ProjetoCard from "../components/cards/ProjetoCard";
import projectImg from "../images/em-breve-glitch.gif";
import python4good from '../images/pythonProject.png'
import apadrinhe from '../images/apadrinhe.png'
import "../styles/cards/ProjetoCard.css";
import "../styles/sections/Projetos.css";
import dog from '../images/Dog.png'

function Projetos() {
  return (
    <section className="projetos" id="portfolio">
      <Heading3 title="Conheça nossos projetos"/>
      <section className="cards">
        
        <ProjetoCard className="photo" photo={python4good} animation={"animate__fadeInRight"} title='Python Exercises' link='https://github.com/Devs4GoodOficial/python4Good'/>

        <ProjetoCard className="photo" photo={apadrinhe} animation={"animate__fadeInRight"} title='Apadrinhe um Sorriso' link='https://apadrinhe.vercel.app/'/>

        <ProjetoCard className="photo" photo={dog} animation={"animate__fadeInRight"} title='ONG Dogs' link='https://templatedogs-vite.vercel.app/'/>

        <ProjetoCard className="photo" photo={projectImg} animation={"animate__fadeInRight"}/>
        <ProjetoCard className="photo" photo={projectImg} animation={"animate__fadeInRight"}/>
        <ProjetoCard className="photo" photo={projectImg} animation={"animate__fadeInRight"}/>
      </section>
    </section>
  );
}

export default Projetos;
