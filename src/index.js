import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situacao do Aluno" 
            aluno="Pedro" 
            nota={9.3} />
        <Fragmento />
    </div>, 
    document.getElementById('root')
)
