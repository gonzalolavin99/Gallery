// Gallery.js
import React, { useContext } from "react";
import { MyContext} from "../context/MyContext"
import Cards from "./Cards"

const Gallery = () => {
  const { pics } = useContext(MyContext);

  return (
    <div className="gallery">
      {pics.map((pic) => (
        <Cards key={pic.id} pic={pic} />
      ))}
    </div>
  );
};

export default Gallery;
