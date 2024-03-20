import React from 'react';
import { Link } from "react-router-dom";

const Receita = () => {
    return (
        <div>
            <h1>Lista de Receitas</h1>
            <ul>
                <li><Link to="/recipes/1">Bolo de Chocolate Proteico</Link></li>
                <li><Link to="/recipes/2">Bolo de Laranja</Link></li>
            </ul>
        </div>
    )
}

export default Receita
