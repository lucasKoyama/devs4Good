import PropTypes from 'prop-types';
import '../../styles/cards/DefaultCard.css';
import '../../styles/cards/TeamMemberCard.css';
import githubIco from '../../images/github.ico';
import linkedinIco from '../../images/linkedin.ico';
import portfolioIco from '../../images/portfolio.ico';

function TeamMemberCard({photo,photoModal, name, dialogBtnText, dialogText, animation, gitHubLink, linkedinLink, portfolioLink }) {
  const openModal = () => {
    const dialog = document.getElementById(name)
    dialog.showModal();
  }
  return (
    <div className={`card animate__animated ${ animation }`}>
      <h4 className='name'>{ name }</h4>
      <button 
      onClick={ () => openModal() }
       
      className='button-img'><img 
     
      className="photo" src={ photo } alt="foto do membro" />
      </button>
      <button className="openDialogBtn" >{dialogBtnText}</button>
      <dialog id={ name }>
        <div className="dialog-container">
          <button
          onClick={ () => document.getElementById(name).close() }
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <section>
            <h2>{name}</h2>
            <p>{ dialogText }</p>
            <img className='modalImg' src={photoModal} alt="" />
            <p>Você pode me encontrar através do meu portfólio pessoal, linkedin ou github!</p>
            <a href={portfolioLink} target="_blank"><img className='modalIco'src={portfolioIco} alt="" /></a>        
            <a href={linkedinLink} target="_blank"><img className='modalIco'src={linkedinIco} alt="" /> </a>
            <a href={gitHubLink} target="_blank"><img className='modalIco' src={githubIco} alt="" /></a>
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
