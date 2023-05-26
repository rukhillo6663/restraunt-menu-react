import React from 'react'
import '../styles/wishList.css'

import {MdOutlineAttachMoney} from 'react-icons/md'
import {BsFillCartDashFill} from 'react-icons/bs'

export default function WishList({wishList, deleteFromWishList}) {
  return (
    <div className='wishList-container'>
      <h1>My wish list</h1>
      {wishList !==''&&
       wishList.map((item, index) => {
        const {id}= item
           
        return (
          <>
             <div className="wish-item" key={index+1}>
             <img src={`/images/item-${id}.jpeg`}  alt="menu"/>
               <BsFillCartDashFill className='deleteBtn'  onClick={()=>{
                deleteFromWishList(id)}}/>
            </div>
          </> 
        );
      })
     }
    </div>
  )
}
