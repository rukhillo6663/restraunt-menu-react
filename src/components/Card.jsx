import React from 'react'
import {IoIosAddCircle} from 'react-icons/io'


function Card({ menu, addToShoppingList}) {
  const {id, title,price,desc,img}= menu
  return (
    <div id={id} className='container' onClick={()=>{console.log(menu)}}>
               <img src={img}  alt='image'/>
               <div className='card'>
                <div className='top-container'>
                  <h4 className='title'>{title}</h4>
                  <h4 className='price-tag'><strong>${price}</strong></h4>
                  </div>
                 <div className="bottom-container">
                 <p>{desc}</p>
                 </div>
                 <IoIosAddCircle onClick={()=>addToShoppingList(menu)} color='rgb(126, 84, 6)' style={{ margin:'10px'}} size={40}/>
                  
               </div>
                
    </div>
  )
}

export default Card