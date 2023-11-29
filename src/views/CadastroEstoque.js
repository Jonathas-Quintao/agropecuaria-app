import React, {useState, useEffect} from "react";
import { TextField } from "@mui/material";
import {Stack} from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./stylesCadastro.css"

import { URL_BASE } from "../config/axios";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CadastroEstoque = () => {
    const { id } = useParams();

  const baseURL = `${URL_BASE}/produto/${id}`;

  const navigation = useNavigate()

  const [estoque, setEstoque] = useState({
    nome: '',
    preco: 0,
    lote: '',
    validade: '',
    quantidadeEmEstoque: 0,
    estoqueMinimo: 0,
    estoqueMaximo: 0,
    valorDeReposicao: 0,
    img_url: ''
  });

  const cancelar = () => {
    setEstoque({
      nome: '',
      preco: 0,
      lote: '',
      validade: '',
      quantidadeEmEstoque: 0,
      estoqueMinimo: 0,
      estoqueMaximo: 0,
      valorDeReposicao: 0,
      img_url: ''
    })
  }

  

  useEffect(() => {
    if (id) {
      axios
        .get(`${baseURL}`)
        .then((response) => {
          setEstoque(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados", error);
        });
    }
  }, [id]);


  return (
    <div className="teste">
      <NavBar/>

      <div className="container" > 
      <div className="containerInput">

        <div className="rows">
          <div className="col-lg-12">
            <div className="bs-component">
              <div className="conteudoCadastro">

              <Stack direction='column' className="cadastroFuncionarioStack">

              <TextField
                label="Nome: *"
                name="nome"
                value={estoque.nome}
                onChange={(e) =>  setEstoque({ ...estoque, nome: e.target.value })}
                className="form-control"
                
              />
              <TextField
                label="Preço: *"
                name="preco"
                value={estoque.preco}
                onChange={(e) =>  setEstoque({ ...estoque, preco: e.target.value })}
                className="form-control custom-text-field"
                
              />
              <TextField
                label="Lote: *"
                name="lote"
                value={estoque.lote}
                onChange={(e) =>  setEstoque({ ...estoque, lote: e.target.value })}
                className="form-control "
              />
              <TextField
                label="Validade: *"
                name="validade"
                value={estoque.validade}
                onChange={(e) =>  setEstoque({ ...estoque, validade: e.target.value })}
                className="form-control "
              />
              <TextField
                label="Quantidade em estoque: *"
                name="qtdEstoque"
                value={estoque.quantidadeEmEstoque}
                onChange={(e) =>  setEstoque({ ...estoque, qtdEstoque: e.target.value })}
                className="form-control custom-text-field"
                
              />
              <TextField
                label="Estoque Mínimo: *"
                name="estoqueMin"
                value={estoque.estoqueMinimo}
                onChange={(e) =>  setEstoque({ ...estoque, estoqueMin: e.target.value })}
                className="form-control custom-text-field"
                
              />
              <TextField
                label="Estoque Máximo: *"
                name="estoqueMax"
                value={estoque.estoqueMaximo}
                onChange={(e) =>  setEstoque({ ...estoque, estoqueMax: e.target.value })}
                className="form-control custom-text-field"
                
              />
              <TextField
                label="Valor de reposição: *"
                name="reposicao"
                value={estoque.valorDeReposicao}
                onChange={(e) =>  setEstoque({ ...estoque, reposicao: e.target.value })}
                className="form-control custom-text-field"
                
              />
              <TextField
                label="Url do produto: *"
                name="img_url"
                value={estoque.img_url}
                onChange={(e) =>  setEstoque({ ...estoque, img_url: e.target.value })}
                className="form-control custom-text-field"
                
              />
              </Stack>
              <Stack direction="row" spacing={1} padding={1}>

              <button type="button" className="btn btn-success">SALVAR</button>
              <button type="button" className="btn btn-danger"  onClick={() => cancelar()}>CANCELAR</button>
              </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default CadastroEstoque;
