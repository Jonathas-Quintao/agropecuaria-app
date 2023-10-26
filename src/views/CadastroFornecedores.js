import React, {useState} from "react";
import { TextField } from "@mui/material";
import {Stack} from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./stylesCadastro.css"

const CadastroFornecedores = () => {
    const [razaoSocial, setRazaoSocial] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [descricao, setDescricao] = useState('')




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
                label="Razão Social: *"
                name="razaoSocial"
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                className="form-control"
                
              />
              <TextField
                label="CNPJ: *"
                name="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                maxLength="14"
                className="form-control "
              />
              <TextField
                label="Email: *"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control "
              />
              <TextField
                label="Telefone:"
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="form-control "
              />
              <TextField
                label="Descrição:"
                name="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
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
export default CadastroFornecedores;
