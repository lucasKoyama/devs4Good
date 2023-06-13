import PropTypes from 'prop-types';
import '../../styles/cards/DefaultCard.css';

function ProjetoCard({photo}) {
  return (
    <div className="card">
      <img className="photo" src={photo} alt="foto do projeto" />
    </div>
  );
}

ProjetoCard.propTypes = ({
  photo: PropTypes.string,
}).isRequired;

export default ProjetoCard;
