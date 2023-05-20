import React from 'react'

import {MdOutlineAttachMoney} from 'react-icons/md'
import {IoIosRemoveCircle} from 'react-icons/io'



function ShoppingList({itemList, deleteFromShoppingList}) {
  return (
    <div className='shoppingList-container'>
      <h1>My Shopping list</h1>
      {itemList !==''&&
       itemList.map((item) => {
        const {price, id}= item
           
        return (
          <>
             <div className="shopping-item" key={id
            }>
             <img src={`/images/item-${id}.jpeg`}  alt="menu"/>
               <div className='price-container'><MdOutlineAttachMoney size={35} style={{color:' rgb(126, 84, 6)'}}/>{price}</div>
               <IoIosRemoveCircle className='deleteBtn' onClick={()=>{deleteFromShoppingList(id, price)}} />
            </div>
          </> 
        );
      })

     }

      

    </div>
  )
}

export default ShoppingList