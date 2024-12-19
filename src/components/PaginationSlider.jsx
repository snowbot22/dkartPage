import React, { useState } from "react";
import "../styles/slider-pag.css";

const PaginationSlider = ({ items, sect }) => {

   const getItemsPerPage = (width) => {
    if (width > 1200) return 8; // Desktop
    if (width > 768) return 4;  // Tablet
    return 2;                   // Mobile
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage(window.innerWidth));

  // Función para calcular itemsPerPage basado en el ancho de la ventana
 

  // Listener para window.resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(start, start + itemsPerPage);

  return (
    <div className="pag">
      <div className="grid">
        {paginatedItems.map((item) => (
          <section key={item.id} className="cardProd">
            <a href={sect + item.slug} className="cardProd__link--image">
              <img src={item.data.image} alt={"Imagen de " + item.data.titulo} className="cardProd__image"/>
            </a>
            <div className="cardProd__text">
              <a href={sect + item.slug}>
                <h3 className="cardProd__title">
                  {item.data.titulo}
                </h3>
              </a>
              <p className="cardProd__tag">
                {item.data.tag}
              </p>
              {item.data.precio &&
                <p>
                  {item.data.precio}
                </p>
              }
              <a href={sect + item.slug} className="cardProd__button">
                Ver más
              </a>
            </div>
          </section>
        ))}
      </div>
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="prev"
        >
          ⟨ Anterior
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="next"
        >
          Siguiente ⟩
        </button>
      </div>
    </div>
  );
};

export default PaginationSlider;
