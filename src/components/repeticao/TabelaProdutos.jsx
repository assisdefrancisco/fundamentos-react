import React from 'react';
import produtos from '../../data/produtos'

export default props => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <table border="1">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            {/* <td>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(produto.preco)}</td> */}
                            <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}