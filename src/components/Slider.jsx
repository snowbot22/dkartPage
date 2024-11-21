import { useState } from "react";
import "../styles/slider.css"

export default function CarruselGeneral({ imgs }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imgs.length);
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + imgs.length) % imgs.length);
  }

  

  return (
    <section className="carrusel">
      <img src="/icons/a-white.png" alt="prev-icon"  className="carrusel__next carrusel__button" onClick={prevSlide}/>
      <div className="slides">
        <img src={imgs[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="slide__image"/>
      </div>
      <img src="/icons/a-white.png" alt="prev-icon"  className="carrusel__prev carrusel__button" onClick={nextSlide}/>
    </section>
  )
}