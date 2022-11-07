import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default _ => {
    let nome = '?'
    let idade = 0
    let nerd = false

    // nome idade nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        console.log(nomeParam, idadeParam, idadeParam);
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                <span> <strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}