import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./paginaproduto.css";
import axios from "axios";

import Select from "react-select";

import { URL_BASE } from "../config/axios";
import { useNavigate, useParams } from "react-router-dom";

const PaginaProduto = () => {
  const navigation = useNavigate();

  const { id } = useParams();

  const baseURL = `${URL_BASE}/produto/${id}`;

  const [produto, setProduto] = useState({
    id: "",
    nome: "",
    descricao: "",
    preco: 0,
    img_url: "",
  });

  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`${baseURL}`)
        .then((response) => {
          setProduto(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados", error);
        });
    }
  }, [id]);

  const imagem = produto.img_url;

  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ];

  return (
    <div className="teste">
      <NavBar />
      <div className="conteudo">
        <div className="teste">
          <img src={imagem} alt="imagem do produto" className="imagem" />
          <div>
            <p className="titulo">{produto.nome}</p>
            <p className="descricao">{produto.descricao}</p>
            <span className="precoLabel">PREÇO: </span>
            <span className="preco">{produto.preco}</span>
            <Select
              placeholder="Quantidade"
              options={options}
              className="comboBox"
              onChange={(selectedOption) =>
                setQuantidadeSelecionada(selectedOption.value)
              }
            />
            {console.log(quantidadeSelecionada)}
            <div className="mt-3">
              {" "}
              <button
                type="button"
                className="btn btn-primary mr-2 rounded"
                onClick={() =>
                  navigation(`/carrinho`, {
                    state: {
                      produto: produto,
                      quantidade: quantidadeSelecionada,
                    },
                  })
                }
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaginaProduto;
