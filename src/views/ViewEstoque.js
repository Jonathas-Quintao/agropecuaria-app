import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Cabecalho from "../components/cabecalho";
import "./inicial.css";
import axios from "axios";
import { URL_BASE } from "../config/axios";
import {IconButton} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"


const Estoque = () => {
    const baseURL = `${URL_BASE}/produto`;

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
      <div className="conteudo">
        <Cabecalho navigate="/cadastroestoque" />
        <table className="tabela">
          <tr>
            <th>NOME</th>
            <th>TAMANHO</th>
            <th>LOTE</th>
            <th>VALIDADE</th>
            <th>QTD EM ESTOQUE</th>
            <th>ESTOQUE MÍNIMO</th>
            <th>ESTOQUE MÁXIMO</th>
            <th>VAlOR DE REPOSIÇÃO</th>
          </tr> 
          
          {dados.map((dados) => (
                    <tr key={dados.id}>
                      <td>{dados.nome}</td>
                      <td>{dados.tamanho}</td>
                      <td>{dados.lote}</td>
                      <td>{dados.validade}</td>
                      <td>{dados.quantidadeEmEstoque}</td>
                      <td>{dados.estoqueMinimo}</td>
                      <td>{dados.estoqueMaximo}</td>
                      <td>{dados.valorDeReposicao}</td>
                      <td><IconButton
                      aria-label="edit"
                      >
                        <EditIcon/>
                        </IconButton>
                        <IconButton
                      aria-label="delete"
                      >
                        <DeleteIcon/>
                        </IconButton></td>
                      
                      
                      
                    </tr>
                  ))}
          
        </table>
      </div>
    </div>
  );
};

export default Estoque;
