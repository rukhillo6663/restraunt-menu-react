import React from 'react'
import '../styles/About.css'
import { useParams, Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

function About({menu}) {
    const params = useParams();
    const activeMenu=menu.find((item)=>item.title===params.title)
    const {title,price,category,desc, id}=activeMenu
    
    

  return (
    <>
    
    <Link to='/'  className='home-icon'><h2 ><AiFillHome/> </h2></Link>
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