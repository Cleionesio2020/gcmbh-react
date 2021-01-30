
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'


export default function ModalGlobal(props) {

  return (
    <div>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={props.handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={props.handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
