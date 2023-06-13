import PropTypes from 'prop-types';
import '../../styles/htmlElements/Heading3.css';

function Heading3({title}) {
  return (
    <h3 className='heading3'>
      {title}
    </h3>
  );
}

Heading3.propTypes = ({
  title: PropTypes.string,
}).isRequired;

export default Heading3;
