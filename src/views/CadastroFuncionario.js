import React, {useState} from "react";
import { TextField } from "@mui/material";
import {Stack} from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";

const CadastroFuncionario = () => {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')




  return (
    <div className="teste">
      <NavBar/>

      <div className="container"> 
        <div className="rows">
          <div className="col-lg-12">
            <div className="bs-component">
              <Stack direction='column'>

              <TextField
                label="Nome: *"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <TextField
                label="CPF: *"
                name="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                maxLength="11"
              />
              <TextField
                label="Email: *"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Telefone:"
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <TextField
                label="Endereco:"
                name="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
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
  );
};
export default CadastroFuncionario;
