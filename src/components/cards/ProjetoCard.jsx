import PropTypes from 'prop-types';
import '../../styles/cards/DefaultCard.css';

function ProjetoCard({photo, animation, title}) {
  return (
    <div className={`card animate__animated ${ animation }`}>
      <h3>{title}</h3>
      <br />
      <img className="photo" src={ photo } alt="foto do projeto" />
    </div>
  );
}

ProjetoCard.propTypes = ({
  photo: PropTypes.string,
}).isRequired;

export default ProjetoCard;

