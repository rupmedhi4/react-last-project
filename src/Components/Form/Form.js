import React, { useContext, useRef } from "react";
import classes from "./Form.module.css";
import CreateList from "../../Store/ListContext/Create-List";

const Form = () => {
  const ListCtx = useContext(CreateList);
  const candyRef = useRef();
  const desRef = useRef();
  const priceRef = useRef();
  const addCandyHandler = (e) => {
    e.preventDefault();

    const medicine = candyRef.current.value;
    const description = desRef.current.value;
    const price = priceRef.current.value;
    console.log(
      candyRef.current.value,
      desRef.current.value,
      priceRef.current.value
    );

    ListCtx.addItem({ medicine, description, price });
  };

  return (
    <form className={classes.form}>
      <label>Medicine</label>
      <select ref={candyRef}>
        <option>Medicine</option>
        <option>Paracetamol</option>
        <option>Vicks</option>
        <option>Dolo</option>
      </select>

      <label>Descripiton</label>
      <select ref={desRef}>
        <option>Descripiton</option>
        <option>XYZ</option>
        <option>XYZ</option>
        <option>XYZ</option>
      </select>
      <label>Price</label>
      <input type="number" ref={priceRef} />
      <button onClick={addCandyHandler}>Add Candy</button>
    </form>
  );
};

export default Form;
