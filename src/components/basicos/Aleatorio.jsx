import React from 'react'

export default (props) => {
    const { min, max } = props;
    // const valor = Math.floor(Math.random() * max + min);
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <p>Minimo: {min} e Máximo: {max}</p>
            {/* <p>Número Aleatório: {valor}</p> */}
            <p>Número Aleatório: {aleatorio}</p>
        </div>
    )
}