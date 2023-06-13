import PropTypes from 'prop-types';
import '../../styles/cards/DefaultCard.css';
import '../../styles/cards/TeamMemberCard.css';

function TeamMemberCard({photo, name, dialogBtnText, dialogText, animation}) {
  const openModal = () => {
    const dialog = document.getElementById(name)
    dialog.showModal();
  }
  return (
    <div className={`card animate__animated ${ animation }`}>
      <img className="photo" src={ photo } alt="foto do membro" />
      <h4>{ name }</h4>
      <button className="openDialogBtn" onClick={ () => openModal() }>{dialogBtnText}</button>
      <dialog id={ name }>
        <p>{ dialogText }</p>
      </dialog>
    </div>
  );
}

TeamMemberCard.propTypes = ({
  photo: PropTypes.string,
  name: PropTypes.string,
}).isRequired;

export default TeamMemberCard;
