import "./style.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hearder } from "./components/header/Hearder.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {Home} from "./pages/home/HomePage.jsx"


function App() {
  return (
    <>
        <Hearder/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
