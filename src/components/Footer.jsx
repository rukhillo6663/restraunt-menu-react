import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedinIn,FaGithub, FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <h1 className='footer-h1'>All rights are reserved by @X-man</h1>
      <div className="icon-wrapper">
      <p className='footer-h1'>Follow us on social media</p>
        <FaFacebook  style={{color:'whitesmoke', backgroundColor:'rgb(126, 84, 6)', margin:'10px'}} size={20}/>
        <FaTwitter  style={{color:'whitesmoke', backgroundColor:'rgb(126, 84, 6)', margin:'10px'}} size={20}/>
        <FaInstagram style={{color:'whitesmoke', backgroundColor:'rgb(126, 84, 6)', margin:'10px'}}size={20}/>
        <FaGithub style={{color:'whitesmoke', backgroundColor:'rgb(126, 84, 6)', margin:'10px'}}size={20}/>
        <FaLinkedinIn   size={20} style={{color:'whitesmoke', backgroundColor:'rgb(126, 84, 6)', margin:'10px'}}/>
        </div>
    </div>
  )
}

export default Footer