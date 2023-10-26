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
                        to="/produto"
                        onClick={() => setActive('/estoque')}>Estoque</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={`nav-link ${active === "/clientes" ? "active" : ""}`}  to="/clientes"
                        onClick={() => setActive('/clientes')}>Clientes</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={`nav-link ${active === "/fornecedores" ? "active" : ""}`}  to="/fornecedores"
                        onClick={() => setActive('/fornecedores')}>Fornecedores</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={`nav-link ${active === "/compras" ? "active" : ""}`} to="/compras"
                        onClick={() => setActive('/compras')}>Compras</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={`nav-link ${active === "/dividas" ? "active" : ""}`} to="/dividas"
                        onClick={() => setActive('/dividas')}>Dívidas</Link>
                    </li>
                </ul>
            </nav>


       
    )

}