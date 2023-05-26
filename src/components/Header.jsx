import React from 'react'
import '../styles/Header.css'

import {Link} from 'react-router-dom'
import { MdOutlineAttachMoney } from 'react-icons/md'
const Header =({total})=>{
    return (
        <>
        <Link to={'/'} className='menu-container'> <h1>Our Menu<hr></hr></h1></Link>

        <div className="total-money">  Total:<MdOutlineAttachMoney />{total}</div>
        </>
    )
}
export default Header;
