import React, { useState } from 'react';
import axios from '../services/api'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

function RelatorioPronto() {
  const [prontos, setPronto] = useState([]);

  function navegar() {

    axios.get('/pronto/87134-x')
      .then(res => {
        setPronto(res.data);
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="pelatorio-pronto-content">
      <div style={{ padding: "20px", backgroundColor: onabort }} >
        <div className="row">
          <div className="col-sm-3" >
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div className="col-sm-3" >
            <input type="month" class="form-control" placeholder="First name" />
          </div>
          <button onClick={navegar} className="btn btn-secondary">Buscar</button>
        </div>

      </div>


      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Hora inicio</th>
            <th scope="col">Hora fim</th>
            <th scope="col">Previto inicio</th>
            <th scope="col">Previsto fim</th>
            <th scope="col">Tipo</th>
            <th scope="col">Opçoes</th>
          </tr>
        </thead>
        <tbody>


          {
            prontos.map((item => {
              return (
                <tr key={item.id_pronto}>
                  <td>{new Date(item.data).toLocaleDateString("pt-BR")}</td>
                  <td>{item.horaInicio}</td>
                  <td>{item.horaFim}</td>
                  <td>{item.horaPrevistaInicio}</td>
                  <td>{item.horaPrevistaFim}</td>
                  <td>{item.tipo}</td>
                  <td><div
                    style={{ display:"flex", width: "50px", justifyContent:"space-between" }}>
                    <FaRegEdit color="#333" /> <FaTrashAlt  color="red"/>
                  </div></td>
                </tr>
              )
            })
            )}



        </tbody>
      </table>
    </div>

  )
}

export default RelatorioPronto;
