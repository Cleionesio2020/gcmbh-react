import React, { useState } from "react";
import { FaHome,FaAdobe,FaClock,FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Api from "../../services/api";

function ServidorHome() {
  const[ servidor, setServidor]=useState([])
  function buscarServidor(){

  }

  return (
    <div className="container">
     
      <div className="row" style={{ marginBottom: "5px",margin:"5px 0", width:"100%"}}>
        <div classname="col-md-3">
          <input type="text" class="form-control" placeholder="BM/Matrícula" onChange={(e) => setServidor(e.target.value)} />
        </div>
        <div className="col-sm-3 no-gutters" >
          <nutton className="btn btn-secondary" onClick={buscarServidor}><FaSearch size="15" />&nbsp;&nbsp;buscar</nutton>
        </div>
      </div>

      <div className="overflow-auto" style={{ height: 400 }}>
        <div className="card" style={{ padding: 20 }}>
          <table className="table table-sm" style={{ fontSize: "14px" }}>
            <thead>
              <tr>
                <th>BM </th>
                <th>Nome Funcional </th>
                <th> Nome Completo</th>
                <th>Cargo </th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              
                  <tr>
                    <td>87134-x</td>
                    <td>Cleionesio Soares</td>
                    <td>Cleionesio Soares Ribeiro e Silva</td>
                    <td>GCD II</td>
                    <td><div 
                    style={{display:"flex", width:"240px",justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                      <div>
                        <Link to="ServidorEscala"><FaClock/>-Escala</Link></div> 
                        <div><a href="#"><FaHome/>-Lotação</a></div> 
                        <div><a href="#"><FaAdobe/>-Ficha</a></div>
                      </div>
                      </td>
                  </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default ServidorHome;
