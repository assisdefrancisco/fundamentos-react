import React from 'react';

export default () => {
    function geraNumeroMega() {
        const min = 1;
        const max = 60;
        return parseInt(Math.random() * (max - min)) + min;
    }
    
    function gerarNumeros() {
        const array = []

        for(let i = 0; i < 6; i++) {
             const numero = geraNumeroMega();
            if (!array.includes(numero) ) {
                array.push(numero);
            }
        }

        return array;
    }


    return (
        <div>
            {gerarNumeros().join(',')}
        </div>
    )
}