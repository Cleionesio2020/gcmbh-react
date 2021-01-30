import React from "react";
import {
  Link, Outlet
} from "react-router-dom";

function Lotacao() {
  return (
    <div className="bg-light" style={{borderRadius:"5px",padding:"10px"}}>
    <h6 className="card-title" style={{padding:"10px",backgroundColor:"#fff",borderRadius:"5px"}}>Pagina Lotação</h6>
      <Outlet />
    </div>
  );
}

export default Lotacao;
