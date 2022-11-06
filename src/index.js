import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situacao do Aluno" 
            aluno="Pedro" 
            nota={9.3} />
    </div>, 
    document.getElementById('root')
)
