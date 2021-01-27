import React, { useEffect, useState } from "react";
import Api from "../../services/api";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
function BancoNovoLancamento() {
  const [lancamentos, setLancamentos] = useState([]);

  useEffect(() => {
    Api.get(`/banco-horas/87134-x`).then((resp) => {
      setLancamentos(resp.data);
    });
  }, []);

  return (
    <Container style={{ marginTop: "30px" }}>
      <div>Servidor: Cleionesio Servidor</div>
      <Table
        striped
        bordered
        hover
        style={{ fontSize: "12px", padding: "2px" }}
      >
        <thead>
          <tr>
            <th>Data Lancamento</th>
            <th>Data Referência</th>
            <th>Qtd Hora</th>
            <th>Descrição</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {lancamentos.map((lanc) => {
            return (
              <tr key={lanc.id}>
                <td>{new Date(lanc.dataLancamento).toLocaleDateString()}</td>
                <td>{new Date(lanc.dataReferencia).toLocaleDateString()}</td>
                <td>{lanc.qtdHoras}</td>
                <td>{lanc.descricao}</td>
                <td>
                  <FaEdit color="#2F4F4F" size="17" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default BancoNovoLancamento;
