import React from "react";
import './tabela.css'

const Tabela = () => {
  return (
    <table className="tabela">
      <tr>
        <th>NOME</th>
        <th>CPF</th>
        <th>EMAIL</th>
        <th>TELEFONE</th>
        <th>ENDEREÇO</th>
      </tr>
      <tr>
        <td>joninha</td>
        <td>0000000000</td>
        <td>joninihapitbull@email.com</td>
        <td>3284707070</td>
        <td>rua de testes</td>
      </tr>
      
    </table>
  );
};

export default Tabela