import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Cabecalho from "../components/cabecalho";
import "./inicial.css";
import axios from "axios";
import { URL_BASE } from "../config/axios";
import {IconButton} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { mensagemErro, mensagemSucesso } from "../components/toastr";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Estoque = () => {
    const baseURL = `${URL_BASE}/produto`;

    const navigate = useNavigate()

    const [dados, setDados] = useState(null);

    const navegar = (id, pagina) => {
      navigate(`/${pagina}/${id}`);
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
        mensagemSucesso(`Professor excluído com sucesso!`);
        setDados(
          dados.filter((dado) => {
            return dado.id !== id;
          })
        );
      })
      .catch(function (error) {
        mensagemErro(`Erro ao excluir o professor`);
      });
  }


  return (
    <div className="teste">
      <NavBar />
      <div className="conteudo">
        <Cabecalho navigate="/cadastroestoque" />
        <table className="tabela">
          <tr>
            <th>NOME</th>
            
            <th>LOTE</th>
            <th>VALIDADE</th>
            <th>QTD EM ESTOQUE</th>
            <th>ESTOQUE MÍNIMO</th>
            <th>ESTOQUE MÁXIMO</th>
            <th>VAlOR DE REPOSIÇÃO</th>
            <th>EDITAR</th>
          </tr> 
          
          {dados.map((dados) => (
                    <tr key={dados.id}>
                     <td onClick={() => navegar(dados.id, "paginaproduto" )}>{dados.nome}</td>
                      
                      <td>{dados.lote}</td>
                      <td>{dados.validade}</td>
                      <td>{dados.quantidadeEmEstoque}</td>
                      <td>{dados.estoqueMinimo}</td>
                      <td>{dados.estoqueMaximo}</td>
                      <td>{dados.valorDeReposicao}</td>
                      <td><IconButton
                      aria-label="edit"
                      onClick={() => navegar(dados.id, 'cadastroestoque')}
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
  );
};

export default Estoque;
