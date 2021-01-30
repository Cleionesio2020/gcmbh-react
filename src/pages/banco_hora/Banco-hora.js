
import React from "react";

import {
  Link, Outlet
} from "react-router-dom";

function BancoHora() {
  return (
    <div className="content" style={{ marginTop: "20px" }} >
      <ul className="nav nav-tabs" id="myTab" role="tablist">
       
        <li className="nav-item">
          <Link className="nav-link active" id="home-tab" data-toggle="tab" to="" role="tab" aria-controls="home" aria-selected="true">Lançamentos</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" id="home-tab" data-toggle="tab" to="novolancamento" role="tab" aria-controls="home" aria-selected="false">Novo Lancamento</Link>
        </li>


      </ul>
      <div className="panel-toobar">
        <Outlet />
      </div>
    </div>
  )
}

export default BancoHora;
