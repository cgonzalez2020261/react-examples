import React from 'react'
import './Carros.css'
import { Carro } from '../interfaces/Carro';

interface Props {
  carros : Carro[]
}

export const Carros = (props : Props) => {

  return (
    <div className='container-carros'>
      {
        props.carros.map( ( carro, index ) => {
          return (
              ( index % 2 === 0 ) ?
                <div className='carro par' key={index}> 
                  <div>
                    {carro.marca}
                  </div>
                  <div>
                    {carro.modelo} 
                  </div>
                  <div>
                    {carro.color}
                  </div>
                  <img src={carro.imagen} />
                </div>
              :
              <div className='carro impar' key={index}> 
                <div>
                  {carro.marca}
                </div>
                <div>
                  {carro.modelo} 
                </div>
                <div>
                  {carro.color}
                </div>
                <img src={carro.imagen} /> 
              </div>
          )
        } )
      }
    </div>
  )
}



