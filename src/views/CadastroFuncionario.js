import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./stylesCadastro.css";
import { URL_BASE } from "../config/axios";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CadastroFuncionario = () => {
 

  const navigate = useNavigate();

  const { id } = useParams();

  const baseURL = `${URL_BASE}/funcionario/${id}`;

  const [funcionario, setFuncionario] = useState({
    nome: '',
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
          setFuncionario(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados", error);
        });
    }
  }, [id]);

  return (
    <div className="teste">
      <NavBar />

      <div className="container">
        <div className="containerInput">
          <div className="rows">
            <div className="col-lg-12">
              <div className="bs-component">
                <Stack direction="column" className="cadastroFuncionarioStack">
                  <TextField
                    label="Nome: *"
                    name="nome"
                    value={funcionario.nome}
                    onChange={(e) =>
                      setFuncionario({ ...funcionario, nome: e.target.value })
                    }
                    maxLength="11"
                    className="form-control "
                  />
                  <TextField
                    label="CPF: *"
                    name="cpf"
                    value={funcionario.cpf}
                    onChange={(e) =>
                      setFuncionario({ ...funcionario, cpf: e.target.value })
                    }
                    maxLength="11"
                    className="form-control "
                  />
                  <TextField
                    label="Email: *"
                    name="email"
                    value={funcionario.email}
                    onChange={(e) =>
                      setFuncionario({ ...funcionario, email: e.target.value })
                    }
                    className="form-control "
                  />
                  <TextField
                    label="Telefone:"
                    name="telefone"
                    value={funcionario.telefone}
                    onChange={(e) =>
                      setFuncionario({
                        ...funcionario,
                        telefone: e.target.value,
                      })
                    }
                    className="form-control "
                  />
                  <TextField
                    label="Endereco:"
                    name="endereco"
                    value={funcionario.endereco}
                    onChange={(e) =>
                      setFuncionario({
                        ...funcionario,
                        endereco: e.target.value,
                      })
                    }
                    className="form-control custom-text-field"
                  />
                </Stack>
                <Stack direction="row" spacing={1} padding={1}>
                  <button type="button" className="btn btn-success">
                    SALVAR
                  </button>
                  <button type="button" className="btn btn-danger">
                    CANCELAR
                  </button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CadastroFuncionario;
