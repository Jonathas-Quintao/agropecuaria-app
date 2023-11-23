import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./stylesCadastro.css";

import { URL_BASE } from "../config/axios";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CadastroClientes = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const baseURL = `${URL_BASE}/cliente/${id}`;

  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    bairro:"",
    rua: "",
    numero_residencial: "",
    complemento: "",
  });

  const cancelar = () => {
    setCliente({
      nome: "",
    cpf: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    bairro:"",
    rua: "",
    numero_residencial: "",
    complemento: "",
    })
  }

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

  return (
    <div className="teste">
      <NavBar />

      <div className="container">
        <div className="containerInput">
          <div className="rows">
            <div className="col-lg-12">
              <div className="bs-component">
                <div className="conteudoCadastro">

                <Stack direction="column" className="cadastroFuncionarioStack">
                  <TextField
                    label="Nome: *"
                    name="nome"
                    value={cliente.nome}
                    onChange={(e) =>
                      setCliente({ ...cliente, nome: e.target.value })
                    }
                    className="form-control"
                  />
                  <TextField
                    label="CPF: *"
                    name="cpf"
                    value={cliente.cpf}
                    onChange={(e) =>
                      setCliente({ ...cliente, cpf: e.target.value })
                    }
                    maxLength="11"
                    className="form-control "
                  />
                  <TextField
                    label="Email: *"
                    name="email"
                    value={cliente.email}
                    onChange={(e) =>
                      setCliente({ ...cliente, email: e.target.value })
                    }
                    className="form-control "
                  />
                  <TextField
                    label="Telefone:"
                    name="telefone"
                    value={cliente.telefone}
                    onChange={(e) =>
                      setCliente({ ...cliente, telefone: e.target.value })
                    }
                    className="form-control "
                  />
                  <TextField
                    label="Cidade:"
                    name="cidade"
                    value={cliente.cidade}
                    onChange={(e) =>
                      setCliente({ ...cliente, cidade: e.target.value })
                    }
                    className="form-control custom-text-field"
                  />
                  <TextField
                    label="Estado:"
                    name="estado"
                    value={cliente.estado}
                    onChange={(e) =>
                      setCliente({ ...cliente, estado: e.target.value })
                    }
                    className="form-control custom-text-field"
                  />
                  <TextField
                    label="Bairro:"
                    name="bairro"
                    value={cliente.bairro}
                    onChange={(e) =>
                      setCliente({ ...cliente, bairro: e.target.value })
                    }
                    className="form-control custom-text-field"
                  />
                  <TextField
                    label="Rua:"
                    name="rua"
                    value={cliente.rua}
                    onChange={(e) =>
                      setCliente({ ...cliente, rua: e.target.value })
                    }
                    className="form-control custom-text-field"
                  />
                  
                  <TextField
                    label="Numero:"
                    name="numero"
                    value={cliente.numero_residencial}
                    onChange={(e) =>
                      setCliente({ ...cliente, numero_residencial: e.target.value })
                    }
                    className="form-control custom-text-field"
                  />
                  <TextField
                    label="Complemento:"
                    name="complemento"
                    value={cliente.complemento}
                    onChange={(e) =>
                      setCliente({ ...cliente, complemento: e.target.value })
                    }
                    className="form-control custom-text-field"
                  />
                </Stack>
                <Stack direction="row" spacing={1} padding={1}>
                  <button type="button" className="btn btn-success">
                    SALVAR
                  </button>
                  <button type="button" className="btn btn-danger" onClick={() => cancelar()}>
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
export default CadastroClientes;
