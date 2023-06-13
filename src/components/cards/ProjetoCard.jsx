import PropTypes from 'prop-types';
import '../../styles/cards/DefaultCard.css';

function ProjetoCard({photo, animation}) {
  return (
    <div className={`card animate__animated ${ animation }`}>
      <img className="photo" src={ photo } alt="foto do projeto" />
    </div>
  );
}

ProjetoCard.propTypes = ({
  photo: PropTypes.string,
}).isRequired;

export default ProjetoCard;
