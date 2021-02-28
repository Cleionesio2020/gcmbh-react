import React, { useState, useEffect } from "react";
import { FaPlus,FaRegEdit,FaEye, FaEnvelope, FaUserEdit } from "react-icons/fa";
import Api from "../../services/api";
import { useNavigate } from 'react-router-dom';


function ProtocoloLista() {
  const [protocolos, setProtocolos] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    async function carregar() {
      let dados = await Api.get("/protocolos")
        .then((resp) => {
          setProtocolos(resp.data);
          console.log(resp.data)
        })
        .catch((error) => {
          console.log(error);
        }); 
        carregar();
    }
   
  }, []);

  function handleEdit(idProtocolo){
      navigate(`novo_protocolo/${idProtocolo}`)
  }

  return (
    <div className="jumbotron">
      <div className='top-table' >
        <div><input className="input-person" type="text" size="20" /> <button className='btn btn-light'>Ok</button> </div>
        <button className="btn btn-secondary" onClick={()=>navigate('novo_protocolo')}> <FaPlus size="15" />&nbsp;&nbsp;Adicionar Novo</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Protocolo</th>
            <th scope="col">Data Prot</th>
            <th scope="col">Data doc</th>
            <th scope="col">Origem</th>
            <th scope="col">Destino</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {protocolos.map(item => {
            return (
              <tr key={item.id}>
                <td scope="row">{item.numProtocolo}</td>
                <td scope="row">{item.dataProtocolo}</td>
                <td scope="row">{item.dataDocumento}</td>
                <td scope="row">{item.servidorOrigem? item.servidorOrigem.nomeFuncional: 'Não informado'}</td>
                <td scope="row">{item.servidorDestino.nomeFuncional}</td>
                <td scope="row"> 
                <button className="btn-icon" onClick={()=>navigate(`protocolo_ver_despacho/${item.id}`)}><FaEye color="green"/> Ver </button>&nbsp;&nbsp;
                <button className="btn-icon" onClick={()=>handleEdit(item.id)}><FaRegEdit color="blue"/> Editar </button>&nbsp;&nbsp;
                <button className="btn-icon" onClick={()=>navigate('despacho')}><FaUserEdit color="orange"/> Despacho</button></td>
              </tr>

            )
          })}


        </tbody>
      </table>
    </div>
  );
}

export default ProtocoloLista;
