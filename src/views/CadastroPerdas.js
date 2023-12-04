import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./stylesCadastro.css";


import { useNavigate } from "react-router-dom";

const CadastroPerdas = () => {
  const navigate = useNavigate()

  const [perda, setPerda] = useState({
    produto: "",
    quantidade: "",
  });

  const cancelar = () => {
    setPerda({
        produto: "",
        quantidade: "",
    })
  }

  return (
    <div className="teste">
      <NavBar />
      
      <div className="container">
        <div className="containerInput">
          <div className="rows">
            <div className="col-lg-12">
              <div className="bs-component">
                <div className="conteudoCadastro">
                <span className="titulo">CADASTRO PERDA DE PRODUTO</span>
                <Stack direction="column" className="cadastroFuncionarioStack">
                  <TextField
                    label="Produto: *"
                    name="produto"
                    value={perda.produto}
                    onChange={(e) =>
                      setPerda({
                        ...perda,
                        produto: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                  <TextField
                    label="Quantidade: *"
                    name="quantidade"
                    value={perda.quantidade}
                    onChange={(e) =>
                      setPerda({ ...perda, quantidade: e.target.value })
                    }
                    maxLength="14"
                    className="form-control "
                  />

                </Stack>
                <Stack direction="row" spacing={1} padding={1}>
                  <button type="button" className="btn btn-success">
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
export default CadastroPerdas;
