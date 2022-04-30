import React from 'react'
import './Cartel.css'

export const Cartel = ({titulo, contador}) => {

  return (
      <div className='cartel'>
        <span>{titulo}: {contador}</span>
      </div>
  )
}
