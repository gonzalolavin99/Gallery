// Favoritos.js
import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Favoritos = () => {
  const { pics } = useContext(MyContext);
  const favoritos = pics.filter((pic) => pic.liked); // Solo las fotos con liked igual a true

  return (
    <div className="favoritos">
      <h2>Fotos Favoritas</h2>
      {favoritos.map((pic) => (
        <div key={pic.id} className="card">
          {/* Contenido de la tarjeta */}
          <img src={pic.url} alt={pic.title} />
          <div>{pic.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
