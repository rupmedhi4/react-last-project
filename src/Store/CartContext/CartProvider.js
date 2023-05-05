import React, { useEffect, useState } from "react";
import CreateCart from "./Create-Cart";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const cartId = localStorage.getItem('cartId');

  useEffect(() => {
    if(cartId)getCartFromCrud();
  },[cartId])

  const getCartFromCrud = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/b6e7dd1097814d7c989cbaaf34052622/Cart`
      );

      if (response.ok) {
        console.log("cart get ok");
        const data = await response.json();
        console.log(data[0].CartItems);
        setCartItem(data[0].CartItems);
      } else {
        console.log("get not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postCartDataOnCrud = async (newCartItems) => {
    console.log(newCartItems);
    try {
      const response = await fetch(
        `https://crudcrud.com/api/b6e7dd1097814d7c989cbaaf34052622/Cart`,
        {
          method: "POST",
          body: JSON.stringify({
            CartItems: newCartItems,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("post ok");
        const data = await response.json();
        console.log(data);
        localStorage.removeItem("cartId");
        localStorage.setItem("cartId", data._id);
      } else {
        console.log("post not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const putCartDataOnCrud = async (newCartItems) => {
    console.log(newCartItems);
    try {
      const response = await fetch(
        `https://crudcrud.com/api/b6e7dd1097814d7c989cbaaf34052622/Cart/${localStorage.getItem(
          "cartId"
        )}`,
        {
          method: "PUT",
          body: JSON.stringify({
            CartItems: newCartItems,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("put ok");
        // const data = await response.json();
        // console.log(data);
      } else {
        console.log("put not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCartHandler = (item) => {
    // console.log('addtocart');
    let newCartItems;
    setCartItem((prev) => {
      newCartItems = [...prev, item];
      return newCartItems;
    });
  
    setTimeout(() => {
      if (localStorage.getItem("cartId")) {
        // console.log(selectedList);
        putCartDataOnCrud(newCartItems);
      } else {
        postCartDataOnCrud(newCartItems);
      }
    }, 2000)
     
  };

  const cartContext = {
    cartList: cartItem,
    addToCart: addToCartHandler,
  };
  return (
    <CreateCart.Provider value={cartContext}>
      {props.children}
    </CreateCart.Provider>
  );
};

export default CartProvider;
