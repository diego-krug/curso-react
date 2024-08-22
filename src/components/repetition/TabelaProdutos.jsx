import './TabelaProdutos.css'
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
    const tableProd = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td> { produto.nome } </td>
                <td> { produto.preco } </td>
            </tr>
        );
    });

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    { tableProd }
                </tbody>
            </table>
        </div>
    )
}