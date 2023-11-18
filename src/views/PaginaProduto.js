import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";
import './paginaproduto.css'

import Select from 'react-select';

import { URL_BASE } from "../config/axios";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PaginaProduto = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const baseURL = `${URL_BASE}/cliente/${id}`;

  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    endereco: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${baseURL}`)
        .then((response) => {
          setCliente(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados", error);
        });
    }
  }, [id]);

  const imagem = 'https://amoedo.vtexassets.com/arquivos/ids/173293/Jimo-Cupim-900ml-Incolor.jpg?v=638259687623930000'

  const options = [
    { value: 'opcao1', label: '1' },
    { value: 'opcao2', label: '2' },
    { value: 'opcao3', label: '3' },
    { value: 'opcao4', label: '4' },
    { value: 'opcao5', label: '5' },
    { value: 'opcao6', label: '6' },
    { value: 'opcao7', label: '7' },
    { value: 'opcao8', label: '8' },
    { value: 'opcao9', label: '9' },
    { value: 'opcao10', label: '10' },
    { value: 'opcao11', label: '11' },
    { value: 'opcao12', label: '12' },
  ];

  return (
    <div className="teste">
      <NavBar />

        <img src={imagem} alt='imagem do produto'  className='imagem' /> 
        <div>
            <p className="titulo">TITULO</p>
            <p className="descricao">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <span className="precoLabel">PREÇO: </span>
           <span className="preco">R$39,90</span>
           <Select placeholder='Quantidade' options={options} className="comboBox"/>
           <div className="mt-3"> {/* Adiciona uma margem top */}
          <button type="button" className="btn btn-primary mr-2 rounded">Comprar</button>
          
        </div>

        </div>
        
    </div>
  );
};
export default PaginaProduto;
