import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Segundo Componente 2" 
            subtitulo="Componente com parametro 2" />
    </div>, 
    document.getElementById('root')
)
