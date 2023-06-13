import Heading3 from "../components/htmlElements/Heading3";
import contactAstronaut from '../images/contact-astronaut.webp'
import '../styles/sections/Contato.css';

function Contato() {
  return (
    <section className="contato" id="contact">
      <Heading3 title="Entre em contato conosco" />
      <section className="form-section">
        <img src={ contactAstronaut } alt="foto dos astronautas conversando"/>
        <form>
          <input type="text" id="email" placeholder="E-mail"/>
          <input type="text" id="subject" placeholder="Assunto"/>
          <textarea placeholder="Sua mensagem..." rows="4"/>
          <button className="submit-btn">Enviar</button>
        </form>
      </section>
    </section>
  );
}

export default Contato;
