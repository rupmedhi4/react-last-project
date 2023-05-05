import React,{useContext, useState} from 'react'
import {Button,Modal,} from 'react-bootstrap';
import CreateCart from '../../Store/CartContext/Create-Cart';

const Cart = (props) => {
    const [show, setShow] = useState(false);
    const CartCtx = useContext(CreateCart);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.title}
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>CART</Modal.Title>
          </Modal.Header>
                <Modal.Body>{CartCtx.cartList.map(elem => {
                    return <li key={Math.random()}>{elem.medicine}-{elem.description}-{elem.price}-{elem.quantity}</li>
          })}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Cart
