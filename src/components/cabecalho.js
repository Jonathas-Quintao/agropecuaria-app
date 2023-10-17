import React from "react";
import "./cabecalho.css"

const Cabecalho = () => {
    return (
        <div className="container">
            <input type="text" placeholder="PESQUISAR" className="input-pesquisar "/>
            <button type="submit" className="btn-pesquisar btn btn-primary" > PESQUISAR</button>
            <button type="submit" className="btn-cadastrar btn btn-primary">CADASTRAR PRODUTO</button> 
        </div>
    )
}

export default Cabecalho