import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
    const [active, setActive] = useState("/")

    

    return (
        
            <nav class="barra-menu">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <Link class={`nav-link ${active === "/" ? "active" : ""}`}
                         to="/"
                         onClick={() => setActive("/")}>Funcionários</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={`nav-link ${active === "/estoque" ? "active" : ""}`} 
                        to="/"
                        onClick={() => setActive('/estoque')}>Estoque</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={`nav-link ${active === "/clientes" ? "active" : ""}`}  to="/clientes"
                        onClick={() => setActive('/clientes')}>Clientes</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Fornecedores</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Compras</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Dívidas</Link>
                    </li>
                </ul>
            </nav>


       
    )

}