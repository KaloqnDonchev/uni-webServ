import Item from './Item';
import React, { useState } from 'react';


const orderItems = [{id:1, name:'Шапка', count:1}, {id:2, name:'Яке', count:2}, {id:3, name:'Блуза', count:3}];


function Order(props) {
  const [items, setItems] = useState(orderItems);
  
  function increaceItemCount(id){
            const orderCopy = JSON.parse(JSON.stringify(items));       
            
            for(let i=0 ; i<orderCopy.length ; i++)
            {
                	if(orderCopy[i].id===id)
                	{
                   	let itemCopy = orderCopy[i];
                    	itemCopy.count++;
                  
                    	setItems(orderCopy);
    
                    	break;
                	}
            }
  }

  function decreaseItemCount(id) {
    const orderCopy =JSON.parse(JSON.stringify(items));

    for (let i=0; i<orderCopy.length; i++) {
      if(orderCopy[i].id===id)
                	{
                   	let itemCopy = orderCopy[i];
                    	itemCopy.count--;
                  
                    	setItems(orderCopy);
    
                    	break;
                	}
    }
  }

  function deleteItem(id) {
    const orderCopy =JSON.parse(JSON.stringify(items));

    for(let i=0; i < orderCopy.length; i++) {
      if (orderCopy[i].id === id) {
        const newListItem = items.filter((item) => item.id !== id);
        setItems(newListItem);
      }
    }
  }

  return items.map(item=><Item key={item.id} singleItem={item} increaceItemCount={increaceItemCount}
     decreaseItemCount={decreaseItemCount} deleteItem={deleteItem} />);

}

export default Order;