import React from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {AiFillLike} from 'react-icons/ai'




function Card({ menu, addToShoppingList, addToWishList}) {
  const {id, title,price,desc,img}= menu
  return (
    <div id={id} className='container' >
               <Link to={`/info/${title}`} ><img src={img}  alt='menu'/></Link>
               <div className='card'>
                <div className='top-container'>
                  <h3>{title}</h3>
                  <h4 className='price-tag'><strong>${price}</strong></h4>
                  </div>
                  <div className="bottom-container">
                  <p>{desc}</p>
                </div>
                <AiFillLike className='wishBtn'    onClick={()=>{addToWishList(menu)}}/>
                <BsFillCartPlusFill className='addBtn' onClick={()=>addToShoppingList(menu)} /> 
               </div>
                
    </div>
  )
}

export default Card