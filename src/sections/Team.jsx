import Heading3 from "../components/htmlElements/Heading3";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import carlosImg from '../images/Carlos2.webp';
import '../styles/sections/Team.css';

function Team() {
  return (
    <section className="team">
      <Heading3 title="Nosso time"/>
      <section className="cards">
        <TeamMemberCard
          photo={carlosImg}
          name="Carlos Tonini"
          dialogBtnText="CEO"
          dialogText="test"
        />
      </section>
    </section>
  );
}

export default Team;