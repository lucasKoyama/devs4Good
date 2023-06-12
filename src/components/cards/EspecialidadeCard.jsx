import PropTypes from 'prop-types';
import '../../styles/cards/DefaultCard.css';

function EspecialidadeCard({icon, title, text}) {
  return (
    <div className="card" style={ { width: '315px' } }>
      <i className={icon}></i>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

EspecialidadeCard.propTypes = ({
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}).isRequired;

export default EspecialidadeCard;