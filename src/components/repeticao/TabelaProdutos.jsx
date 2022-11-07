import React from 'react';
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {

    return (
        <div className='TabelaProdutos' style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map( (produto, i) => (
                        <tr key={produto.id} className={ i % 2 == 0 ? 'Par' : 'Impar'}>
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