import React, { useState } from "react";
import "./cabecalho.css"
import { useNavigate } from "react-router-dom";

const Cabecalho = ({onPesquisar, navigate, pesquisa}) => {
    const navigation = useNavigate()

    const pesquisar = pesquisa
    const [termoPesquisa, setTermoPesquisa] = useState('')

    const handlePesquisa = () => {
        onPesquisar(termoPesquisa);
    }


    return (
        <div className="container">
            <input type="text" placeholder="PESQUISAR" className="input-pesquisar " value={termoPesquisa} onChange={(e) => setTermoPesquisa(e.target.value)}/>
            <button type="submit" className="btn-pesquisar btn btn-primary" onClick={handlePesquisa} > PESQUISAR</button>
           { pesquisar ? <button type="submit" className="btn-cadastrar btn btn-primary" onClick={() => navigation(navigate)}>CADASTRAR</button> : null } 
        </div>
    )
}

export default Cabecalho