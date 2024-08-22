import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import "./EPrdCart.css";

function Orderstatus() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate= useNavigate();

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Place order
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="d-flex justify-content-center align-items-center" closeButton>
          <Modal.Title>Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body className="EOrderpop">
           Your Order placed successfully!
        </Modal.Body>
        <Modal.Body className="EOrderpop1">
           Thank you for your purchase <br />
           <h5>Please leave us a review</h5>
           <p className="EOrderRat"><span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span></p>
           See you soon again
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center align-items-center">
          <Button variant="warning" onClick={()=>navigate("/")}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Orderstatus;