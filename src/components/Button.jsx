import React from 'react'
import '../styles/Button.css'

function Button({content, funct, name, value}) {
  return (
    <>
        <button onClick={funct} name={name} value={value}>{content}</button>
    </>
  )
}

export default Button