import React from "react";
import "./navBar.css";

export default function navBar() {
    return (
        
            <nav class="barra-menu">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link active" href="/">Funcionários</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Estoque</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Clientes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Fornecedores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Compras</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Dívidas</a>
                    </li>
                </ul>
            </nav>


       
    )

}