import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Cabecalho from "../components/cabecalho";
import "./inicial.css";
import axios from "axios";
import { URL_2 } from "../config/axios";

const HistoricoComprasFornecedor = () => {
  const baseURL = `${URL_2}/comprasEstoque`;

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
      dado.fornecedor.toLowerCase().includes(termo.toLowerCase())
    );
    setDados(dadosFiltrados);
  };

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
        <Cabecalho navigate="/cadastrofuncionarios" pesquisa={false} onPesquisar={filtrarPesquisa} />

        <div className="background">
          <span className="titulo">HISTÓRICO DE COMPRAS COM FORNECEDORES</span>
          <table className="tabela">
            <tr>
              <th>FORNECEDOR</th>
              <th>DATA</th>
              <th>PRODUTOS</th>
              <th>TOTAL</th>
              <th>NOTA FISCAL</th>
            </tr>

            {dados.map((dados) => (
              <tr key={dados.id}>
                <td>{dados.fornecedor}</td>
                <td>{dados.data}</td>
                <td>{dados.produtos.join(', ')}</td>
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

export default HistoricoComprasFornecedor;
