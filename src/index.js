import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Funcionario from './views/ViewFuncionario';
import Cliente from './views/ViewCliente';
import Fornecedores from './views/ViewFornecedores'
import Estoque from './views/ViewEstoque'
import Compras from './views/ViewCompras'
import Dividas from './views/ViewDividas'

const router =  createBrowserRouter([
    {
      path: "/",
      element: <Funcionario/>
    },
    {
      path: "clientes",
      element: <Cliente />
    },
    {
      path: 'fornecedores',
      element: <Fornecedores />
    },
    {
      path: 'estoque',
      element: <Estoque />
    },
    {
      path: 'compras',
      element: <Compras />
    },
    {
      path: 'dividas',
      element: <Dividas />
    },

  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


