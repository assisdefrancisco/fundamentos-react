import './App.css'

import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
// import Mega from './components/mega/Mega'
import Mega2 from './components/mega/Mega2'

export default _ =>
    <div className="app">
        <h1>Fundamentos React 2</h1>
        <div className="cards">            
            <Card titulo="#13 - Mega" color="#424242">
                {/* <Mega /> */}
                <Mega2 />
            </Card>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#8BAD39">
                <Input />
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>
            <Card titulo="#9 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>
            <Card titulo="#8 - Renderização condicional" color="#982395">
                <ParOuImpar numero={21} />
                {/* <UsuarioInfo usuario={{ nome: 'Fernando' }} /> */}
                <UsuarioInfo />
                {/* <UsuarioInfo usuario={{ email: 'fernando@mail.com' }} /> */}
            </Card>
            <Card titulo="#7 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos />
            </Card>
            <Card titulo="#6 - Repetição" color="#FF4C65">
                <ListaAlunos ></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
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
