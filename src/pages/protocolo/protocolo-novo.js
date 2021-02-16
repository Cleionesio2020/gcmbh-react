import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Api from "../../services/api";
import moment from 'moment';
import { FaList } from "react-icons/fa";



function ProtocoloNovo() {
  let  navigate = useNavigate();
  const datahoje = moment();

  const { register, handleSubmit, watch, errors } = useForm();
  
  const onSubmit = data => {
    const usuario={id:1}
    const dataAlterada = {...data, usuario}
    console.log(dataAlterada)
    Api.post('/protocolo',dataAlterada).then(resp=>{
        console.log("Salvo com Sucesso>>>>>"+resp.data)
    })
    .catch(erro=>{
      console.log(erro)
    })
  }

let { id } =  useParams()


  return (
    <div className="jumbotron">

<div className='top-table' >
        <div><h4>Adicionar novo protocolo</h4></div>
        <button className="btn btn-secondary" onClick={()=>navigate('/Protocolo')}> <FaList size="15" />&nbsp;&nbsp;Voltar lista</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="empresa">
          <div className="row" >
            <div className="col-sm-4">
              <label className="control-label">Tipo de protocolo</label>
              <select className="form-control" name="tipoProtocolo" ref={register({required: true})}>
                <option value="" >Selecione uma ...</option>
                <option value="ata">Ata</option>
                <option value="atestado">Atestado médico</option>
                <option value="atestadoComparecimento">Atestado de Comparecimento</option>
                <option value="audição">Audição / Apuração</option>
                <option value="audição">BI</option>
                <option value="carta">Carta</option>
                <option value="convocação">convocação</option>
                <option value="fir">FIR</option>
                <option value="intimação">Intimação</option>
                <option value="licença">licença</option>
                <option value="memorando">Memorando</option>
                <option value="ofício">Ofício</option>
                <option value="ordemDeServico">Ordem de Servico</option>
                <option value="permuta">Permuta</option>
                <option value="periciaMedica">Perícia Médica</option>
                <option value="projeto">Projeto</option>
                <option value="readaptacaoFuncional">Readaptação Funcional</option>
                <option value="relatório">Relatório</option>
                <option value="solicitaçao">Solicitação</option>
              </select>
              {errors.tipoProtocolo && <small className="error">Este valor é requerido</small>}
            </div>
          

            <div className="col-sm">
              <label for="data_prot" className="control-label">Data Protocolo</label>
              <input id="data_prot" className="form-control input-md" value={datahoje.format('YYYY-MM-DDTHH:mm')} 
              name="dataProtocolo" type="datetime-local"  readOnly ref={register} />
            </div>
            <div className="col-sm">
              <label for="data_doc" className="control-label">Data do Documento</label>
              <input id="data_doc" className="form-control" name="dataDocumento" type="date" ref={register} />
            </div>
          </div>
        </div>

        <div className="empresa">

          <h5>Orígem</h5>

          <div className="row">
            <div className="col-sm-2">
              <label className="control-label" for="bm_origem">BM / Matrícula</label>
              <input id="bm_origem" className="form-control input-md" type="text" name="servidorOrigem.bm" ref={register} />
            </div>

            <div className="col-sm-5">
              <label for="nome" className="control-label">Nome Funcional </label>
              <input id="nome" className="form-control input-md" type="text" name="servidorOrigem.nomeFuncional" ref={register} />
            </div>

            <div className="col-sm-5">
              <label for="ger_ori" className="control-label">Gerência / Setor Origem</label>
              <input id="ger_ori" className="form-control" type="text" name="setorOrigem" ref={register}/>
            </div>
          </div>
        </div>


        <div className="empresa">

          <h5>Destino</h5>

          <div className="row">
            <div className="col-sm-2">
              <label className="control-label" for="bm_dest">BM / Matrícula</label>
              <input id="bm_dest" className="form-control input-md" type="text" name="servidorDestino.bm" ref={register} />
            </div>

            <div className="col-sm-5">
              <label for="nome_dest" className="control-label">Nome Funcional </label>
              <input id="nome_dest" className="form-control input-md" type="text" name="servidorDestino.nomefuncional" ref={register} />
            </div>

            <div className="col-sm-5">
              <label for="ger_dest" className="control-label">Gerência / Setor Destino</label>
              <input id="ger_dest" className="form-control" type="text" name="setorDestino" ref={register} />
            </div>
          </div>
        </div>

        <div className="empresa">
          <div className="row">
            <div className="col-sm-12">
              <label for="assunto" className="control-label">Assunto (Resumo)</label>
              <input id="assunto" className="form-control" type="text" name="assunto" ref={ register}   />       
              </div>

            <div className="col-sm-12">
              <label for="prot_por" className="control-label">Protocolado por </label>
              <input id="prot_por" placeholder="" className="form-control" type="text" name="usuario.nome" ref={register}/>
            </div>
          </div>
        </div>

        <hr />
        <button  name="Cadastrar" className="btn btn-success" type="Submit"> Salvar </button>
        &emsp;
        <button name="Cancelar" className="btn btn-danger" type="Reset">Cancelar</button>

      </form>

    </div>
  )
}

export default ProtocoloNovo
