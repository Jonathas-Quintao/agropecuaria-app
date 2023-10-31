import React from "react";
import "./navBar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
    const [active, setActive] = useState("/")

    const location = useLocation()

    return (
        
            <nav class="barra-menu">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <Link className={`nav-link ${location.pathname === "/" || location.pathname === "/cadastrofuncionarios/:id?" ? "active" : ""}`}
                         to="/"
                         onClick={() => setActive("/")}>Funcionários</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={`nav-link ${location.pathname === "/produto" || location.pathname === "cadastroestoque/:id?" ? "active" : ""}`} 
                        to="/produto"
                        onClick={() => setActive('/estoque')}>Estoque</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={`nav-link ${location.pathname === "/clientes" || location.pathname === "/cadastroclientes/:id?" ? "active" : ""}`}  to="/clientes"
                        onClick={() => setActive('/clientes')}>Clientes</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={`nav-link ${location.pathname === "/fornecedores" || location.pathname === "/cadastrofornecedores/:id?" ? "active" : ""}`}  to="/fornecedores"
                        onClick={() => setActive('/fornecedores')}>Fornecedores</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={`nav-link ${location.pathname === "/compras" ? "active" : ""}`} to="/compras"
                        onClick={() => setActive('/compras')}>Compras</Link>
                    </li>
                    <li class="nav-item">
                        <Link class={`nav-link ${location.pathname === "/dividas" || location.pathname === "/cadastrodividas/:id?" ? "active" : ""}`} to="/dividas"
                        onClick={() => setActive('/dividas')}>Dívidas</Link>
                    </li>
                </ul>
            </nav>


       
    )

}