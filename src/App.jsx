import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/NavBar"
import Gallery from "./components/Gallery";
import MyContextProvider from "./context/MyContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
      <MyContextProvider>
      <NavBar/>
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
