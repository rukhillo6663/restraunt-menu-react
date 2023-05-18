import React from 'react'

function Button({content, funct}) {
  return (
    <>
        <button onClick={funct}>{content}</button>
    </>
  )
}

export default Button