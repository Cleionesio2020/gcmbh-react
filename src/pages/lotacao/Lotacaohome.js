import React, { useState} from "react";
import Api from "../../services/api";
import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function LotacaoHome() {
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
     
      <div className="row" style={{ marginBottom: "5px",margin:"5px 0", width:"100%"}}>
        <div classname="col-md-3">
          <input type="text" class="form-control" placeholder="Cod lotação" onChange={(e) => setCodProprio(e.target.value)} />
        </div>
        <div className="col-sm-3 no-gutters" >
          <button className="btn btn-secondary" onClick={buscarPorCodProprio}><FaSearch size="15" />&nbsp;&nbsp;buscar</button>
        </div>
        <div className="col-sm-6 no-gutters" style={{textAlign: "right", padding:0 }} >
          <Link className="btn btn-primary" to="LotacaoNova" ><span style={{ display: "flex", alignItems: "center" }}><FaPlus /> &nbsp; Adicionar Novo </span></Link>
        </div>
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
