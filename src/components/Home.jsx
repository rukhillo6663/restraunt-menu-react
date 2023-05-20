import React from 'react'

import {Link} from 'react-router-dom'
import { MdOutlineAttachMoney } from 'react-icons/md'
const Home =({total})=>{
    return (
        <>
        <Link to={'/'} style={{ textDecoration: 'none', color:'black'}}> <h1 className="menu">Our Menu
        <hr></hr></h1></Link>

        <div class="total-money">  Total:<MdOutlineAttachMoney size={35} style={{color:' rgb(126, 84, 6)'}}/>{total}</div>
        </>
    )
}
export default Home;
