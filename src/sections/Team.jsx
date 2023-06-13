import Heading3 from "../components/htmlElements/Heading3";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import members from "../components/cards/membersData";
import '../styles/sections/Team.css';

function Team() {
  return (
    <section className="team" id="team">
      <Heading3 title="Nosso time"/>
      <section className="cards">
        {members.map((card, index) => {
          const { photo, name, dialogBtnText, dialogText } = card;
          return (
            <TeamMemberCard
              key={ index }
              photo={ photo }
              name={ name }
              dialogBtnText={ dialogBtnText }
              dialogText={ dialogText }
            />
          )
        })}
      </section>
    </section>
  );
}

export default Team;
