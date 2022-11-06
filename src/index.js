import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css'
import Comp from './components/basicos/Primeiro'

ReactDOM.render(
    <div>
        <Comp></Comp>
        <Comp></Comp>
    </div>, 
    document.getElementById('root')
)
