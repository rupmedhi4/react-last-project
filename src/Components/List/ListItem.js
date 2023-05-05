import React,{ useContext,useRef } from 'react'
import { Button } from 'react-bootstrap'
import CreateCart from '../../Store/CartContext/Create-Cart'

const ListItem = (props) => {
  const quantityRef = useRef();
  const CartCtx = useContext(CreateCart);

  const addItemToCart = () => {
    const obj = {
      medicine: props.medicine,
      description: props.description,
      price: props.price,
      quantity : quantityRef.current.value,
    }
    // console.log(obj);
    CartCtx.addToCart(obj);
  }
 


  return (
    <div>
      <span style={{ margin: "1rem" }}>{props.medicine}</span>
      <span style={{ margin: "1rem" }}>{props.description}</span>
      <span style={{ margin: "1rem" }}>{props.price}</span>

      <input ref={quantityRef}
        style={{ width: "3rem" }}
        type="number"
        defaultValue={1}
        set={1}
      />

      <Button onClick={addItemToCart} className="mx-2" variant="outline-info">
        AddToCart
      </Button>
    </div>
  );
}

export default ListItem
