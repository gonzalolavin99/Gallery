import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./assets/components/NavBar";
import Gallery from "./assets/components/Gallery";
import MyContextProvider from "./assets/context/MyContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/views/Home";
import Favoritos from "./assets/views/Favoritos";
import NotFound from "./assets/views/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
      <MyContextProvider>
      <NavBar/>
      <Gallery></Gallery>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>

      </Routes>

      </MyContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
