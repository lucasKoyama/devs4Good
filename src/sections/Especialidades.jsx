import Heading3 from "../components/htmlElements/Heading3";
import EspecialidadeCard from "../components/cards/EspecialidadeCard";
import '../styles/sections/Especialidades.css';

function Especialidades() {
  return (
    <section className="especialidades">
      <Heading3 title="Nossas especialidades"/>
      <section className="cards">
        <EspecialidadeCard
          icon="fa-solid fa-mobile-screen-button"
          title="Responsividade"
          text="Todos os websites serão responsivos para celular, tablet e computador."
        />
      </section>
    </section>
  );
}

export default Especialidades;


// <div id="services-area">
//         <div class="container">
//           <div class="row">
//             <div class="col-12">
//                 <h3 class="main-title">Nossas especialidades</h3>
//             </div>
//             <div class="col-md-4 service-box">
//               <i class="fas fa-mobile-alt"></i>
//               <!-- <img src="img/smartphone_phone_phone_android_xperia_mobile_2513.ico" alt=""> -->
//               <h4>Responsividade</h4>
//               <p>Todos os websites serão responsivos para celular, tablet e computador.</p>
//             </div>
//             <div class="col-md-4 service-box">
//               <i class="fas fa-shopping-cart"></i>
//               <!-- <img src="img/diagram-61_24456.ico" alt=""> -->
//               <h4>E-commerces</h4>
//               <p>Temos soluções para pequenos e-commerces</p>
//             </div>
//             <div class="col-md-4 service-box">
//               <i class="fas fa-paint-brush"></i>
//               <!-- <img src="img/sculpture_statue_texture_futuristic_art_geometry_organic_abstract_shape_explode_shae_icon_226543.ico" alt=""> -->
//               <h4>Design Criativo</h4>
//               <p>Nossos designers farão sites dinâmicos, responsivos e interativos.</p>
//             </div>
//             <div class="col-md-4 service-box">
//               <i class="fab fa-google fa-beat"></i>
//               <!-- <img src="img/apps_web_development_chrome_logo_website_browser_google_icon_182706.ico" alt=""> -->
//               <h4>Planejamos com SEO</h4>
//               <p>Montamos um site semântico que irá deixa-lo melhor posicionado no Google e venderá mais.</p>
//             </div>
//             <div class="col-md-4 service-box">
//               <i class="fas fa-hands-helping"></i>
//               <!-- <img src="img/iconfinder-supportheadset-4417115_116638.ico" alt=""> -->
//               <h4>Suporte</h4>
//               <p>Mesmo após entregue o site, damos suporte para pequenas mudanças e atualizaçṍes, novamente, sem custo.</p>
//             </div>
//             <div class="col-md-4 service-box">
//               <i class="fas fa-server"></i>
//               <!-- <img src="img/HomeServer_icon-icons.com_55232.ico" alt=""> -->
//               <h4>Experiência em Back-end</h4>
//               <p>Também desenvolvemos soluções de back-end para ONG's e projetos sociais.</p>
//             </div>
//           </div>
//         </div>
//       </div>