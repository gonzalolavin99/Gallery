import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Cards from "../components/Cards";

const Favoritos = () => {
  const { favoritePics } = useContext(MyContext);

  return (
    <div className="favoritos gallery grid-columns-5 p-3 ">
      <h2>Fotos Favoritas</h2>
      {favoritePics.map((pic) => (
        <Cards key={pic.id} pic={pic} />
      ))}
    </div>
  );
};

export default Favoritos;
