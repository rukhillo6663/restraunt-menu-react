import React from 'react'
import '../styles/Shopping.css'

import {MdOutlineAttachMoney} from 'react-icons/md'
import {IoIosRemoveCircle} from 'react-icons/io'
import {BsFillCartDashFill} from 'react-icons/bs'



function ShoppingList({itemList, deleteFromShoppingList}) {
  return (
    <div className='shoppingList-container'>
      <h1>My Shopping list</h1>
      {itemList !==''&&
       itemList.map((item, index) => {
        const {price, id}= item
           
        return (
          <>
             <div className="shopping-item" key={index+1
            }>
             <img src={`/images/item-${id}.jpeg`}  alt="menu"/>
               <div ><MdOutlineAttachMoney className='price-container'/>{price}</div>
               <BsFillCartDashFill className='deleteBtn' onClick={()=>{deleteFromShoppingList(id, price)}} />
            </div>
          </> 
        );
      })
     }
    </div>
  )
}

export default ShoppingList