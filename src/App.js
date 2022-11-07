import './App.css'

import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/basicos/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

export default _ =>
    <div className="app">
        <h1>Fundamentos React 2</h1>
        <div className="cards">
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    {/* <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" /> */}
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situacao do Aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
