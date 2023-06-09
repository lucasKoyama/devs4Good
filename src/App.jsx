import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Especialidades from './components/Especialidades';
import Team from './components/Team';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
