import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/basicos/layout/Card'

import './App.css'

export default _ =>
    <div className="app">
        <h1>Fundamentos React 2</h1>
        <div className="cards">
            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                    titulo="Situacao do Aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
