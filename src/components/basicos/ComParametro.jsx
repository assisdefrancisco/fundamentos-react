import React from 'react'

export default function(props) {
    const { titulo, aluno, nota } = props;

    const status = nota >= 7 ? 'Aprovado' : 'Recuperação'

    return (
        <div>
            <h2>{titulo}</h2>
            <p>
                <strong>{aluno} </strong> 
                 tem nota 
                <strong> {nota} </strong>

                e foi 
                <strong> {status}</strong>
            </p>
        </div>
    )
}