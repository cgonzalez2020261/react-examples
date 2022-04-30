import React, { useState } from 'react'
import { Cartel } from '../Cartel/Cartel';
import { Contador } from '../Contador/Contador';
import './Main.css'

const Main = () => {
    
    const [contador, setContador] = useState(0)
    const [titulo, setTitulo] = useState("Hola Mundo")

    return (
        <div className='container'>
            <Cartel titulo={titulo} contador={contador} />
            <Contador titulo={titulo} contador={contador} setContador={setContador} />
        </div>
    )
}

export default Main;
