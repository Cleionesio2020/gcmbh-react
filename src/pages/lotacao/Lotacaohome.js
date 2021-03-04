import React, { useState} from "react";
import Api from "../../services/api";
import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link ,useNavigate} from "react-router-dom";

function LotacaoHome() {
  let navigate = useNavigate();
  const [codProprio, setCodProprio] = useState("");
  const [lotacao, setLotacao] = useState([]);

  function buscarPorCodProprio(event) {
    event.preventDefault();
    Api.get(`/proprio_codigo?cod_proprio=${codProprio}`)
      .then((resp) => {
        const data = resp.data;
        setLotacao(data);
        console.log(lotacao);
      })
      .catch((error) => {
        console.log(error);
      });
  }

 
  return (

    <div className="container">


<div className='top-table' >
        <div><input className="input-person" type="text" size="20" onChange={(e) => setCodProprio(e.target.value)} /> 
        <button className='btn btn-light' onClick={buscarPorCodProprio}>Ok</button> </div>
        <button className="btn btn-secondary" onClick={()=>navigate('LotacaoNova')}> <FaPlus size="15" />&nbsp;&nbsp;Adicionar Novo</button>
      </div>

      <div className="overflow-auto" style={{ height: 400 }}>
        <div className="card" style={{ padding: 20 }}>
          <table className="table table-sm" style={{ fontSize: "12px" }}>
            <thead>
              <tr>
                <th>Cod </th>
                <th>Nome Proprio </th>
                <th>Tipo Proprio </th>
                <th>Regional </th>
                <th>Telefones </th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lotacao.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.codProprio}</td>
                    <td>{item.nomeProprio}</td>
                    <td>{item.tipoProprio}</td>
                    <td>{item.regional}</td>
                    <td>{item.telefone}</td>
                    <td>
                      <Link to="NovoLancamento"><FaEdit color="green" size="17" /></Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                      <FaTrash color="red" size="17" /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default LotacaoHome;
