import React, { Children } from 'react'
import './Title.scss'

export const Tiltle = ({width, m, children}) => {
  return (
    <div className='title-container' style={{width:width , margin:m} }>
        <h2> {children}</h2>
    </div>
  )
}
export const SecondaryTiltle = ({width, m, children}) => {
  return (
    <div className='title-container' style={{width:width , margin:m} }>
        <h4> {children}</h4>
    </div>
  )
}

