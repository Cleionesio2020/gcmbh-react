import React, { useState } from "react";
import { FaHome, FaAdobe, FaClock, FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Api from "../../services/api";
import { useNavigate } from 'react-router-dom';

function ServidorHome() {
  let navigate = useNavigate();
  const [servidor, setServidor] = useState([])
  function buscarServidor() {


  }

  return (
    <div className="container">

      <div className='top-table' >
        <div><input className="input-person" type="text" size="20" /> <button className='btn btn-light'>Ok</button> </div>
        <button className="btn btn-secondary" onClick={() => navigate('servidor-ficha')}> <FaPlus size="15" />&nbsp;&nbsp;Adicionar Novo</button>
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
                  style={{ display: "flex", width: "240px", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                  <div>
                    <Link to="ServidorEscala"><FaClock />&nbsp;Escala</Link>
                  </div>
                  <div><Link to="ServidorLotacao"><FaHome />&nbsp;Lotação</Link></div>
                  <div><a href="#"><FaAdobe />&nbsp;Ficha</a></div>
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
