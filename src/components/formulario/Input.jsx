import React, { useState } from 'react'
import './Input.css'

export default props => {
    const [valor, setValor] = useState('Inicial')
    
    return (
        <div>
            <h2>{valor}</h2>
            <input value={valor} onChange={e => setValor(e.target.value)} />            

            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} readOnly />{/*  componente não controlado está associado a um estado mas o componente está marcado para somente leitura */}
                <input value={undefined} />{/*  componente não controlado, não está associdado a nenhum estado */}
            </div>
        </div>
    )
}