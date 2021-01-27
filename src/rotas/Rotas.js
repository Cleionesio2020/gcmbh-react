import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Admin from "../pages/Admin";
import Escala from "../pages/Escala";
import Pronto from "../pages/Pronto";
import Lotacao from "../pages/Lotacao";
import RelatorioPronto from "../pages/RelatorioPronto";
import EscalaHome from "../pages/EscalaHome";
import BancoHora from "../pages/banco_hora/Banco-hora";
import BancoHome from "../pages/banco_hora/BancoHome";
import BancoNovoLancamento from "../pages/banco_hora/BancoNovoLancamento"
import Footer from "../components/Footer";

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

          <Route path="/Banco-Hora" element={<BancoHora />} >
            <Route path="/" element={<BancoNovoLancamento />} />
            <Route path="/novolancamento" element={<BancoHome/>} />
          </Route>

          <Route element={<p>Pagina não encontrada</p>} />


          <Route path="/Escala" element={<Escala />}>
            <Route path="/" element={<EscalaHome />} />
            <Route path="/RelatorioPronto" element={<RelatorioPronto />} />
            <Route path="/Lotacao" element={<Lotacao />} />
            <Route path="/Teste" element={<p>Teste</p>} />
          </Route>

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
