import React from 'react'
import './Input.scss'

export const Input = ({placeholder, type}) => {
  return (
    <div className='input-container'> 
        <input type={type} placeholder={placeholder} />
    </div>
  )
}
