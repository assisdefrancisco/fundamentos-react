import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Ana" {...props} /> {/* Operador spreed passa tudo de atributo para o componente filho */}            
            <FamiliaMembro nome="Gustavo"  sobrenome="Silva" />
        </div>
    )
}