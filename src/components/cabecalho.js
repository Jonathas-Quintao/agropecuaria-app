import React from "react";
import "./cabecalho.css"
import { useNavigate } from "react-router-dom";

const Cabecalho = ({navigate}) => {
    const navigation = useNavigate()

    return (
        <div className="container">
            <input type="text" placeholder="PESQUISAR" className="input-pesquisar "/>
            <button type="submit" className="btn-pesquisar btn btn-primary" > PESQUISAR</button>
            <button type="submit" className="btn-cadastrar btn btn-primary" onClick={() => navigation(navigate)}>CADASTRAR PRODUTO</button> 
        </div>
    )
}

export default Cabecalho