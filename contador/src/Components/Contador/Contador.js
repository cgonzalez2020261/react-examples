import React from 'react'
import './Contador.css'

export const Contador = ({titulo, contador, setContador}) => {
    const sumar = () => {
        setContador(contador+1);
    }

    const restar = () => {
        setContador(contador-1);
    }

    return (
        <div className='contador'>
            <div>
                {titulo}
            </div>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button>
        </div>
  )
}
