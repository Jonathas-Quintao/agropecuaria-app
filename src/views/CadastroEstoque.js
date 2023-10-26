import React, {useState} from "react";
import { TextField } from "@mui/material";
import {Stack} from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./stylesCadastro.css"

const CadastroEstoque = () => {
    const [nome, setNome] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [lote, setLote] = useState('')
    const [validade, setValidade] = useState('')
    const [qtdEstoque, setQtdEstoque] = useState('')
    const [estoqueMin, setEstoqueMin] = useState('')
    const [estoqueMax, setEstoqueMax] = useState('')
    const [reposicao, setReposicao] = useState('')




  return (
    <div className="teste">
      <NavBar/>

      <div className="container" > 
      <div className="containerInput">

        <div className="rows">
          <div className="col-lg-12">
            <div className="bs-component">
              <Stack direction='column' className="cadastroFuncionarioStack">

              <TextField
                label="Nome: *"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="form-control"
                
              />
              <TextField
                label="Tamanho: *"
                name="tamanho"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
                className="form-control "
              />
              <TextField
                label="Lote: *"
                name="lote"
                value={lote}
                onChange={(e) => setLote(e.target.value)}
                className="form-control "
              />
              <TextField
                label="Validade: *"
                name="validade"
                value={validade}
                onChange={(e) => setValidade(e.target.value)}
                className="form-control "
              />
              <TextField
                label="Quantidade em estoque: *"
                name="qtdEstoque"
                value={qtdEstoque}
                onChange={(e) => setQtdEstoque(e.target.value)}
                className="form-control custom-text-field"
                
              />
              <TextField
                label="Estoque Mínimo: *"
                name="estoqueMin"
                value={estoqueMin}
                onChange={(e) => setEstoqueMin(e.target.value)}
                className="form-control custom-text-field"
                
              />
              <TextField
                label="Estoque Máximo: *"
                name="estoqueMax"
                value={estoqueMax}
                onChange={(e) => setEstoqueMax(e.target.value)}
                className="form-control custom-text-field"
                
              />
              <TextField
                label="Valor de reposição: *"
                name="reposicao"
                value={reposicao}
                onChange={(e) => setReposicao(e.target.value)}
                className="form-control custom-text-field"
                
              />
              </Stack>
              <Stack direction="row" spacing={1} padding={1}>

              <button type="button" className="btn btn-success">SALVAR</button>
              <button type="button" className="btn btn-danger">CANCELAR</button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default CadastroEstoque;
