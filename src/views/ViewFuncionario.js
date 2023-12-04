import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Cabecalho from "../components/cabecalho";
import "./inicial.css";
import axios from "axios";
import { URL_BASE } from "../config/axios";
import {IconButton} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useNavigate } from "react-router-dom";



const Funcionario = () => {
    const baseURL = `${URL_BASE}/funcionario`;

    const [dados, setDados] = useState(null);

    const navigate = useNavigate()

    const editar = (id) => {
      navigate(`cadastrofuncionarios/${id}`);
    };

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setDados(response.data);
      });
    }, []);
    
  if (!dados) return null;

  async function excluir(id) {
    let data = JSON.stringify({ id });
    let url = `${baseURL}/${id}`;
    console.log(url);
    await axios
      .delete(url, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {

        setDados(
          dados.filter((dado) => {
            return dado.id !== id;
          })
        );
      })
  }

  

  return (
    <div className="teste">
      <NavBar />
      <div className="conteudo">
        <Cabecalho navigate="/cadastrofuncionarios"/>
        
        <div className="background">
        <span className="titulo">FUNCIONÁRIOS</span>
        <table className="tabela">
          <tr>
            <th>NOME</th>
            <th>CPF</th>
            <th>EMAIL</th>
            <th>TELEFONE</th>
            <th>EDITAR</th>
          </tr> 
          
          {dados.map((dados) => (
                    <tr key={dados.id}>
                      <td>{dados.nome}</td>
                      <td>{dados.cpf}</td>
                      <td>{dados.email}</td>
                      <td>{dados.telefone}</td>
                      <td><IconButton
                      aria-label="edit"
                      onClick={() => editar(dados.id)}
                      >
                        <EditIcon/>
                        </IconButton>
                        <IconButton
                      aria-label="delete"
                      onClick={() => excluir(dados.id)}
                      >
                        <DeleteIcon/>
                        </IconButton></td>
                      
                      
                      
                    </tr>
                  ))}
          
        </table>
        </div>
      </div>
    </div>
  );
};

export default Funcionario;
