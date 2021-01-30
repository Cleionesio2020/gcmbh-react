import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Admin from "../pages/Admin";
import Escala from "../pages/Escala";

import Pronto from "../pages/pronto/Pronto";
import ProntoLancamento from "../pages/pronto/ProntoLancamento";
import RelatorioPronto from "../pages/pronto/RelatorioPronto";

import Lotacao from "../pages/lotacao/Lotacao";
import LotacaoHome from "../pages/lotacao/Lotacaohome";
import LotacaoNova from "../pages/lotacao/LotacaoNova";
import LotacaoEfetivo from "../pages/lotacao/LotacaoEfetivo";

import EscalaHome from "../pages/EscalaHome";
import BancoHora from "../pages/banco_hora/Banco-hora";
import BancoHome from "../pages/banco_hora/BancoHome";
import BancoNovoLancamento from "../pages/banco_hora/BancoNovoLancamento"

import Servidor from "../pages/servidor/Servidor";
import ServidorHome from "../pages/servidor/ServidorHome";
import ServidorEscala from "../pages/servidor/ServidorEscala";
import ServidorLotacao from "../pages/servidor/ServidorLotacao";

import Footer from "../components/Footer";

export default function Rotas() {
  return (
    <Router>
      <NavBar />
      <div className="container" style={{ marginTop: "20px", minHeight:"700px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/:id" element={<Admin />} />


          <Route path="/Pronto" element={<Pronto />} >
            <Route path="/" element={<ProntoLancamento />} />
            <Route path="/RelatorioPronto" element={<RelatorioPronto />} />
          </Route>

          <Route path="/Banco-Hora" element={<BancoHora />} >
            <Route path="/" element={<BancoNovoLancamento />} />
            <Route path="/novolancamento" element={<BancoHome />} />
          </Route>


          <Route path="/Servidor" element={<Servidor />}>
            <Route path="/" element={<ServidorHome />} />
            <Route path="/ServidorEscala" element={<ServidorEscala />} />
            <Route path="/ServidorLotacao" element={<ServidorLotacao />} />
          </Route>

          <Route element={<p>Pagina não encontrada</p>} />


          <Route path="/Escala" element={<Escala />}>
            <Route path="/" element={<EscalaHome />} />

          </Route>

          <Route path="/Lotacao" element={<Lotacao />}>
            <Route path="/" element={<LotacaoHome />} />
            <Route path="/:LotacaoNova" element={<LotacaoNova />} />
            <Route path="/:LotacaoEfetivo" element={<LotacaoEfetivo />} />
          </Route>

          <Route path="/Teste" element={<p>Teste</p>} />


        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
