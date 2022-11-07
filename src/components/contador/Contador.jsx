import React, { Component } from 'react'

export default class Contador extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numero: props.numeroInicial
        }
    }
    


    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>Valor Inicial: {this.state.numero}</p>
            </div>
        )
    }
}