import React, { useState } from "react";
import { FaPlus,FaEye, } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import moment from "moment";


function LancamentoHome() {
const dadosIniciais =[
  {
      "id": 1,
      "dataInicio": "2021-06-27T22:31:07.439+00:00",
      "dataFim": "2021-06-27T23:20:07.439+00:00",
      "horaAcionamento": "8:00",
      "orgaoAcionador": "populares",
      "atividade": {
          "id": 2,
          "codigo": "PP",
          "descricao": "Passagem Periódica"
      },
      "guarnicao": {
          "id": 5,
          "descricao": "FISCOPE N",
          "turno": 1,
          "codigo": "FISCOPE N DIA-1",
          "escala": "12X36 - D1",
          "areaAtuacao": "NORTE",
          "controlesVtr": []
      },
      "proprio": {
          "id": 3,
          "codigo": "8320",
          "nome": "CENTRO DE SA[UDE SANTA AMELIA",
          "latitude": null,
          "longitude": null
      },
      "endereco": null,
      "qtdAnotados": 2,
      "observacaoAtividade": "obs teste"
  },
  {
      "id": 2,
      "dataInicio": "2021-06-27T22:31:07.439+00:00",
      "dataFim": "2021-06-27T23:20:07.439+00:00",
      "horaAcionamento": "8:00",
      "orgaoAcionador": "populares",
      "atividade": {
          "id": 2,
          "codigo": "PP",
          "descricao": "Passagem Periódica"
      },
      "guarnicao": {
          "id": 5,
          "descricao": "FISCOPE N",
          "turno": 1,
          "codigo": "FISCOPE N DIA-1",
          "escala": "12X36 - D1",
          "areaAtuacao": "NORTE",
          "controlesVtr": []
      },
      "proprio": {
          "id": 3,
          "codigo": "8320",
          "nome": "CENTRO DE SA[UDE SANTA AMELIA",
          "latitude": null,
          "longitude": null
      },
      "endereco": null,
      "qtdAnotados": 2,
      "observacaoAtividade": "obs teste"
  },
  {
      "id": 3,
      "dataInicio": "2021-06-27T22:31:07.439+00:00",
      "dataFim": "2021-06-27T23:20:07.439+00:00",
      "horaAcionamento": "8:00",
      "orgaoAcionador": "populares",
      "atividade": {
          "id": 2,
          "codigo": "PP",
          "descricao": "Passagem Periódica"
      },
      "guarnicao": {
          "id": 5,
          "descricao": "FISCOPE N",
          "turno": 1,
          "codigo": "FISCOPE N DIA-1",
          "escala": "12X36 - D1",
          "areaAtuacao": "NORTE",
          "controlesVtr": []
      },
      "proprio": {
          "id": 3,
          "codigo": "8320",
          "nome": "CENTRO DE SA[UDE SANTA AMELIA",
          "latitude": null,
          "longitude": null
      },
      "endereco": null,
      "qtdAnotados": 2,
      "observacaoAtividade": "obs teste"
  }
]


  const [lancamento, setLancamento] = useState(dadosIniciais);
  let navigate = useNavigate();
  
  function handleEdit(idProtocolo){
      navigate(`novo_protocolo/${idProtocolo}`)
  }

  return (
    <div className="jumbotron">
      <div className='top-table' >
        <div><input className="input-person" type="text" size="20" /> <button className='btn btn-light'>Ok</button> </div>
        <button className="btn btn-secondary" onClick={()=>navigate('lancamento_novo')}> <FaPlus size="15" />&nbsp;&nbsp;Adicionar Novo</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">guarniçao</th>
            <th scope="col">Atividade</th>
            <th scope="col">Proprio</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fim</th>
          </tr>
        </thead>
        <tbody>
          {lancamento.map(item => {
            return (
              <tr key={item.id}>
                <td scope="row">{moment(Date.now()).format('DD/MM/YYYY') }</td>
                <td scope="row">{item.guarnicao.codigo}</td>
                <td scope="row">{item.atividade.codigo}</td>
                <td scope="row">{item.proprio.codigo}</td>
                <td scope="row">{moment(item.dataInicio).format('hh:mm')}</td>
                <td scope="row">{moment(item.dataFim).format('hh:mm')}</td>
                <td scope="row"> 
                <button className="btn-icon" onClick={()=>navigate(`protocolo_ver_despacho/${item.id}`)}><FaEye color="green"/> Ver </button></td>
              </tr>

            )
          })}


        </tbody>
      </table>
    </div>
  );
}

export default LancamentoHome;
