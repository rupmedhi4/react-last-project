import React,{useContext} from 'react'
import classes from './List.module.css'
import ListItem from './ListItem'
import CreateList from "../../Store/ListContext/Create-List";

const List = () => {
  const ListCtx = useContext(CreateList);
  return (
    <div className={classes.list}>
      <h2>List</h2>
      {ListCtx.ItemList.map((item) => {
       return (
         <ListItem
           key={Math.random()}
          medicine={item.medicine}
          description={item.description}
          price={item.price}
          />
        )
      })}
    </div>
  );
}

export default List
