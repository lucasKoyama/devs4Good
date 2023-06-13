import Heading3 from "../components/htmlElements/Heading3";
import EspecialidadeCard from "../components/cards/EspecialidadeCard";
import especialidades from "../components/cards/especialidadesData";
import '../styles/sections/Especialidades.css';

function Especialidades() {
  return (
    <section className="especialidades" id="services">
      <Heading3 title="Nossas especialidades"/>
      <section className="cards">
        {especialidades.map((card, index) => {
          const {icon, title, text } = card;
          return (
            <EspecialidadeCard
              key={index}
              icon={icon}
              title={title}
              text={text}
            />
          );
        })}
      </section>
    </section>
  );
}

export default Especialidades;
