import React, { useState, useEffect } from "react";
import { FaPlus, FaRegEdit, FaEye, FaEnvelope, FaUserEdit, FaList } from "react-icons/fa";
import Api from "../../services/api";
import { useNavigate, useParams } from 'react-router-dom';


function ProtocoloVerDespacho() {
  const [protocolo, setProtocolo] = useState({
    numProtocolo:"", servidorDestino:{bm:"",nomeFuncional:""},
    servidorOrigem:{bm:"",nomeFuncional:""}
  });
  let navigate = useNavigate();

  const { id } = useParams();//parametro que veio na url

  useEffect(() => {
    const carrega = async () => {
      const result = await Api.get(`protocolo/${id}`)
      setProtocolo(result.data);
    };
    carrega();
  }, []);


  return (
    <div className="jumbotron">
      <div className='top-table' >
        <div><h5>Detalhes do protocolo: &nbsp; <span style={{color:"red"}}>{protocolo.numProtocolo}</span></h5></div>
        <button className="btn btn-secondary" onClick={()=>navigate('/Protocolo')}> <FaList size="15" />&nbsp;&nbsp;Voltar lista</button>
      </div>
      
      <div className="bloco-card">
        <div className="row">
          <div className="col-sm">
            <label className="label-card">Num protocolo:</label><br />{protocolo.tipoProtocolo} 
          </div>
          <div className="col-sm">
            <label className="label-card">Data protocolo:</label><br />{protocolo.dataProtocolo}
          </div>
          <div className="col-sm">
            <label className="label-card">Data Documento:</label><br />{protocolo.dataDocumento}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm">
            <label className="label-card">Origem BM:</label><br />{protocolo.servidorOrigem.bm}
          </div>
          <div className="col-sm">
            <label className="label-card">Origem nome funcional:</label><br />{protocolo.servidorOrigem.nomeFuncional}
          </div>

          <div className="col-sm">
            <label className="label-card">Setor Origem:</label><br />{protocolo.setorOrigem}
          </div>
        </div>
        <hr />
        <div className="row " >
          <div className="col-sm">
            <label className="label-card">Destino BM:</label><br />{protocolo.servidorDestino.bm}
          </div>
          <div className="col-sm">
            <label className="label-card">Destino nome Funcional:</label><br />{protocolo.servidorDestino.nomeFuncional}
          </div>
          <div className="col-sm">
            <label className="label-card">Setor Destino:</label><br />{protocolo.setorOrigem}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm">
            <label className="label-card">Assunto:</label><br />{protocolo.assunto}
          </div>
        </div>
      </div>
      <h5>Despachos</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Data Despacho</th>
            <th scope="col">Origem</th>
            <th scope="col">Destino</th>
            <th scope="col">despacho</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">dfsdfsdfsdf</td>
            <td scope="row">dfsdfsdfsdf</td>
            <td scope="row">dfsdfsdfsdf</td>
            <td scope="row">dfsdfsdfsdf</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  }
  


export default ProtocoloVerDespacho;
