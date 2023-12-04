import CadastroFuncionario from "./views/CadastroFuncionario";
import CadastroClientes from "./views/CadastroCliente"
import CadastroFornecedores from "./views/CadastroFornecedores"
import CadastroEstoque from "./views/CadastroEstoque"
import CadastroPerdas from "./views/CadastroPerdas";


import Cliente from "./views/ViewCliente";
import Funcionario from "./views/ViewFuncionario";
import Fornecedores from "./views/ViewFornecedores"
import Compras from "./views/ViewCompras"
import Estoque from "./views/ViewEstoque"
import Dividas from "./views/ViewDividas"

import PaginaProduto from "./views/PaginaProduto";
import Carrinho from "./views/Carrinho";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
    const rotas =  createBrowserRouter([
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
          path: 'produto',
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
        {
          path: 'cadastrofuncionarios/:id?',
          element: <CadastroFuncionario />
        },
        {
          path: 'cadastroclientes/:id?',
          element: <CadastroClientes />
        },
        {
          path: 'cadastroestoque/:id?',
          element: <CadastroEstoque />
        },
        {
          path: 'cadastrofornecedores/:id?',
          element: <CadastroFornecedores />
        },
        {
          path: 'cadastroperdas/:id?',
          element: <CadastroPerdas/>
        },
        {
          path: 'paginaproduto/:id?',
          element: <PaginaProduto />
        },
        {
          path: 'carrinho/:id?',
          element: <Carrinho />
        }
    
      ])

      return (
        <RouterProvider router={rotas}/>
      )

}

export default Router