import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Cabecalho from "../components/cabecalho";
import "../components/tabela.css";
import "./inicial.css";
import axios from "axios";
import { URL_BASE } from "../config/axios";

const Cliente = () => {
  const baseURL = `${URL_BASE}/cliente`;

  const [dados, setDados] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
    });
  }, []);

  if (!dados) return null;

  return (
    <div className="teste">
      <NavBar />
      <div>
        <Cabecalho />
        <table className="tabela">
          <tr>
            <th>NOME</th>
            <th>CPF</th>
            <th>EMAIL</th>
            <th>TELEFONE</th>
            <th>ENDEREÇO</th>
          </tr>

          {dados.map((dados) => (
            <tr key={dados.id}>
              <td>{dados.nome}</td>
              <td>{dados.cpf}</td>
              <td>{dados.email}</td>
              <td>{dados.telefone}</td>
              <td>{dados.endereco}</td>
            </tr>
          ))}
        </table>
        
      </div>
    </div>
  );
};

export default Cliente;
