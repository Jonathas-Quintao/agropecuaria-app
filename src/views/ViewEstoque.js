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
            <th>CPF</th>
            <th>EMAIL</th>
            <th>TELEFONE</th>
            <th>EDITAR</th>
          </tr> 
          
          {/* {dados.map((dados) => (
                    <tr key={dados.id}>
                      <td>{dados.nome}</td>
                      <td>{dados.cpf}</td>
                      <td>{dados.email}</td>
                      <td>{dados.telefone}</td>
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
                  ))} */}
          
        </table>
      </div>
    </div>
  );
};

export default Estoque;
