import React from 'react'

export default props => {
    const callback = props.quandoClicar;

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                _ => callback('João', 53, true)
            }>Fornecer INformações</button>
        </div>
    )
}