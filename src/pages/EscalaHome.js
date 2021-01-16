import React, { useEffect, useState } from 'react';
import Api from "../services/api"

function EscalaHome() {
  const [escala, setEscala] = useState({});

  useEffect(() => {

    async function carregar() {
      let dados = await Api.get("/escala/87134-x").then(resp => {
        setEscala(resp.data);

        console.log(escala)

      }).catch(error => {
        console.log(error)
      })
    }
    carregar();
  },
    [])

  return (
    <>
      <div className="card">
        <div class="card-header">
          Escala de seviço atual - Cleionesio
  
</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> Escala: {escala.escala}</li>
          <li className="list-group-item">Início {escala.horaInicio}</li>
          <li className="list-group-item"> Fim {escala.horaFim}</li>
          <li className="list-group-item"> Observão{escala.obsEscala} </li>
        </ul>
        <div className="card-body">
          <a href="#" class="btn btn-primary">Editar escala</a>

        </div>

      </div>
    </>

  )
}

export default EscalaHome;
