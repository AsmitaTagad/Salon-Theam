import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home, Services, Offers, AboutUs, Appointment } from "./pages/Main";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/offers/:id" element={<Offers />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
      </Routes>
    </>
  );
}

export default App;
