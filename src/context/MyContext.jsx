import React, { createContext, useContext, useEffect, useState } from "react";

export const MyContext = createContext({});

const MyContextProvider = ({ children }) => {
  const [pics, setPics] = useState([]);
  const [favoritePics, setFavoritePics] = useState([]);

  useEffect(() => {
    const getPics = async () => {
      try {
        const data = await fetch("/photos.json");
        const res = await data.json();

        const favorites = res.photos.filter((pic) => pic.liked);

        setPics(res.photos);
        setFavoritePics(favorites);
      } catch (error) {
        console.error("Error al cargar imágenes:", error);
      }
    };

    getPics();
  }, []);

  const handleLike = (id) => {
    const updatedPics = pics.map((p) =>
      p.id === id ? { ...p, liked: !p.liked } : p
    );
    setPics(updatedPics);

    const updatedFavorites = updatedPics.filter((pic) => pic.liked);
    setFavoritePics(updatedFavorites);
  };

  return (
    <MyContext.Provider value={{ pics, setPics, favoritePics, setFavoritePics, handleLike }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
