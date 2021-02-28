
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'


export default function ModalGlobal(props) {

  return (
    <div>

      <Modal show={props.show} onHide={props.handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={props.handleClose}>
            Sair
          </button>
          <button className="btn btn-primary" onClick={props.handleClose}>
            Ok
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
