import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

function About({menu}) {
    const params = useParams();
    const activeMenu=menu.find((item)=>item.title===params.title)
    const {title,price,category,desc, id}=activeMenu
    
    

  return (
    <>
    
    <Link to='/' style={{ display:'flex', justifyContent  :'flex-end',
    padding:'0px 20px',
    textDecoration: 'none', color:'rgb(126, 84, 6)'}}><h2 ><AiFillHome size={30}/> </h2></Link>
    <h1>{title.toUpperCase()}</h1>
    <div className='single-item'>
      <div className='item-left'>
        <img src={`/images/item-${id}.jpeg`} alt="" />
      </div>
      <div className="item-right">
         
        <h1>Category: {category.toUpperCase()}</h1>  
        <h3 className='text'>{desc}</h3>
      </div>
     
        
    </div>
    </>
  )
}

export default About