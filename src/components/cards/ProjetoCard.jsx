import PropTypes from 'prop-types';
import '../../styles/cards/DefaultCard.css';

function ProjetoCard({photo, animation, title, link}) {
  return (
    <div className={`card animate__animated ${ animation }`}>
      <h3>{title}</h3>
      <br />
      <a href={link} target="_blank"><img className="photo" src={ photo } alt="foto do projeto" /></a>
    </div>
  );
}

ProjetoCard.propTypes = ({
  photo: PropTypes.string,
}).isRequired;

export default ProjetoCard;

