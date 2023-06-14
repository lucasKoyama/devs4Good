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
        <div className="dialog-container">
          <button onClick={ () => document.getElementById(name).close() }>
            <i className="fa-solid fa-xmark" />
          </button>
          <section>
            <h2>{name}</h2>
            <p>{ dialogText }</p>
          </section>
        </div>
      </dialog>
    </div>
  );
}

TeamMemberCard.propTypes = ({
  photo: PropTypes.string,
  name: PropTypes.string,
}).isRequired;

export default TeamMemberCard;
