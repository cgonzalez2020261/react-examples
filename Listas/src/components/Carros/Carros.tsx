import React from 'react'
import './Carros.css'
import { Carro } from '../interfaces/Carro';

interface Props {
  carros : Carro[]
}

export const Carros = (props : Props) => {

  return (
    <ul>
      {
        props.carros.map( ( carro, index ) => {
          return <li key={index}> {carro.marca} | {carro.color} | {carro.modelo} </li>
        } )
      }
    </ul>
  )
}



