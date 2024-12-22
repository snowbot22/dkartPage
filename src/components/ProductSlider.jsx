import React, { useState, useEffect } from "react";
import "../styles/slider-p.css"; // Importamos el archivo CSS externo

const ResponsiveProductSlider = ({ products, cat }) => {
  const [visibleProducts, setVisibleProducts] = useState(4); // Productos visibles por defecto
  const [startIndex, setStartIndex] = useState(0); // Índice inicial de productos visibles

  // Ajustar el número de productos visibles según el ancho de la pantalla
  useEffect(() => {
    const updateVisibleProducts = () => {
      const screenWidth = window.innerWidth;
      let adjustedVisibleProducts = visibleProducts; // Asignar el valor actual de visibleProducts por defecto

      if (screenWidth < 800) {
        adjustedVisibleProducts = 2;
      } else if (screenWidth < 1200) {
        adjustedVisibleProducts = 3;
      } else {
        adjustedVisibleProducts = 5;
      }

      // Si el número de productos es menor que los visibles, ajustamos visibleProducts
      if (products.length < adjustedVisibleProducts) {
        adjustedVisibleProducts = products.length;
      }

      setVisibleProducts(adjustedVisibleProducts);
    };

    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);
    return () => window.removeEventListener("resize", updateVisibleProducts);
  }, [products.length, visibleProducts]); // Re-evaluar si cambia la longitud de productos

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + visibleProducts) % products.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? products.length - visibleProducts : prevIndex - visibleProducts
    );
  };

  // Obtener los productos visibles basados en el índice inicial
  const displayedProducts = products.slice(startIndex, startIndex + visibleProducts);

  // Permitir que el slider "cicle" los productos al inicio y fin
  if (displayedProducts.length < visibleProducts) {
    const remainingProducts = products.slice(0, visibleProducts - displayedProducts.length);
    displayedProducts.push(...remainingProducts);
  }

  return (
    <div className="slider-container">
      {products.length > visibleProducts ? (
        <button onClick={handlePrevious} className="slider-button">
          <img src="/icons/a-black.png" alt="Previous Button" className="slider-arrow prev" />
        </button>
      ) : null}

      <div className="slider">
        {displayedProducts.map((product, index) => (
          <div key={index} className="slider-card">
            <img
              src={product.data.image}
              alt={product.data.titulo}
              className="slider-image"
            />
            <div className="slider__text">
              <h3 className="slider__title">{product.data.titulo}</h3>
              <p className="slider__tag">{product.data.tag}</p>
              {product.data.price && (
                <p className="slider__price">${product.data.price}</p>
              )}
              <a
                href={cat + product.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="slider-link"
              >
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>

      {products.length > visibleProducts ? (
        <button onClick={handleNext} className="slider-button">
          <img src="/icons/a-black.png" alt="Next Button" className="slider-arrow" />
        </button>
      ) : null}
    </div>
  );
};

export default ResponsiveProductSlider;