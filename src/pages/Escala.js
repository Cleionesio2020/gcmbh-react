import React from 'react';
import {
  Link, Outlet, useNavigate
} from "react-router-dom";
import './escala.css'


function Escala() {
  return (
    <>
      <div className="content" style={{ marginTop: "20px" }} >
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <Link className="nav-link active" id="home-tab" data-toggle="tab" to="" role="tab" aria-controls="home" aria-selected="true">Escala</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" id="contact-tab" data-toggle="tab" to="RelatorioPronto" role="tab" aria-controls="contact" aria-selected="false">Relatório pronto</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" id="contact-tab" data-toggle="tab" to="Teste" role="tab" aria-controls="contact" aria-selected="false">Teste</Link>
          </li>
        </ul>
        <div className="panel-toobar">
          <Outlet />
        </div>
      </div>
    </>

  )
}

export default Escala;
