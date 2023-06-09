import React from 'react'
import banner2 from '../images/banner2.webp'
import '../styles/Carousel.css';

function Carousel() {
  return (
    <section className="carousel">
      <img src={ banner2 } />
    </section>
  );
}

export default Carousel;