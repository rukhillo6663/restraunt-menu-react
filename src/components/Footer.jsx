import React from 'react'
import '../styles/Footer.css'
import {FaFacebook, FaInstagram, FaLinkedinIn,FaGithub, FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <h1 className='footer-h1'>All rights are reserved by @X-man</h1>
      <div className="icon-wrapper">
      <p className='footer-h1'>Follow us on social media</p>
        <FaFacebook  className='footer-icon' />
        <FaTwitter  className='footer-icon'/>
        <FaInstagram className='footer-icon'/>
        <FaGithub className='footer-icon'/>
        <FaLinkedinIn   className='footer-icon'/>
        </div>
    </div>
  )
}

export default Footer