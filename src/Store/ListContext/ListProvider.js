import React, { useEffect, useState } from "react";
import CreateList from "./Create-List";
const ListProvider = (props) => {
  const listId = localStorage.getItem("listId");
  // console.log(listId);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("listId")) {
      getListFromCrud();
    }
  }, [listId])
  
  const getListFromCrud = async() => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/b550415c2a2a4fb19addf95ab3d037dd/List`
      );
        

      if (response.ok) {
        console.log("get ok");
        const data = await response.json();
        console.log(data[0].ListItems);
        setSelectedList(data[0].ListItems);
      } else {
        console.log("get not ok");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const postDataOnCrud = async (newCartItems) => {
    console.log(newCartItems);
    try {
      const response = await fetch(
        `https://crudcrud.com/api/b550415c2a2a4fb19addf95ab3d037dd/List`,
        {
          method: "POST",
          body: JSON.stringify({
            ListItems: newCartItems,
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
        localStorage.setItem("listId", data._id);
      } else {
        console.log("post not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const putDataOnCrud = async (newCartItems) => {
    console.log(newCartItems);
    try {
      const response = await fetch(
        `https://crudcrud.com/api/b550415c2a2a4fb19addf95ab3d037dd/List/${localStorage.getItem(
          "listId"
        )}`,
        {
          method: "PUT",
          body: JSON.stringify({
            ListItems: newCartItems,
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

  const addItemHandler = (item) => {
    // console.log(item);
    let updatedList;
    setSelectedList((prev) => {
      updatedList = [...prev, item];
      // console.log(updatedList);
      return updatedList;
    });

    setTimeout(() => {
       if (localStorage.getItem("listId")) {
         // console.log(selectedList);
         putDataOnCrud(updatedList);
       } else {
         postDataOnCrud(updatedList);
       }
    },2000)
   
   
   
  };

  const context = {
    ItemList: selectedList,
    addItem: addItemHandler,
  };
  return (
    <CreateList.Provider value={context}>{props.children}</CreateList.Provider>
  );
};

export default ListProvider;
