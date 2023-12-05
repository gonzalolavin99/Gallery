// Card.js
import React, { useContext } from "react";
import { MyContext} from "../context/MyContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";


const Card = ({ pic }) => {
  const { pics, setPics } = useContext(MyContext);

  const handleLike = (id) => {
    // Actualizar el estado para indicar que se ha dado "like" a la foto con el ID proporcionado
    const updatedPics = pics.map((p) =>
      p.id === id ? { ...p, liked: !p.liked } : p
    );
    setPics(updatedPics);
  };

  return (
    <div className="card">
      {/* Contenido de la tarjeta */}
      {console.log(pic.url)}
      <img src={pic.url} alt={pic.title} />
      <div>{pic.title}</div>
      <button onClick={() => handleLike(pic.id)}>
        <FontAwesomeIcon icon={pic.liked ? faHeart : farHeart} />
      </button>
    </div>
  );
};

export default Card;
