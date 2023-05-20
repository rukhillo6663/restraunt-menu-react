import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosAddCircle} from 'react-icons/io'


function Card({ menu, addToShoppingList}) {
  const {id, title,price,desc,img}= menu
  return (
    <div id={id} className='container' >
               <Link to={`/about/${title}`} ><img src={img}  alt='menu'/></Link>
               <div className='card'>
                <div className='top-container'>
                  <h3 className='title'>{title}</h3>
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