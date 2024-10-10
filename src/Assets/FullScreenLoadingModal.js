import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import './modal.css';


const FullScreenLoadingModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-fullscreen"
      backdrop="static"
      keyboard={false}
      centered
      className="custom-opacity-modal" // Add this line
    >
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Modal.Body>
    </Modal>
  );
};


export default FullScreenLoadingModal;
