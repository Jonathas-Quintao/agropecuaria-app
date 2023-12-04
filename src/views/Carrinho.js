import React from "react";
import NavBar from "../components/navbar";
import "./inicial.css";
import "./carrinho.css";

import { URL_BASE } from "../config/axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Carrinho = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const {state} = useLocation()
  const produto = state && state.produto
  const quantidade = state && state.quantidade
  const baseURL = `${URL_BASE}/produto/${id}`;

  const imagem = produto.img_url;

  return (
    <div className="teste">
      <NavBar />

      <div className="table-resposive">
        <table className="table tabelinha table-bordered table-striped ">
          <thead className="thead-dark">
            <tr>
              <th className="produto-col">Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={imagem}
                  alt="imagem do produto"
                  className="imagemCarrinho"
                />{" "}
                {produto.nome.toUpperCase()}
              </td>
              <td className="text-center align-middle">{produto.preco}</td>
              <td className="text-center align-middle">{quantidade}</td>
              <td className="text-center align-middle">{ produto.preco * quantidade}</td>
            </tr>
            
           
          </tbody>
        </table>
      <div className="table-resposive">
        <table className="table tabelinha table-bordered table-striped ">
          <thead className="thead-dark">
            <tr>
              <th>Total</th>
              <th>{produto.preco * quantidade}</th>
              
            </tr>
          </thead>
          
        </table>
      </div>
      <button type="button" className="btn btn-primary mr-2 rounded botao" >Finalizar Compra</button>
    </div>
      </div>
  );
};
export default Carrinho;
