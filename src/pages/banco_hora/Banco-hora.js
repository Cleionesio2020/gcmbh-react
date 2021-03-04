
import React from "react";

import {
  Link, Outlet
} from "react-router-dom";

function BancoHora() {
  return (
    <div className="bg-light" style={{borderRadius:"5px",padding:"10px"}}>
    <h6 className="card-title" style={{padding:"10px",backgroundColor:"#fff",borderRadius:"5px"}}>Controle de Banco de hora</h6>
      <Outlet />
    </div>
  )
}

export default BancoHora;
