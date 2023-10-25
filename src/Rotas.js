import CadastroFuncionario from "./views/CadastroFuncionario";
import CadastroCompras from "./views/CadastroCompras"
import CadastroClientes from "./views/CadastroCliente"
import CadastroFornecedores from "./views/CadastroFornecedores"
import CadastroEstoque from "./views/CadastroEstoque"
import CadastroDividas from "./views/CadastroDividas"

import Cliente from "./views/ViewCliente";
import Funcionario from "./views/ViewFuncionario";
import Fornecedores from "./views/ViewFornecedores"
import Compras from "./views/ViewCompras"
import Estoque from "./views/ViewEstoque"
import Dividas from "./views/ViewDividas"

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
          path: 'cadastrofuncionarios',
          element: <CadastroFuncionario />
        },
        {
          path: 'cadastroclientes',
          element: <CadastroClientes />
        },
        {
          path: 'cadastroestoque',
          element: <CadastroEstoque />
        },
        {
          path: 'cadastrocompras',
          element: <CadastroCompras />
        },
        {
          path: 'cadastrofornecedores',
          element: <CadastroFornecedores />
        },
        {
          path: 'cadastrodividas',
          element: <CadastroDividas />
        },
    
      ])

      return (
        <RouterProvider router={rotas}/>
      )

}

export default Router