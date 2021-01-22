import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Api from "../services/api";

function Escala() {
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
    <div>
      <div
        className="container"
        style={{
          marginBottom: "10px",
          backgroundColor: "#3333",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        <form>
          <div className="row justify-content-center">
            <div className="col-sm-4 ">
              <input
                type="text"
                name="bm"
                placeholder="Bm"
                size="5"
                onChange={(e) => setCodProprio(e.target.value)}
              />

              <button className="btn" onClick={buscarPorCodProprio}>
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="overflow-auto" style={{ height: 400 }}>
        <div className="card" style={{ padding: 20 }}>
          <table className="table table-sm" style={{ fontSize: "12px" }}>
            <thead>
              <tr>
                <th scope="col">Cod </th>
                <th scope="col">Nome Proprio </th>
                <th scope="col">Tipo Proprio </th>
                <th scope="col">Regional </th>
                <th scope="col">Telefones </th>
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

export default Escala;
