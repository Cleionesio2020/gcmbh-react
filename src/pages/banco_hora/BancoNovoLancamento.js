import React, { useEffect, useState } from "react";
import Api from "../../services/api";
import { FaEdit,FaSearch, } from "react-icons/fa";
import "./bancoHora.css"
function BancoNovoLancamento() {
  const [lancamentos, setLancamentos] = useState([]);
  const[param, setParam]=useState("");

  const buscar = () => {
    Api.get(`/banco-horas/${param}`).then((resp) => {
      setLancamentos(resp.data);
    });
  }

  return (
    <div className="container" style={{ marginTop: "30px"}}>
      <div className="row" style={{marginBottom:"10px", marginLeft:"3px"}}>
        <div classname="col-md-2">
          <input type="text" class="form-control" placeholder="BM" onChange={(e)=>setParam(e.target.value)}/>
        </div>
        <div className="col-sm-2 no-gutters" >
          <button className="btn btn-secondary" onClick={buscar}><FaSearch size=" 15"/>{" "}buscar</button>
        </div>
        <div className="col">
          <label>{lancamentos.length>0 && lancamentos[0].servidor.nomeFuncional}</label>
        </div>
      </div>

      <table className="table"
        striped
        bordered
        hover
        style={{ fontSize: "12px", padding: "2px" }}
      >
        <thead>
          <tr>
            <th>Data Lancamento</th>
            <th>Data Referência</th>
            <th>Qtd Hora</th>
            <th>Descrição</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {lancamentos.map((lanc) => {
            return (
              <tr key={lanc.id}>
                <td>{new Date(lanc.dataLancamento).toLocaleDateString()}</td>
                <td>{new Date(lanc.dataReferencia).toLocaleDateString()}</td>
                <td>{lanc.qtdHoras}</td>
                <td>{lanc.descricao}</td>
                <td>
                  <FaEdit color="#2F4F4F" size="17" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BancoNovoLancamento;
