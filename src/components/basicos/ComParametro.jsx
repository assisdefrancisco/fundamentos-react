import React from 'react'

export default function(props) {
    const { titulo, aluno, nota } = props;

    return (
        <div>
            <h2>{titulo}</h2>
            <p>
                <strong>{aluno} </strong> 
                 tem nota 
                <strong> {nota}</strong>
            </p>
        </div>
    )
}