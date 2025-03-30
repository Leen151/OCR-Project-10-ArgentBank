import "./style.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hearder } from "./components/header/Hearder.jsx";
import { Footer } from "./components/footer/Footer.jsx";

import { HomePage } from "./pages/home/HomePage.jsx"
import { LoginPage } from "./pages/login/LoginPage.jsx";
import { UserPage } from "./pages/user/UserPage.jsx";


function App() {
  return (
    <>
        <Hearder/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
