import React, { useEffect, useState } from "react";
import "./inicial.css";
import axios from "axios";
import { URL_BASE } from "../config/axios";

import {  useLocation, } from "react-router-dom";



const FinalizarCompras = () => {


  const {state} = useLocation()
  const produto = state && state.produto
  const quantidade = state && state.quantidade

  return (
    <div className="teste">
      
      <div className="conteudo">
        
        
        <div className="background">
        <span className="titulo">FINALIZAR COMPRA</span>
        <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputFuncionario">Nome do Funcionário</label>
                <input type="text" class="form-control rounded" id="inputFuncionario" placeholder="Digite o nome do funcionário"/>
            </div>
            <div class="form-group col-md-6">
                <label for="inputCliente">Cliente</label>
                <input type="text" class="form-control rounded" id="inputCliente" placeholder="Digite o nome do cliente"/>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputProduto">Produto Comprado</label>
                <input type="text" class="form-control rounded" id="inputProduto" value={produto.nome}/>
            </div>
            <div class="form-group col-md-3">
                <label for="inputQuantidade">Quantidade</label>
                <input type="number" class="form-control rounded" id="inputQuantidade"  value={quantidade} readOnly/>
            </div>
            <div class="form-group col-md-3">
                <label for="inputValor">Valor da Compra</label>
                <input type="number" class="form-control rounded" id="inputValor"  value={produto.preco * quantidade}/>
            </div>
        </div>
        <button type="button" class="btn btn-primary rounded mt-3" >Finalizar Compra</button>
    </form>
        
        
        </div>
      </div>
    </div>
  );
};

export default FinalizarCompras;
