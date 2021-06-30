import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Escala from "../pages/Escala";

import Pronto from "../pages/pronto/Pronto";
import ProntoLancamento from "../pages/pronto/ProntoLancamento";
import RelatorioPronto from "../pages/pronto/RelatorioPronto";

import Empenho from "../pages/empenhos/empenho";
import EmpenhoHome from "../pages/empenhos/empenho_home";

import EscalaHome from "../pages/EscalaHome";
import BancoHora from "../pages/banco_hora/Banco-hora";
import BancoHome from "../pages/banco_hora/BancoHome";
import BancoNovoLancamento from "../pages/banco_hora/BancoNovoLancamento"

import Servidor from "../pages/servidor/Servidor";
import ServidorHome from "../pages/servidor/ServidorHome";
import ServidorEscala from "../pages/servidor/ServidorEscala";
import ServidorLotacao from "../pages/servidor/ServidorLotacao";

import Footer from "../components/Footer";
import Protocolo from "../pages/protocolo/protocolo";
import ProtocoloLista from "../pages/protocolo/protocolo-lista";
import ProtocoloNovo from "../pages/protocolo/protocolo-novo";
import Despacho from "../pages/protocolo/despacho";
import ProtocoloVerDespacho from "../pages/protocolo/protocolo-ver-despacho";

import Ambulante from "../pages/ambulante/ambulante-home";


export default function Rotas() {
  return (
    <Router basename='/site'>
      <NavBar />
      <div style={{ marginTop: "20px", minHeight: "700px" }}>
        <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/ambulante" element={<Ambulante />} />

          <Route path="/Protocolo" element={<Protocolo />}>
            <Route path="/" element={<ProtocoloLista />} />
            <Route path="/novo_protocolo" element={<ProtocoloNovo/>} />
            <Route path="/novo_protocolo/:id" element={<ProtocoloNovo/>} />
            <Route path="/protocolo_ver_despacho/:id" element={<ProtocoloVerDespacho />} />
            <Route path="/Despacho" element={<Despacho />} />
          </Route>

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

          <Route path="/empenhos" element={<Empenho />}>
            <Route path="/" element={<EmpenhoHome />} />
          </Route>

          <Route path="/Teste" element={<p>Teste</p>} />


        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
