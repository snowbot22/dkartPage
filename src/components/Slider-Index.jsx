import { useState } from "react";
import "../styles/slider-i.css"

export default function Carrusel({ imgs }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imgs.length);
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + imgs.length) % imgs.length);
  }

  

  return (
    <section className="carrusel-i">
      <img src="/icons/a-white.png" alt="prev-icon"  className="carrusel__next-i carrusel__button-i" onClick={prevSlide}/>
      <div className="slides-i">
        <img src={imgs[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="slide__image-i"/>
      </div>
      <img src="/icons/a-white.png" alt="prev-icon"  className="carrusel__prev-i carrusel__button-i" onClick={nextSlide}/>
    </section>
  )
}