import React from 'react';

export default props => {

    return (
        <div>
            <label htmlFor="passoInicial">Passo: </label>
            <input type="number" value={props.passo} onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}