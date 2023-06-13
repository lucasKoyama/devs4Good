import PropTypes from 'prop-types';
import '../../styles/cards/DefaultCard.css';
import '../../styles/cards/EspecialidadeCard.css'

function EspecialidadeCard({icon, title, text, animation}) {
  return (
    <div className={`card animate__animated ${ animation }`}>
      <i className={`icon ${ icon }`}></i>
      <h4 className='title'>{ title }</h4>
      <p className='text'>{ text }</p>
    </div>
  );
}

EspecialidadeCard.propTypes = ({
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}).isRequired;

export default EspecialidadeCard;
