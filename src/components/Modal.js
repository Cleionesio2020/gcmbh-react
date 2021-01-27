import React, { useState } from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalGlobal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton bsSize="sm">
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tem certeza que quer apagar isso ?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Salvar Alterações
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Sair
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
