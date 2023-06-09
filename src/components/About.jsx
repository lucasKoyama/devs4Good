import astronautGif from '../images/astronaut.gif'
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <div className='about-flex'>
        <img className="astronaut-gif" src={ astronautGif } alt="astronaut image" />
        <div className="text">
          <h3 className="title">SOBRE A DEVS<span className="forgood at">4GOOD</span></h3>
          <p>Nos inspiramos no projeto da JP Morgan chamado coders for good. Nesse projeto, desenvolvedores se inscrevem e são selecionados para trabalhar resolvendo problemas reais da sociedade</p>
          <p>Em escala infinitamente menor e sem investimento algum, tentamos fazer algo parecido, porém nós mesmos ajudamos diretamente quem precisa</p>
          <p>Nosso time está ansioso para em cada projeto, usar uma tecnologia e métodos diferentes.</p>
          <p>Vejam nossos focos principais:</p>
          <ul className="about-list">
            <li><i className="fa fa-check"></i> Utilização de métodos ágeis em todas as etapas</li>
            <li><i className="fa fa-check"></i> Layout responsivo para todos os dispositivos</li>
            <li><i className="fa fa-check"></i> Cada projeto, um set de tecnologias</li>
            <li><i className="fa fa-check"></i> Cumprimento sistemático de prazos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;