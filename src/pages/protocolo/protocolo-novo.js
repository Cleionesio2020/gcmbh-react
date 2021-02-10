import React from "react";
import {
  Link, Outlet
} from "react-router-dom";

function ProtocoloNovo() {
  return (
    <div class="jumbotron">

      <h4>Registro novo protocolo</h4>
      <form>
        <div className="empresa">
          <div className="row">
            <div className="col-sm-4">
            <label  className="control-label">Tipo de protocolo</label>
              <select className="form-control" name="tipo_documento" >
                <option value="Selecione uma ...">Selecione uma ...</option>
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
            </div>

            <div className="col-sm">
              <label for="data_prot" className="control-label">Data Protocolo</label>
              <input id="data_prot" className="form-control input-md" name="data_protocolo" type="date" readonly />
            </div>
            <div className="col-sm">
              <label for="data_doc" className="control-label">Data do Documento</label>
              <input id="data_doc" className="form-control" name="data_documento" type="date" />
            </div>
          </div>
        </div>

        <div className="empresa">

          <h5>Orígem</h5>

          <div className="row">
            <div className="col-sm-2">
              <label class="control-label" for="bm_origem">BM / Matrícula</label>
              <input id="bm_origem" class="form-control input-md" type="text" name="bm_origem" />
            </div>

            <div class="col-sm-5">
              <label for="nome" class="control-label">Nome Funcional </label>
              <input id="nome" class="form-control input-md" type="text" name="bm_origem" />
            </div>

            <div className="col-sm-5">
              <label for="ger_ori" className="control-label">Gerência / Setor Origem</label>
              <input id="ger_ori" className="form-control" type="text" name="secretaria_origem" />
            </div>
          </div>
        </div>


        <div className="empresa">

          <h5>Destino</h5>

          <div className="row">
            <div className="col-sm-2">
              <label class="control-label" for="bm_origem">BM / Matrícula</label>
              <input id="bm_origem" class="form-control input-md" type="text" name="bm_origem" />
            </div>

            <div class="col-sm-5">
              <label for="nome" class="control-label">Nome Funcional </label>
              <input id="nome" class="form-control input-md" type="text" name="bm_origem" />
            </div>

            <div className="col-sm-5">
              <label for="ger_ori" className="control-label">Gerência / Setor Destino</label>
              <input id="ger_ori" className="form-control" type="text" name="secretaria_origem" />
            </div>
          </div>
        </div>

        <div className="empresa">
          <div className="row">
            <div className="col-sm-12">
              <label for="assunto" className="control-label">Assunto</label>
              <input id="assunto" className="form-control" type="text" name="assunto" />
            </div>

            <div className="col-sm-12">
              <label for="prot_por" className="control-label">Protocolado por </label>
              <input id="prot_por" placeholder="" className="form-control" type="text" name="usuario_nome" />
            </div>
          </div>
        </div>

        <hr />
        <button id="Cadastrar" name="Cadastrar" className="btn btn-success" type="Submit"> Salvar </button>
        &emsp;
        <button id="Cancelar" name="Cancelar" className="btn btn-danger" type="Reset">Cancelar</button>

      </form>

    </div>
  )
}

export default ProtocoloNovo
