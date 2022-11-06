import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ =>
    <div id="app">
        <h1>Fundamentos React 2</h1>
        <Aleatorio min={1} max={10} />
        <Fragmento />
        <ComParametro
            titulo="Situacao do Aluno"
            aluno="Pedro"
            nota={9.3} />
        <Primeiro></Primeiro>
    </div>
