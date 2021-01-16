import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Admin from "../pages/Admin";
import Escala from "../pages/Escala";
import Pronto from "../pages/Pronto";
import RelatorioPronto from "../pages/RelatorioPronto";
import EscalaHome from "../pages/EscalaHome";

export default function Rotas() {
  return (
    <Router>
      <NavBar />
      <div className="container" style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/:id" element={<Admin />} />
          <Route path="/Pronto" element={<Pronto />} />
          <Route element={<p>Pagina não encontrada</p>} />

          <Route path="Escala" element={<Escala />}>
            <Route path="/" element={<EscalaHome />} />
            <Route path="RelatorioPronto" element={<RelatorioPronto />} />
            <Route path="Lotacao" element={<p>Lotacao</p>} />
            <Route path="Teste" element={<p>Teste</p>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
