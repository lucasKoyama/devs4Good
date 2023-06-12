import Header from './sections/Header';
import Carousel from './sections/Carousel';
import About from './sections/About';
import Especialidades from './sections/Especialidades';
import Team from './sections/Team';
import Projetos from './sections/Projetos';
import Contato from './sections/Contato';
import Footer from './sections/Footer';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <About />
        <Especialidades />
        <Team />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App
