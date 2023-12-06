// Cards.jsx
import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ pic }) => {
  const { handleLike } = useContext(MyContext);

  return (
    <div className='photo'  key={pic.id} style={{backgroundImage: `url(${pic.src.tiny})`}}  >

      <div className="card-content">
        <div>{pic.title}</div>
        <button onClick={() => handleLike(pic.id)}>
          <FontAwesomeIcon icon={pic.liked ? faHeart : farHeart} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
