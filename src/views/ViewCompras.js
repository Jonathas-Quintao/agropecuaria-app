import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Cabecalho from "../components/cabecalho";
import "./inicial.css";
import axios from "axios";
import { URL_2 } from "../config/axios";

const Compras = () => {
  const baseURL = `${URL_2}/compras`;

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
      dado.cliente.toLowerCase().includes(termo.toLowerCase())
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
          <span className="titulo">COMPRAS</span>
          <table className="tabela">
            <tr>
              <th>CLIENTE</th>
              <th>FUNCIONARIO</th>
              <th>PRODUTOS</th>
              <th>TOTAL</th>
              <th>NOTA FISCAL</th>
            </tr>

            {dados.map((dados) => (
              <tr key={dados.id}>
                <td>{dados.cliente}</td>
                <td>{dados.funcionario}</td>
                <td>{dados.produtos}</td>
                <td>{dados.precoTotal}</td>
                <td>{dados.notaFiscal}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compras;
