import Heading3 from "../components/htmlElements/Heading3";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import members from "../components/cards/Data/membersData";
import '../styles/sections/Team.css';

function Team() {
  const even = [];
  const odd = [];
  members.forEach((member, index) => {
    if (index % 2 === 0) {
      even.push(index);
    } else {
      odd.push(index);
    }
  });
  return (
    <section className="team" id="team">
      <Heading3 title="Nosso time"/>
      <section className="cards">
        {
          even.map((num, index) => (
            <div style={ { display: 'flex', flexDirection: 'row' } }>
              <TeamMemberCard
                key={ members[num].name }
                photo={ members[num].photo }
                photoModal = {members[num].photoModal}
                name={ members[num].name }
                dialogBtnText={ members[num].dialogBtnText }
                dialogText={ members[num].dialogText }
                animation={ members[num].animation }
                linkedinLink= { members[num].linkedinLink }
                portfolioLink = { members[num].portfolioLink }
                gitHubLink = { members[num].gitHubLink }
              />
              <TeamMemberCard
                key={ members[odd[index]].name }
                photo={ members[odd[index]].photo }
                photoModal = {members[odd[index]].photoModal}
                name={ members[odd[index]].name }
                dialogBtnText={ members[odd[index]].dialogBtnText }
                dialogText={ members[odd[index]].dialogText }
                animation={ members[odd[index]].animation }
                linkedinLink= { members[odd[index]].linkedinLink }
                portfolioLink = { members[odd[index]].portfolioLink }
                gitHubLink = { members[odd[index]].gitHubLink }                       />
            </div>
            )
          )
        }
      </section>
    </section>
  );
}

export default Team;
