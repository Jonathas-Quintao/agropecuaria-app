import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./stylesCadastro.css";

import { URL_BASE } from "../config/axios";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CadastroFornecedores = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const baseURL = `${URL_BASE}/fornecedor/${id}`;


  const [fornecedores, setFornecedores] = useState({
    razaoSocial: "",
    cnpj: "",
    email: "",
    telefone: "",
    descricao: "",
  });
  const navegar = ( pagina) => {
    navigate(`/${pagina}`);
  };

  const cancelar = () => {
    setFornecedores({
      razaoSocial: "",
    cnpj: "",
    email: "",
    telefone: "",
    descricao: "",
    })
  }

  useEffect(() => {
    if (id) {
      axios
        .get(`${baseURL}`)
        .then((response) => {
          setFornecedores(response.data);
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
                <div className="conteudoCadastro">
                <span className="titulo">CADASTRO FORNECEDORES</span>
                <Stack direction="column" className="cadastroFuncionarioStack">
                  <TextField
                    label="Razão Social: *"
                    name="razaoSocial"
                    value={fornecedores.razaoSocial}
                    onChange={(e) =>
                      setFornecedores({
                        ...fornecedores,
                        razaoSocial: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                  <TextField
                    label="CNPJ: *"
                    name="cnpj"
                    value={fornecedores.cnpj}
                    onChange={(e) =>
                      setFornecedores({ ...fornecedores, cnpj: e.target.value })
                    }
                    maxLength="14"
                    className="form-control "
                  />
                  <TextField
                    label="Email: *"
                    name="email"
                    value={fornecedores.email}
                    onChange={(e) =>
                      setFornecedores({
                        ...fornecedores,
                        email: e.target.value,
                      })
                    }
                    className="form-control "
                  />
                  <TextField
                    label="Telefone:"
                    name="telefone"
                    value={fornecedores.telefone}
                    onChange={(e) =>
                      setFornecedores({
                        ...fornecedores,
                        telefone: e.target.value,
                      })
                    }
                    className="form-control "
                  />
                  <TextField
                    label="Descrição:"
                    name="descricao"
                    value={fornecedores.descricao}
                    onChange={(e) =>
                      setFornecedores({
                        ...fornecedores,
                        descricao: e.target.value,
                      })
                    }
                    className="form-control custom-text-field"
                  />
                </Stack>
                <Stack direction="row" spacing={1} padding={1}>
                  <button type="button" className="btn btn-success" onClick={() => navegar('fornecedor')}>
                    SALVAR
                  </button>
                  <button type="button" className="btn btn-danger"  onClick={() => cancelar()}>
                    CANCELAR
                  </button>
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
export default CadastroFornecedores;
