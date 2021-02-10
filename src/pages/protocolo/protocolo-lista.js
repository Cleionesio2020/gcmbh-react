import React from "react";
import { FaPlus} from "react-icons/fa";


function ProtocoloLista() {
  return (
    <div className="jumbotron">
      <div className='top-table'>
        <div><input type="text" size="10" /> <button className='btn btn-light'>Ok</button> </div>
        <button className="btn btn-secondary"> <FaPlus size="15" />&nbsp;&nbsp;Adicionar Novo</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Data Prot</th>
            <th scope="col">Data doc</th>
            <th scope="col">Origem</th>
            <th scope="col">Destino</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProtocoloLista;
