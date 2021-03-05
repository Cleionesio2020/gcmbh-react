import React, { useEffect, useState } from "react";
import Api from "../../services/api";
import { FaEdit, FaPlus, FaSearch, } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import "./bancoHora.css"
function BancoNovoLancamento() {
  let navigate = useNavigate();

  const [lancamentos, setLancamentos] = useState([]);
  const [param, setParam] = useState("");

  const buscar = () => {
    Api.get(`/banco-horas/${param}`).then((resp) => {
      setLancamentos(resp.data);
    });
  }

  return (
    <div className="container" style={{ marginTop: "30px" }}>

      <div className='top-table' >
        <div><input className="input-person" type="text" size="20" onChange={(e) => setParam(e.target.value)} />
          <button className='btn btn-light' onClick={buscar}>Ok</button> </div>
        <button className="btn btn-secondary" onClick={() => navigate('novolancamento')}> <FaPlus size="15" />&nbsp;&nbsp;Adicionar Novo</button>
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
