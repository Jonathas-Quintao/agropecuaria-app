import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Cabecalho from "../components/cabecalho";
import "./inicial.css";
import axios from "axios";
import { URL_2 } from "../config/axios";

const Dividas = () => {
  const baseURL = `${URL_2}/dividas`;

  const [dados, setDados] = useState(null);

  const [termoPesquisa, setTermoPesquisa] = useState("");

  const filtrarPesquisa = (termo) => {
    setTermoPesquisa(termo);

    if (!termo) {
      axios.get(baseURL).then((response) => {
        setDados(response.data);
      });
      return;
    }
    const dadosFiltrados = dados.filter((dado) =>
      dado.nome.toLowerCase().includes(termo.toLowerCase())
    );
    setDados(dadosFiltrados);
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
    });
  }, []);
  
if (!dados) return null;





return (
  <div className="teste">
    <NavBar />
    <div className="conteudo">
      <Cabecalho navigate="/cadastrofuncionarios" pesquisa={false} onPesquisar={filtrarPesquisa}/>
      
      <div className="background">
      <span className="titulo">DÍVIDAS</span>
      <table className="tabela">
        <tr>
          <th>CLIENTE</th>
          <th>VENCIMENTO</th>
          <th>VALOR</th>
          <th>NOTA FISCAL</th>
        </tr> 
        
        {dados.map((dados) => (
                  <tr key={dados.id}>
                    <td>{dados.nome}</td>
                    <td>{dados.dataVencimento}</td>
                    <td>{dados.valor}</td>
                    <td>{dados.notaFiscal}</td>
                    
                    
                    
                  </tr>
                ))}
        
      </table>
      </div>
    </div>
  </div>
);
};

export default Dividas;
