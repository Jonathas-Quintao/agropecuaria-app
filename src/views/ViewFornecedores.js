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


const Fornecedores = () => {
    const baseURL = `${URL_BASE}/fornecedor`;

    const navigate = useNavigate()

    const [dados, setDados] = useState(null);

    const [termoPesquisa, setTermoPesquisa] = useState("");

    const navegar = (id, pagina) => {
      navigate(`/${pagina}/${id}`);
    };

    const filtrarPesquisa = (termo) => {
      setTermoPesquisa(termo);
  
      if (!termo) {
        axios.get(baseURL).then((response) => {
          setDados(response.data);
        });
        return;
      }
      const dadosFiltrados = dados.filter((dado) =>
        dado.razaoSocial.toLowerCase().includes(termo.toLowerCase())
      );
      setDados(dadosFiltrados);
    };

    const editar = (id) => {
      navigate(`/cadastrofornecedores/${id}`);
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
        <Cabecalho navigate="/cadastrofornecedores" pesquisa={true} onPesquisar={filtrarPesquisa}/>
        <div className="background">
          <span className="titulo">FORNECEDORES</span>
        <table className="tabela">
          <tr>
            <th>RAZÃO SOCIAL</th>
            <th>CNPJ</th>
            <th>TELEFONE</th>
            <th>EMAIL</th>
            <th>DESCRIÇÃO</th>
            <th>EDITAR</th>
          </tr> 
          
          {dados.map((dados) => (
                    <tr key={dados.id}>
                      <td>{dados.razaoSocial}</td>
                      <td>{dados.cnpj}</td>
                      <td>{dados.telefone}</td>
                      <td>{dados.email}</td>
                      <td>{dados.descricao}</td>
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
        <button type="submit" className=" btn btn-primary btn-perdas" onClick={() => navegar(dados.id, 'historicocompras')} >HISTÓRICO</button> 
        </div>
      </div>
    </div>
  );
};

export default Fornecedores;
